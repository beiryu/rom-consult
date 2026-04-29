"use client";

import type { FC } from "react";
import { Lightning01 } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { cx } from "@/utils/cx";

export interface DashboardQuickActionItem {
    title: string;
    subtitle: string;
    href: string;
    icon: FC<{ className?: string }>;
}

interface DashboardQuickActionsCardProps {
    items: DashboardQuickActionItem[];
    className?: string;
}

export const DashboardQuickActionsCard = ({ items, className }: DashboardQuickActionsCardProps) => {
    return (
        <section className={cx("rounded-2xl border border-secondary bg-primary p-6 shadow-xs", className)}>
            <div className="mb-5 flex items-center gap-2">
                <Lightning01 className="size-4 text-fg-brand-primary" />
                <h2 className="text-lg font-semibold text-primary">Quick Actions</h2>
            </div>

            <ul className="space-y-3">
                {items.map((item) => (
                    <li key={item.title}>
                        <a
                            href={item.href}
                            className="flex items-center gap-3 rounded-xl border border-secondary bg-primary px-4 py-3 outline-focus-ring transition duration-100 ease-linear hover:bg-primary_hover focus-visible:outline-2"
                        >
                            <FeaturedIcon icon={item.icon} color="brand" theme="dark" size="sm" />

                            <div>
                                <p className="text-sm font-semibold text-primary">{item.title}</p>
                                <p className="text-sm text-tertiary">{item.subtitle}</p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};
