"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type AuthUser = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    userName: string;
    isVerified: boolean;
    phone?: string | null;
    avatar?: string | null;
};

type AuthSuccessPayload = {
    accessToken: string;
    refreshToken: string;
    user: AuthUser;
};

type AuthState = {
    user: AuthUser | null;
    accessToken: string | null;
    refreshToken: string | null;
    loginSuccess: (payload: AuthSuccessPayload) => void;
    registerSuccess: (payload: AuthSuccessPayload) => void;
    setTokens: (payload: Pick<AuthSuccessPayload, "accessToken" | "refreshToken">) => void;
    updateUser: (payload: Partial<Pick<AuthUser, "email" | "firstName" | "lastName" | "phone" | "avatar">>) => void;
    logout: () => void;
};

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            accessToken: null,
            refreshToken: null,
            loginSuccess: ({ accessToken, refreshToken, user }) =>
                set({
                    accessToken,
                    refreshToken,
                    user,
                }),
            registerSuccess: ({ accessToken, refreshToken, user }) =>
                set({
                    accessToken,
                    refreshToken,
                    user,
                }),
            setTokens: ({ accessToken, refreshToken }) => set({ accessToken, refreshToken }),
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
            logout: () => set({ user: null, accessToken: null, refreshToken: null }),
        }),
        {
            name: "rum-consult-auth",
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                user: state.user,
                accessToken: state.accessToken,
                refreshToken: state.refreshToken,
            }),
        },
    ),
);
