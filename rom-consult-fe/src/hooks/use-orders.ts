"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "@/api/orders";
import { useAuthStore } from "@/stores/auth-store";

export const orderKeys = {
    all: ["orders"] as const,
    lists: () => [...orderKeys.all, "list"] as const,
    detail: (id: string) => [...orderKeys.all, "detail", id] as const,
};

export const useOrders = () =>
    useQuery({
        queryKey: orderKeys.lists(),
        queryFn: fetchOrders,
        enabled: Boolean(useAuthStore.getState().accessToken),
    });
