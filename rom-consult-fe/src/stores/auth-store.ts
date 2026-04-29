"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type AuthUser = {
    email: string;
    fullName?: string;
    phoneNumber?: string;
    profilePhotoDataUrl?: string;
};

type LoginPayload = {
    email: string;
    token: string;
    fullName?: string;
    phoneNumber?: string;
    profilePhotoDataUrl?: string;
};

type RegisterPayload = {
    email: string;
    token: string;
    fullName: string;
    phoneNumber?: string;
};

type AuthState = {
    user: AuthUser | null;
    token: string | null;
    loginSuccess: (payload: LoginPayload) => void;
    registerSuccess: (payload: RegisterPayload) => void;
    updateUser: (payload: Partial<AuthUser>) => void;
    logout: () => void;
};

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            token: null,
            loginSuccess: ({ email, token, fullName, phoneNumber, profilePhotoDataUrl }) =>
                set({
                    token,
                    user: {
                        email,
                        fullName,
                        phoneNumber,
                        profilePhotoDataUrl,
                    },
                }),
            registerSuccess: ({ email, token, fullName, phoneNumber }) =>
                set({
                    token,
                    user: {
                        email,
                        fullName,
                        ...(phoneNumber?.trim() ? { phoneNumber: phoneNumber.trim() } : {}),
                    },
                }),
            updateUser: (payload) =>
                set((state) => {
                    if (!state.user) {
                        return state;
                    }

                    return {
                        user: {
                            ...state.user,
                            ...payload,
                        },
                    };
                }),
            logout: () => set({ user: null, token: null }),
        }),
        {
            name: "rum-consult-auth",
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                user: state.user,
                token: state.token,
            }),
        },
    ),
);
