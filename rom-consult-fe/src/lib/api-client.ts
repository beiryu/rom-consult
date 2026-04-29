import axios from "axios";
import { useAuthStore } from "@/stores/auth-store";
import type { ApiEnvelope } from "@/types/api";

export const apiClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1`,
});

const refreshClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1`,
});

apiClient.interceptors.request.use((config) => {
    const accessToken = useAuthStore.getState().accessToken;

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config as (typeof error.config & { _retry?: boolean }) | undefined;
        const status = error.response?.status;
        const authStore = useAuthStore.getState();

        if (status === 401 && originalRequest && !originalRequest._retry && authStore.refreshToken) {
            originalRequest._retry = true;

            try {
                const { data } = await refreshClient.get<ApiEnvelope<{ accessToken: string; refreshToken: string }>>(
                    "/auth/refresh-token",
                    {
                        headers: {
                            Authorization: `Bearer ${authStore.refreshToken}`,
                        },
                    },
                );
                const refreshedTokens = data.data;

                authStore.setTokens({
                    accessToken: refreshedTokens.accessToken,
                    refreshToken: refreshedTokens.refreshToken,
                });

                originalRequest.headers = originalRequest.headers ?? {};
                originalRequest.headers.Authorization = `Bearer ${refreshedTokens.accessToken}`;
                return apiClient(originalRequest);
            } catch {
                authStore.logout();
            }
        } else if (status === 401) {
            authStore.logout();
        }

        return Promise.reject(error);
    },
);
