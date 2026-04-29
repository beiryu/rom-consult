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
        enabled: Boolean(useAuthStore.getState().accessToken),
    });

export const useUpdateProfile = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: UpdateUserProfilePayload) => updateUserProfile(payload),
        onSuccess: (data) => {
            useAuthStore.getState().updateUser({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
                avatar: data.avatar,
            });
            queryClient.invalidateQueries({ queryKey: userKeys.profile() });
        },
    });
};
