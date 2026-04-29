"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createBooking, fetchBookings } from "@/api/bookings";
import { useAuthStore } from "@/stores/auth-store";

export const bookingKeys = {
    all: ["bookings"] as const,
    lists: () => [...bookingKeys.all, "list"] as const,
    detail: (id: string) => [...bookingKeys.all, "detail", id] as const,
};

export const useBookings = () =>
    useQuery({
        queryKey: bookingKeys.lists(),
        queryFn: fetchBookings,
        enabled: Boolean(useAuthStore.getState().token),
    });

export const useCreateBooking = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createBooking,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: bookingKeys.lists() });
        },
    });
};
