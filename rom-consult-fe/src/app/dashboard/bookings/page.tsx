"use client";

import { useMemo } from "react";
import { useQueries } from "@tanstack/react-query";
import { mapApiBookingToRow } from "@/api/bookings";
import { fetchProductById } from "@/api/products";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { formatStatusLabel, toNewestFirst } from "@/components/application/dashboard/dashboard-table-data";
import { Table, TableCard } from "@/components/application/table/table";
import { useAuthStore } from "@/stores/auth-store";
import { useBookings } from "@/hooks/use-bookings";

const statusColor = {
    scheduled: "brand",
    completed: "success",
    cancelled: "error",
} as const;

const DashboardBookingsPage = () => {
    const user = useAuthStore((state) => state.user);
    const { data, isLoading } = useBookings();
    const bookingItems = data?.items ?? [];
    const productQueries = useQueries({
        queries: bookingItems.map((booking) => ({
            queryKey: ["products", "detailById", booking.productId],
            queryFn: () => fetchProductById(booking.productId),
            enabled: Boolean(booking.productId),
        })),
    });
    const productNameById = useMemo(
        () =>
            bookingItems.reduce<Record<string, string>>((acc, booking, index) => {
                const product = productQueries[index]?.data;
                if (product) {
                    acc[booking.productId] = product.name;
                }
                return acc;
            }, {}),
        [bookingItems, productQueries],
    );
    const bookings = useMemo(
        () =>
            toNewestFirst(
                bookingItems.map((booking) => mapApiBookingToRow(booking, productNameById[booking.productId])),
            ),
        [bookingItems, productNameById],
    );

    if (!user) {
        return (
            <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center gap-4 px-4 py-16 text-center">
                <h1 className="text-display-xs font-semibold text-primary">Bookings</h1>
                <p className="text-md text-tertiary">You are not logged in or registered in this temporary session.</p>
                <Button color="primary" size="md" href="/">
                    Go to home
                </Button>
            </main>
        );
    }

    return (
        <main className="bg-secondary py-10 md:py-14">
            <div className="mx-auto flex w-full max-w-container flex-col gap-6 px-4 md:px-8">
                <TableCard.Root>
                    <TableCard.Header
                        title="Bookings"
                        badge={bookings.length.toString()}
                        description="Track your upcoming and completed consulting sessions."
                        contentTrailing={
                            <Button color="secondary" size="sm" href="/dashboard">
                                Back to dashboard
                            </Button>
                        }
                    />

                    {isLoading ? (
                        <div className="px-6 py-10 text-center">
                            <p className="text-sm text-tertiary">Loading bookings...</p>
                        </div>
                    ) : bookings.length === 0 ? (
                        <div className="px-6 py-10 text-center">
                            <p className="text-sm text-tertiary">No bookings found yet.</p>
                        </div>
                    ) : (
                        <Table aria-label="Bookings table">
                            <Table.Header>
                                <Table.Head isRowHeader>Booking Ref</Table.Head>
                                <Table.Head>Service</Table.Head>
                                <Table.Head>Date & Time</Table.Head>
                                <Table.Head>Status</Table.Head>
                            </Table.Header>
                            <Table.Body>
                                {bookings.map((booking) => (
                                    <Table.Row key={booking.id} id={booking.id}>
                                        <Table.Cell className="font-medium text-primary">
                                            {booking.bookingRef}
                                        </Table.Cell>
                                        <Table.Cell>{booking.service}</Table.Cell>
                                        <Table.Cell>{booking.dateTime}</Table.Cell>
                                        <Table.Cell>
                                            <Badge color={statusColor[booking.status]} size="sm">
                                                {formatStatusLabel(booking.status)}
                                            </Badge>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    )}
                </TableCard.Root>
            </div>
        </main>
    );
};

export default DashboardBookingsPage;
