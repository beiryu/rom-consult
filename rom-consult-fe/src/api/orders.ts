import type { OrderRow } from "@/components/application/dashboard/dashboard-table-data";
import { apiClient } from "@/lib/api-client";
import type { ApiEnvelope, ApiPaginatedData, PaginationParams } from "@/types/api";

export type OrderItemApiResponse = {
    id: string;
    orderId: string;
    productId: string;
    quantity: number;
    priceAtPurchase: string;
    createdAt: string;
    updatedAt: string;
};

export type OrderApiResponse = {
    id: string;
    orderNumber: string;
    userId: string;
    status: "PENDING" | "COMPLETED" | "CANCELLED" | "REFUNDED";
    totalAmount: string;
    currency: string;
    createdAt: string;
    updatedAt: string;
    items?: OrderItemApiResponse[];
};

export type CreateOrderPayload = {
    currency?: string;
    notes?: string;
};

export type OrderListResponse = ApiPaginatedData<OrderApiResponse>;

export const mapApiOrderToRow = (order: OrderApiResponse): OrderRow => ({
    id: order.id,
    orderRef: order.orderNumber,
    date: new Date(order.createdAt).toLocaleDateString(),
    item: order.items?.length ? `${order.items.length} consulting item(s)` : "Consulting package",
    total: `$${Number(order.totalAmount).toFixed(2)}`,
    status: order.status === "PENDING" ? "pending" : order.status === "COMPLETED" ? "paid" : "refunded",
    createdAt: new Date(order.createdAt).getTime(),
});

export const fetchOrders = async (params: PaginationParams = {}): Promise<OrderListResponse> => {
    const response = await apiClient.get<ApiEnvelope<OrderListResponse>>("/orders", { params });
    return response.data.data;
};

export const createOrder = async (payload: CreateOrderPayload): Promise<OrderApiResponse> => {
    const response = await apiClient.post<ApiEnvelope<OrderApiResponse>>("/orders", payload);
    return response.data.data;
};
