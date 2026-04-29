export type BookingStatus = "scheduled" | "completed" | "cancelled";
export type OrderStatus = "paid" | "pending" | "refunded";

export interface BookingRow {
    id: string;
    bookingRef: string;
    service: string;
    dateTime: string;
    status: BookingStatus;
    createdAt: number;
}

export interface OrderRow {
    id: string;
    orderRef: string;
    date: string;
    item: string;
    total: string;
    status: OrderStatus;
    createdAt: number;
}

export const toNewestFirst = <T extends { createdAt: number }>(items: T[]) => [...items].sort((a, b) => b.createdAt - a.createdAt);

export const formatStatusLabel = (status: BookingStatus | OrderStatus) => status.charAt(0).toUpperCase() + status.slice(1);
