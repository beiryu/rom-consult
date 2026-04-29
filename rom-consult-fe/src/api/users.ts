import { apiClient } from "@/lib/api-client";
import type { AuthUser } from "@/stores/auth-store";

export type UserProfile = AuthUser;

export type UpdateUserProfilePayload = {
    email?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    avatar?: string;
};

export const fetchUserProfile = async (): Promise<UserProfile> => {
    const { data } = await apiClient.get<UserProfile>("/user/profile");
    return data;
};

export const updateUserProfile = async (payload: UpdateUserProfilePayload): Promise<UserProfile> => {
    const { data } = await apiClient.put<UserProfile>("/user", payload);
    return data;
};

export const uploadAvatarFile = async (file: File): Promise<{ avatarUrl: string }> => {
    const formData = new FormData();
    formData.append("file", file);
    const { data } = await apiClient.post<{ avatarUrl: string }>("/user/avatar", formData);
    return data;
};
