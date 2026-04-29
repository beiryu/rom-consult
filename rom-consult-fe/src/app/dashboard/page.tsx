"use client";

import { useEffect, useMemo, useState } from "react";
import { useQueries } from "@tanstack/react-query";
import { LogOut01 } from "@untitledui/icons";
import { useRouter } from "next/navigation";
import { mapApiBookingToRow } from "@/api/bookings";
import { mapApiOrderToRow } from "@/api/orders";
import { fetchProductById } from "@/api/products";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import {
    activityHighlights,
    dashboardStats,
    getDashboardDisplayName,
    quickActions,
    recentActivityIcon,
    recentBookingIcon,
    recentOrderIcon,
} from "@/components/application/dashboard/dashboard-content";
import { DashboardEmptyPanel } from "@/components/application/dashboard/dashboard-empty-panel";
import { DashboardHeroHeader } from "@/components/application/dashboard/dashboard-hero-header";
import { DashboardQuickActionsCard } from "@/components/application/dashboard/dashboard-quick-actions-card";
import { DashboardStatCard } from "@/components/application/dashboard/dashboard-stat-card";
import { formatStatusLabel, toNewestFirst } from "@/components/application/dashboard/dashboard-table-data";
import { Table } from "@/components/application/table/table";
import { useBookings } from "@/hooks/use-bookings";
import { useOrders } from "@/hooks/use-orders";
import { useAuthStore } from "@/stores/auth-store";

const bookingStatusColor = {
    scheduled: "brand",
    completed: "success",
    cancelled: "error",
} as const;

const orderStatusColor = {
    paid: "success",
    pending: "warning",
    refunded: "error",
} as const;

const DashboardPage = () => {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);
    const { data: bookingsData } = useBookings();
    const { data: ordersData } = useOrders();
    const bookingItems = bookingsData?.items ?? [];
    const orderItems = ordersData?.items ?? [];
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
            toNewestFirst(bookingItems.map((booking) => mapApiBookingToRow(booking, productNameById[booking.productId]))),
        [bookingItems, productNameById],
    );
    const orders = useMemo(() => toNewestFirst(orderItems.map(mapApiOrderToRow)), [orderItems]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    if (!user) {
        return (
            <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center gap-4 px-4 py-16 text-center">
                <h1 className="text-display-xs font-semibold text-primary">Dashboard</h1>
                <p className="text-md text-tertiary">You are not logged in or registered in this temporary session.</p>
                <Button color="primary" size="md" href="/">
                    Go to home
                </Button>
            </main>
        );
    }

    const displayName = getDashboardDisplayName(user);
    const RecentActivityIcon = recentActivityIcon;
    const dashboardStatItems = dashboardStats.map((item) => {
        if (item.title === "Total Bookings") {
            return {
                ...item,
                value: bookings.length.toString(),
            };
        }

        if (item.title === "Total Orders") {
            return {
                ...item,
                value: orders.length.toString(),
            };
        }

        return item;
    });
    const recentBookings = bookings.slice(0, 3);
    const recentOrders = orders.slice(0, 3);

    return (
        <main className="bg-secondary py-10 md:py-14">
            <div className="mx-auto flex w-full max-w-container flex-col gap-6 px-4 md:px-8">
                <DashboardHeroHeader
                    title="My Dashboard"
                    subtitle={`Welcome back, ${displayName}!`}
                />

                <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {dashboardStatItems.map((item) => (
                        <DashboardStatCard
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                            iconColor={item.iconColor}
                            value={item.value}
                            ctaLabel={item.ctaLabel}
                            ctaHref={item.ctaHref}
                        />
                    ))}
                </section>

                <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <DashboardQuickActionsCard className="h-fit" items={quickActions} />

                    <article className="rounded-2xl border border-secondary bg-primary p-6 shadow-xs lg:col-span-2">
                        <div className="mb-5 flex items-center gap-2">
                            <RecentActivityIcon className="size-4 text-fg-brand-primary" />
                            <h2 className="text-lg font-semibold text-primary">Recent Activity</h2>
                        </div>

                        <DashboardEmptyPanel
                            icon={recentActivityIcon}
                            title="No activity yet"
                            description="Start by booking your first consulting session!"
                            actionLabel="Browse Services"
                            actionHref="/browse-services"
                            footer={
                                <div className="flex flex-wrap items-center justify-center gap-4">
                                    {activityHighlights.map((item) => (
                                        <div key={item.label} className="inline-flex items-center gap-1.5">
                                            <item.icon className="size-4 text-fg-success-primary" />
                                            <span className="text-sm text-tertiary">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            }
                        />
                    </article>
                </section>

                <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <article className="rounded-2xl border border-secondary bg-primary p-6 shadow-xs">
                        <div className="mb-5 flex items-center justify-between gap-3">
                            <h2 className="text-lg font-semibold text-primary">Recent Orders</h2>
                            <Button color="link-color" size="sm" href="/dashboard/orders">
                                View Order
                            </Button>
                        </div>
                        {recentOrders.length === 0 ? (
                            <DashboardEmptyPanel
                                icon={recentOrderIcon}
                                title="No orders yet"
                                description="Your order history will appear here."
                            />
                        ) : (
                            <Table aria-label="Recent orders" size="sm">
                                <Table.Header>
                                    <Table.Head isRowHeader>Order Ref</Table.Head>
                                    <Table.Head>Date</Table.Head>
                                    <Table.Head>Status</Table.Head>
                                </Table.Header>
                                <Table.Body>
                                    {recentOrders.map((order) => (
                                        <Table.Row key={order.id} id={order.id} size="sm">
                                            <Table.Cell className="font-medium text-primary" size="sm">
                                                {order.orderRef}
                                            </Table.Cell>
                                            <Table.Cell size="sm">{order.date}</Table.Cell>
                                            <Table.Cell size="sm">
                                                <Badge color={orderStatusColor[order.status]} size="sm">
                                                    {formatStatusLabel(order.status)}
                                                </Badge>
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        )}
                    </article>

                    <article className="rounded-2xl border border-secondary bg-primary p-6 shadow-xs">
                        <div className="mb-5 flex items-center justify-between gap-3">
                            <h2 className="text-lg font-semibold text-primary">Recent Bookings</h2>
                            <Button color="link-color" size="sm" href="/dashboard/bookings">
                                View Booking
                            </Button>
                        </div>
                        {recentBookings.length === 0 ? (
                            <DashboardEmptyPanel
                                icon={recentBookingIcon}
                                title="No bookings yet"
                                description="Book your first consulting session!"
                            />
                        ) : (
                            <Table aria-label="Recent bookings" size="sm">
                                <Table.Header>
                                    <Table.Head isRowHeader>Booking Ref</Table.Head>
                                    <Table.Head>Service</Table.Head>
                                    <Table.Head>Status</Table.Head>
                                </Table.Header>
                                <Table.Body>
                                    {recentBookings.map((booking) => (
                                        <Table.Row key={booking.id} id={booking.id} size="sm">
                                            <Table.Cell className="font-medium text-primary" size="sm">
                                                {booking.bookingRef}
                                            </Table.Cell>
                                            <Table.Cell size="sm">{booking.service}</Table.Cell>
                                            <Table.Cell size="sm">
                                                <Badge color={bookingStatusColor[booking.status]} size="sm">
                                                    {formatStatusLabel(booking.status)}
                                                </Badge>
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        )}
                    </article>
                </section>

            </div>
        </main>
    );
};

export default DashboardPage;
