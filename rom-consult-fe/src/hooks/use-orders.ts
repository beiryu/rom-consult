"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createOrder, fetchOrders } from "@/api/orders";
import { useAuthStore } from "@/stores/auth-store";

export const orderKeys = {
    all: ["orders"] as const,
    lists: () => [...orderKeys.all, "list"] as const,
    detail: (id: string) => [...orderKeys.all, "detail", id] as const,
};

export const useOrders = () =>
    useQuery({
        queryKey: orderKeys.lists(),
        queryFn: () => fetchOrders(),
        enabled: Boolean(useAuthStore.getState().accessToken),
    });

export const useCreateOrder = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createOrder,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: orderKeys.lists() });
        },
    });
};
