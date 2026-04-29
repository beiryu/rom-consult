import { apiClient } from "@/lib/api-client";
import type { AuthUser } from "@/stores/auth-store";
import type { ApiEnvelope } from "@/types/api";

export type UserProfile = AuthUser;

export type UpdateUserProfilePayload = {
    email?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    avatar?: string;
};

export const fetchUserProfile = async (): Promise<UserProfile> => {
    const { data } = await apiClient.get<ApiEnvelope<UserProfile>>("/user/profile");
    return data.data;
};

export const updateUserProfile = async (payload: UpdateUserProfilePayload): Promise<UserProfile> => {
    const { data } = await apiClient.put<ApiEnvelope<UserProfile>>("/user", payload);
    return data.data;
};

export const uploadAvatarFile = async (file: File): Promise<{ avatarUrl: string }> => {
    const formData = new FormData();
    formData.append("file", file);
    const { data } = await apiClient.post<ApiEnvelope<{ avatarUrl: string }>>("/user/avatar", formData);
    return data.data;
};
