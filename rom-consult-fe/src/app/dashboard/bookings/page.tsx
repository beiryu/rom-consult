"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { formatStatusLabel } from "@/components/application/dashboard/dashboard-table-data";
import { Table, TableCard } from "@/components/application/table/table";
import { useAuthStore } from "@/stores/auth-store";
import { useOrdersBookingsStore } from "@/stores/orders-bookings-store";

const statusColor = {
    scheduled: "brand",
    completed: "success",
    cancelled: "error",
} as const;

const DashboardBookingsPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const user = useAuthStore((state) => state.user);
    const bookings = useOrdersBookingsStore((state) => state.bookings);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

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

                    {bookings.length === 0 ? (
                        <div className="px-6 py-10 text-center">
                            <p className="text-sm text-tertiary">No bookings found yet.</p>
                        </div>
                    ) : (
                        <Table aria-label="Bookings table">
                            <Table.Header>
                                <Table.Head>Booking Ref</Table.Head>
                                <Table.Head>Service</Table.Head>
                                <Table.Head>Date & Time</Table.Head>
                                <Table.Head>Status</Table.Head>
                            </Table.Header>
                            <Table.Body>
                                {bookings.map((booking) => (
                                    <Table.Row key={booking.id} id={booking.id}>
                                        <Table.Cell className="font-medium text-primary">{booking.bookingRef}</Table.Cell>
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
