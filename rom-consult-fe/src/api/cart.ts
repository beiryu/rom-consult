import { apiClient } from "@/lib/api-client";
import type { ApiEnvelope } from "@/types/api";

export type CartSyncItem = {
    productId: string;
    quantity: number;
};

export type CartItemResponse = {
    id: string;
    cartId: string;
    productId: string;
    quantity: number;
    unitPrice: string | null;
    createdAt: string;
    updatedAt: string;
};

export type CartResponse = {
    id: string;
    userId: string;
    items: CartItemResponse[];
    totalAmount: string;
    currency: string;
    totalItems: number;
    createdAt: string;
    updatedAt: string;
};

export const syncCart = async (items: CartSyncItem[]): Promise<CartResponse> => {
    const response = await apiClient.put<ApiEnvelope<CartResponse>>("/cart/sync", { items });
    return response.data.data;
};

export const fetchCart = async (): Promise<CartResponse> => {
    const response = await apiClient.get<ApiEnvelope<CartResponse>>("/cart");
    return response.data.data;
};

export const clearBackendCart = async (): Promise<CartResponse> => {
    const response = await apiClient.delete<ApiEnvelope<CartResponse>>("/cart");
    return response.data.data;
};
