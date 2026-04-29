import type { BookingRow } from "@/components/application/dashboard/dashboard-table-data";
import { apiClient } from "@/lib/api-client";

export type Booking = BookingRow;

export type CreateBookingPayload = {
    service: string;
    dateTime: string;
    status?: BookingRow["status"];
};

export const fetchBookings = async (): Promise<Booking[]> => {
    const { data } = await apiClient.get<Booking[]>("/bookings");
    return data;
};

export const fetchBookingById = async (id: string): Promise<Booking> => {
    const { data } = await apiClient.get<Booking>(`/bookings/${id}`);
    return data;
};

export const createBooking = async (payload: CreateBookingPayload): Promise<Booking> => {
    const { data } = await apiClient.post<Booking>("/bookings", payload);
    return data;
};
