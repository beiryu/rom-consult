import { apiClient } from "@/lib/api-client";
import type { AuthUser } from "@/stores/auth-store";
import type { ApiEnvelope } from "@/types/api";

export type AuthResponseDto = {
    accessToken: string;
    refreshToken: string;
    user: AuthUser;
};

export type AuthRefreshResponseDto = {
    accessToken: string;
    refreshToken: string;
};

export const loginUser = (payload: { email: string; password: string }) =>
    apiClient.post<ApiEnvelope<AuthResponseDto>>("/auth/login", payload).then((response) => response.data.data);

export const signupUser = (payload: { email: string; password: string; firstName?: string; lastName?: string }) =>
    apiClient.post<ApiEnvelope<AuthResponseDto>>("/auth/signup", payload).then((response) => response.data.data);

export const refreshTokens = (refreshToken: string) =>
    apiClient
        .get<ApiEnvelope<AuthRefreshResponseDto>>("/auth/refresh-token", {
            headers: { Authorization: `Bearer ${refreshToken}` },
        })
        .then((response) => response.data.data);

export const logoutUser = () => apiClient.post("/auth/logout");
