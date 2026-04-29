"use client";

import type { FC, ReactNode } from "react";
import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

interface DashboardStatCardProps {
    title: string;
    icon: FC<{ className?: string }>;
    iconColor: "brand" | "gray" | "success" | "warning" | "error";
    value: ReactNode;
    ctaLabel: string;
    ctaHref: string;
}

export const DashboardStatCard = ({ title, icon, iconColor, value, ctaLabel, ctaHref }: DashboardStatCardProps) => {
    return (
        <article className="rounded-2xl border border-secondary bg-primary p-6 shadow-xs">
            <div className="space-y-4">
                <FeaturedIcon icon={icon} color={iconColor} theme="dark" size="md" />

                <div className="space-y-1">
                    <p className="flex min-h-8 items-center text-display-sm font-semibold leading-none text-primary">{value}</p>
                    <p className="text-sm text-tertiary">{title}</p>
                </div>

                <Button color="link-color" size="sm" href={ctaHref} iconTrailing={ArrowRight}>
                    {ctaLabel}
                </Button>
            </div>
        </article>
    );
};
