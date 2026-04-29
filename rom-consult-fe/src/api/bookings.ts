import type { BookingRow, BookingStatus } from "@/components/application/dashboard/dashboard-table-data";
import { apiClient } from "@/lib/api-client";
import type { ApiEnvelope, ApiPaginatedData, PaginationParams } from "@/types/api";

export type BookingApiResponse = {
    id: string;
    bookingRef: string;
    userId: string;
    productId: string;
    platform: string | null;
    scheduledAt: string;
    status: "SCHEDULED" | "COMPLETED" | "CANCELLED";
    orderId: string | null;
    createdAt: string;
    updatedAt: string;
};

export type CreateBookingPayload = {
    productId: string;
    platform?: string;
    scheduledAt: string;
};

export type BookingListResponse = ApiPaginatedData<BookingApiResponse>;

const toBookingStatus = (status: BookingApiResponse["status"]): BookingStatus => {
    if (status === "COMPLETED") {
        return "completed";
    }

    if (status === "CANCELLED") {
        return "cancelled";
    }

    return "scheduled";
};

export const mapApiBookingToRow = (booking: BookingApiResponse, productName?: string): BookingRow => ({
    id: booking.id,
    bookingRef: booking.bookingRef,
    service: productName ?? booking.productId,
    dateTime: new Date(booking.scheduledAt).toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }),
    status: toBookingStatus(booking.status),
    createdAt: new Date(booking.createdAt).getTime(),
});

export const fetchBookings = async (params: PaginationParams = {}): Promise<BookingListResponse> => {
    const response = await apiClient.get<ApiEnvelope<BookingListResponse>>("/bookings", { params });
    return response.data.data;
};

export const createBooking = async (payload: CreateBookingPayload): Promise<BookingApiResponse> => {
    const response = await apiClient.post<ApiEnvelope<BookingApiResponse>>("/bookings", payload);
    return response.data.data;
};
