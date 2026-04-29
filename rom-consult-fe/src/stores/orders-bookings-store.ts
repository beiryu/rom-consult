"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { BookingRow, BookingStatus, OrderRow, OrderStatus } from "@/components/application/dashboard/dashboard-table-data";
import { toNewestFirst } from "@/components/application/dashboard/dashboard-table-data";

type AddBookingPayload = {
    service: string;
    dateTime: string;
    status?: BookingStatus;
    createdAt?: number;
};

type AddOrderPayload = {
    item: string;
    total: string;
    date?: string;
    status?: OrderStatus;
    createdAt?: number;
};

type OrdersBookingsState = {
    bookings: BookingRow[];
    orders: OrderRow[];
    addBooking: (payload: AddBookingPayload) => BookingRow;
    addOrder: (payload: AddOrderPayload) => OrderRow;
};

const initialBookings: BookingRow[] = [
    {
        id: "booking-1",
        bookingRef: "BC-1001",
        service: "Business Strategy Session",
        dateTime: "May 02, 2026 • 10:00 AM",
        status: "scheduled",
        createdAt: Date.parse("2026-05-02T10:00:00Z"),
    },
    {
        id: "booking-2",
        bookingRef: "BC-0997",
        service: "Market Expansion Planning",
        dateTime: "Apr 21, 2026 • 03:30 PM",
        status: "completed",
        createdAt: Date.parse("2026-04-21T15:30:00Z"),
    },
    {
        id: "booking-3",
        bookingRef: "BC-0989",
        service: "Operations Health Check",
        dateTime: "Apr 15, 2026 • 11:00 AM",
        status: "cancelled",
        createdAt: Date.parse("2026-04-15T11:00:00Z"),
    },
];

const initialOrders: OrderRow[] = [
    {
        id: "order-1",
        orderRef: "ORD-2001",
        date: "Apr 27, 2026",
        item: "Consulting Starter Package",
        total: "$499.00",
        status: "paid",
        createdAt: Date.parse("2026-04-27T09:00:00Z"),
    },
    {
        id: "order-2",
        orderRef: "ORD-1996",
        date: "Apr 18, 2026",
        item: "Growth Audit Add-on",
        total: "$149.00",
        status: "pending",
        createdAt: Date.parse("2026-04-18T09:00:00Z"),
    },
    {
        id: "order-3",
        orderRef: "ORD-1982",
        date: "Apr 07, 2026",
        item: "Workshop Recording Bundle",
        total: "$89.00",
        status: "refunded",
        createdAt: Date.parse("2026-04-07T09:00:00Z"),
    },
];

const getNextRefNumber = (values: string[], prefix: "BC" | "ORD", fallbackStart: number) => {
    const maxRef = values
        .map((value) => {
            if (!value.startsWith(`${prefix}-`)) {
                return 0;
            }

            const parsed = Number.parseInt(value.slice(prefix.length + 1), 10);
            return Number.isNaN(parsed) ? 0 : parsed;
        })
        .reduce((max, current) => Math.max(max, current), 0);

    const next = Math.max(maxRef + 1, fallbackStart);
    return next.toString().padStart(4, "0");
};

const formatOrderDate = (createdAt: number) =>
    new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    }).format(new Date(createdAt));

export const useOrdersBookingsStore = create<OrdersBookingsState>()(
    persist(
        (set, get) => ({
            bookings: toNewestFirst(initialBookings),
            orders: toNewestFirst(initialOrders),
            addBooking: ({ service, dateTime, status = "scheduled", createdAt }) => {
                const nextCreatedAt = createdAt ?? Date.now();
                const state = get();
                const booking: BookingRow = {
                    id: crypto.randomUUID(),
                    bookingRef: `BC-${getNextRefNumber(
                        state.bookings.map((row) => row.bookingRef),
                        "BC",
                        1001,
                    )}`,
                    service,
                    dateTime,
                    status,
                    createdAt: nextCreatedAt,
                };

                set((current) => ({
                    bookings: toNewestFirst([...current.bookings, booking]),
                }));

                return booking;
            },
            addOrder: ({ item, total, date, status = "pending", createdAt }) => {
                const nextCreatedAt = createdAt ?? Date.now();
                const state = get();
                const order: OrderRow = {
                    id: crypto.randomUUID(),
                    orderRef: `ORD-${getNextRefNumber(
                        state.orders.map((row) => row.orderRef),
                        "ORD",
                        2001,
                    )}`,
                    date: date ?? formatOrderDate(nextCreatedAt),
                    item,
                    total,
                    status,
                    createdAt: nextCreatedAt,
                };

                set((current) => ({
                    orders: toNewestFirst([...current.orders, order]),
                }));

                return order;
            },
        }),
        {
            name: "rum-consult-orders-bookings",
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                bookings: state.bookings,
                orders: state.orders,
            }),
        },
    ),
);
