"use client";

import { useMemo } from "react";
import { mapApiOrderToRow } from "@/api/orders";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { formatStatusLabel, toNewestFirst } from "@/components/application/dashboard/dashboard-table-data";
import { Table, TableCard } from "@/components/application/table/table";
import { useOrders } from "@/hooks/use-orders";
import { useAuthStore } from "@/stores/auth-store";

const statusColor = {
    paid: "success",
    pending: "warning",
    refunded: "error",
} as const;

const DashboardOrdersPage = () => {
    const user = useAuthStore((state) => state.user);
    const { data, isLoading } = useOrders();
    const orders = useMemo(() => toNewestFirst((data?.items ?? []).map(mapApiOrderToRow)), [data?.items]);

    if (!user) {
        return (
            <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center gap-4 px-4 py-16 text-center">
                <h1 className="text-display-xs font-semibold text-primary">Orders</h1>
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
                        title="Orders"
                        badge={orders.length.toString()}
                        description="Review your purchases and payment status."
                        contentTrailing={
                            <Button color="secondary" size="sm" href="/dashboard">
                                Back to dashboard
                            </Button>
                        }
                    />

                    {isLoading ? (
                        <div className="px-6 py-10 text-center">
                            <p className="text-sm text-tertiary">Loading orders...</p>
                        </div>
                    ) : orders.length === 0 ? (
                        <div className="px-6 py-10 text-center">
                            <p className="text-sm text-tertiary">No orders found yet.</p>
                        </div>
                    ) : (
                        <Table aria-label="Orders table">
                            <Table.Header>
                                <Table.Head isRowHeader>Order Ref</Table.Head>
                                <Table.Head>Date</Table.Head>
                                <Table.Head>Item</Table.Head>
                                <Table.Head>Total</Table.Head>
                                <Table.Head>Status</Table.Head>
                            </Table.Header>
                            <Table.Body>
                                {orders.map((order) => (
                                    <Table.Row key={order.id} id={order.id}>
                                        <Table.Cell className="font-medium text-primary">
                                            {order.orderRef}
                                        </Table.Cell>
                                        <Table.Cell>{order.date}</Table.Cell>
                                        <Table.Cell>{order.item}</Table.Cell>
                                        <Table.Cell>{order.total}</Table.Cell>
                                        <Table.Cell>
                                            <Badge color={statusColor[order.status]} size="sm">
                                                {formatStatusLabel(order.status)}
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

export default DashboardOrdersPage;
