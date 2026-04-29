"use client";

import type { FC, ReactNode } from "react";
import {
    CalendarCheck01,
    CalendarPlus02,
    CheckCircle,
    Clock,
    LifeBuoy01,
    Lightning01,
    Settings01,
    ShoppingBag01,
    Speedometer01,
    Star01,
    User01,
} from "@untitledui/icons";
import type { AuthUser } from "@/stores/auth-store";
import { getFullName } from "@/utils/user";

type IconType = FC<{ className?: string }>;

export interface DashboardStatItem {
    title: string;
    value: ReactNode;
    icon: IconType;
    iconColor: "brand" | "gray" | "success" | "warning" | "error";
    ctaLabel: string;
    ctaHref: string;
}

export interface DashboardQuickActionItem {
    title: string;
    subtitle: string;
    href: string;
    icon: IconType;
}

export const dashboardStats: DashboardStatItem[] = [
    {
        title: "Total Bookings",
        value: "0",
        icon: CalendarCheck01,
        iconColor: "success",
        ctaLabel: "View bookings",
        ctaHref: "/dashboard/bookings",
    },
    {
        title: "Total Orders",
        value: "0",
        icon: ShoppingBag01,
        iconColor: "brand",
        ctaLabel: "View orders",
        ctaHref: "/dashboard/orders",
    },
    {
        title: "My Profile",
        value: <User01 className="size-7 text-fg-primary" />,
        icon: User01,
        iconColor: "warning",
        ctaLabel: "Edit profile",
        ctaHref: "/dashboard/profile",
    },
    {
        title: "Become Consultant",
        value: <Star01 className="size-7 text-fg-primary" />,
        icon: Star01,
        iconColor: "error",
        ctaLabel: "Apply now",
        ctaHref: "/become-a-consultant",
    },
];

export const quickActions: DashboardQuickActionItem[] = [
    {
        title: "Book New Session",
        subtitle: "Schedule a consulting session",
        href: "/browse-services",
        icon: CalendarPlus02,
    },
    {
        title: "My Bookings",
        subtitle: "View upcoming sessions",
        href: "/dashboard/bookings",
        icon: CalendarCheck01,
    },
    {
        title: "Get Support",
        subtitle: "Contact our support team",
        href: "/contact",
        icon: LifeBuoy01,
    },
    {
        title: "Account Settings",
        subtitle: "Update your profile",
        href: "/dashboard/profile",
        icon: Settings01,
    },
];

export const activityHighlights = [
    { label: "100+ Topics", icon: CheckCircle },
    { label: "From $5/hour", icon: CheckCircle },
    { label: "Live Video Sessions", icon: CheckCircle },
];

export const getDashboardDisplayName = (user: AuthUser) => {
    const fullName = getFullName(user).trim();
    if (fullName) {
        return fullName;
    }

    return user.email.split("@")[0];
};

export const dashboardHeaderIcon = Lightning01;
export const dashboardTitleIcon = Speedometer01;
export const recentActivityIcon = Clock;
export const recentBookingIcon = CalendarCheck01;
export const recentOrderIcon = ShoppingBag01;
