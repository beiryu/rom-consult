"use client";

import { CheckCircle } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";

interface ServiceCardProps {
    category: string;
    title: string;
    priceRange: string;
    features: string[];
    bookHref: string;
}

export const ServiceCard = ({ category, title, priceRange, features, bookHref }: ServiceCardProps) => {
    return (
        <article className="flex h-full flex-col rounded-2xl border border-secondary bg-primary p-6 shadow-xs">
            <Badge type="pill-color" color="brand" size="sm" className="w-max">
                {category}
            </Badge>

            <h3 className="mt-4 text-lg font-semibold text-primary">{title}</h3>

            <ul className="mt-5 space-y-3">
                {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle className="mt-0.5 size-4 shrink-0 text-fg-success-secondary" aria-hidden="true" />
                        <span className="text-sm text-secondary">{feature}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-auto pt-6">
                <p className="text-display-xs font-semibold text-brand-secondary">{priceRange}</p>
                <Button className="mt-3 w-full" color="primary" size="md" href={bookHref}>
                    View &amp; Book
                </Button>
            </div>
        </article>
    );
};
