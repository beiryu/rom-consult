import axios from "axios";
import { useAuthStore } from "@/stores/auth-store";

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
                const { data } = await refreshClient.get<{ accessToken: string; refreshToken: string }>("/auth/refresh-token", {
                    headers: {
                        Authorization: `Bearer ${authStore.refreshToken}`,
                    },
                });

                authStore.setTokens({
                    accessToken: data.accessToken,
                    refreshToken: data.refreshToken,
                });

                originalRequest.headers = originalRequest.headers ?? {};
                originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
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
