"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchUserProfile, updateUserProfile, type UpdateUserProfilePayload } from "@/api/users";
import { useAuthStore } from "@/stores/auth-store";

export const userKeys = {
    all: ["users"] as const,
    profile: () => [...userKeys.all, "profile"] as const,
};

export const useUserProfile = () =>
    useQuery({
        queryKey: userKeys.profile(),
        queryFn: fetchUserProfile,
        enabled: Boolean(useAuthStore.getState().token),
    });

export const useUpdateProfile = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ userId, payload }: { userId: string; payload: UpdateUserProfilePayload }) =>
            updateUserProfile(userId, payload),
        onSuccess: (data) => {
            useAuthStore.getState().updateUser({
                fullName: data.fullName,
                email: data.email,
            });
            queryClient.invalidateQueries({ queryKey: userKeys.profile() });
        },
    });
};
