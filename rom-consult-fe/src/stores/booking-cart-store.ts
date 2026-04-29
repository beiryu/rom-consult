"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { PlatformId, TierId } from "@/components/marketing/browse-services/booking-options";

export type BookingCartItem = {
    lineId: string;
    serviceId: string;
    tierId: TierId;
    platformId: PlatformId;
    quantity: number;
};

type AddBookingCartItemPayload = {
    serviceId: string;
    tierId: TierId;
    platformId: PlatformId;
    quantity?: number;
};

type BookingCartState = {
    items: BookingCartItem[];
    addItem: (payload: AddBookingCartItemPayload) => void;
    setLineQuantity: (lineId: string, quantity: number) => void;
    removeLine: (lineId: string) => void;
    clearCart: () => void;
};

const clampQuantity = (value: number) => {
    if (Number.isNaN(value) || value < 1) {
        return 1;
    }
    return Math.floor(value);
};

export const useBookingCartStore = create<BookingCartState>()(
    persist(
        (set) => ({
            items: [],
            addItem: ({ serviceId, tierId, platformId, quantity = 1 }) => {
                const nextQuantity = clampQuantity(quantity);

                set((state) => {
                    const existingIndex = state.items.findIndex(
                        (item) => item.serviceId === serviceId && item.tierId === tierId && item.platformId === platformId,
                    );

                    if (existingIndex === -1) {
                        return {
                            items: [
                                ...state.items,
                                {
                                    lineId: crypto.randomUUID(),
                                    serviceId,
                                    tierId,
                                    platformId,
                                    quantity: nextQuantity,
                                },
                            ],
                        };
                    }

                    const updatedItems = [...state.items];
                    const existing = updatedItems[existingIndex];
                    updatedItems[existingIndex] = {
                        ...existing,
                        quantity: existing.quantity + nextQuantity,
                    };

                    return { items: updatedItems };
                });
            },
            setLineQuantity: (lineId, quantity) => {
                const nextQuantity = clampQuantity(quantity);
                set((state) => ({
                    items: state.items.map((item) => (item.lineId === lineId ? { ...item, quantity: nextQuantity } : item)),
                }));
            },
            removeLine: (lineId) =>
                set((state) => ({
                    items: state.items.filter((item) => item.lineId !== lineId),
                })),
            clearCart: () => set({ items: [] }),
        }),
        {
            name: "rum-consult-booking-cart",
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                items: state.items,
            }),
        },
    ),
);
