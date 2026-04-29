"use client";

import type { FC, ReactNode } from "react";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { cx } from "@/utils/cx";

interface DashboardEmptyPanelProps {
    icon: FC<{ className?: string }>;
    title: string;
    description: string;
    actionLabel?: string;
    actionHref?: string;
    footer?: ReactNode;
    className?: string;
}

export const DashboardEmptyPanel = ({
    icon,
    title,
    description,
    actionLabel,
    actionHref,
    footer,
    className,
}: DashboardEmptyPanelProps) => {
    return (
        <div className={cx("rounded-xl border border-dashed border-brand px-4 py-8 md:px-8", className)}>
            <div className="mx-auto flex max-w-lg flex-col items-center text-center">
                <FeaturedIcon icon={icon} color="brand" theme="light" size="xl" />

                <h3 className="mt-5 text-display-xs font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-md text-tertiary">{description}</p>

                {actionLabel && actionHref && (
                    <div className="mt-5">
                        <Button color="primary" size="md" href={actionHref}>
                            {actionLabel}
                        </Button>
                    </div>
                )}

                {footer && <div className="mt-5 w-full">{footer}</div>}
            </div>
        </div>
    );
};
