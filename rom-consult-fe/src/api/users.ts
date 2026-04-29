import { apiClient } from "@/lib/api-client";
import type { AuthUser } from "@/stores/auth-store";

export type UserProfile = AuthUser & {
    id: string;
};

export type UpdateUserProfilePayload = Partial<Pick<UserProfile, "fullName" | "email" | "phoneNumber" | "profilePhotoDataUrl">>;

export const fetchUserProfile = async (): Promise<UserProfile> => {
    const { data } = await apiClient.get<UserProfile>("/users/me");
    return data;
};

export const updateUserProfile = async (userId: string, payload: UpdateUserProfilePayload): Promise<UserProfile> => {
    const { data } = await apiClient.patch<UserProfile>(`/users/${userId}`, payload);
    return data;
};
