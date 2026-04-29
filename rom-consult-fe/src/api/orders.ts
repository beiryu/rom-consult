import type { OrderRow } from "@/components/application/dashboard/dashboard-table-data";
import { apiClient } from "@/lib/api-client";

export type Order = OrderRow;

export const fetchOrders = async (): Promise<Order[]> => {
    const { data } = await apiClient.get<Order[]>("/orders");
    return data;
};

export const fetchOrderById = async (id: string): Promise<Order> => {
    const { data } = await apiClient.get<Order>(`/orders/${id}`);
    return data;
};
