"use client";

import { useMemo, useState } from "react";
import { CalendarCheck01, CheckCircle, Clock, ShieldTick, Stars02, VideoRecorder } from "@untitledui/icons";
import { useRouter } from "next/navigation";
import { Radio as AriaRadio, RadioGroup as AriaRadioGroup } from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { Badge } from "@/components/base/badges/badges";
import { Select } from "@/components/base/select/select";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { useBookingCartStore } from "@/stores/booking-cart-store";
import { cx } from "@/utils/cx";
import { formatCurrency, platformOptions, tierOptions, type PlatformId, type TierId } from "./booking-options";
import type { ServiceItem } from "./services-data";

const stepNumberStyles = ["bg-brand-solid text-white", "bg-brand-solid text-white", "bg-brand-solid text-white", "bg-brand-solid text-white"];

export const ServiceDetailBookingPage = ({ service }: { service: ServiceItem }) => {
    const router = useRouter();
    const addItem = useBookingCartStore((state) => state.addItem);
    const [selectedTier, setSelectedTier] = useState<TierId>("bronze");
    const [selectedPlatform, setSelectedPlatform] = useState<PlatformId>("zoom");

    const activeTier = useMemo(() => tierOptions.find((tier) => tier.id === selectedTier) ?? tierOptions[0], [selectedTier]);
    const platformFee = 0;
    const total = activeTier.rate + platformFee;

    const handleBookNow = () => {
        addItem({
            serviceId: service.id,
            tierId: selectedTier,
            platformId: selectedPlatform,
            quantity: 1,
        });
        router.push("/checkout");
    };

    return (
        <div className="bg-primary">
            <main className="py-12 md:py-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
                        <section className="space-y-8 lg:col-span-7">
                            <div>
                                <h1 className="text-display-sm font-semibold text-primary">{service.title}</h1>
                                <div className="mt-3 flex flex-wrap items-center gap-5">
                                    <span className="inline-flex items-center gap-2 text-sm text-tertiary">
                                        <VideoRecorder className="size-4 text-fg-brand-secondary" aria-hidden="true" />
                                        {service.sessionMeta[0]?.label}
                                    </span>
                                    <span className="inline-flex items-center gap-2 text-sm text-tertiary">
                                        <Clock className="size-4 text-fg-brand-secondary" aria-hidden="true" />
                                        {service.sessionMeta[1]?.label}
                                    </span>
                                    <span className="inline-flex items-center gap-2 text-sm text-tertiary">
                                        <Stars02 className="size-4 text-fg-brand-secondary" aria-hidden="true" />
                                        {service.sessionMeta[2]?.label}
                                    </span>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-secondary bg-primary p-6 shadow-xs">
                                <h2 className="text-xl font-semibold text-primary">About This Session</h2>
                                <p className="mt-4 text-md text-tertiary">{service.about}</p>
                            </div>

                            <div className="rounded-2xl border border-secondary bg-primary p-6 shadow-xs">
                                <h2 className="text-xl font-semibold text-primary">What&apos;s Included</h2>
                                <ul className="mt-5 divide-y divide-secondary">
                                    {service.included.map((item) => (
                                        <li key={item} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                                            <CheckCircle className="mt-0.5 size-4 shrink-0 text-fg-brand-secondary" aria-hidden="true" />
                                            <span className="text-md text-secondary">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-2xl border border-secondary bg-primary p-6 shadow-xs">
                                <h2 className="text-xl font-semibold text-primary">How It Works</h2>
                                <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {service.howItWorks.map((step, index) => (
                                        <li key={step.id} className="rounded-xl border border-secondary bg-secondary p-4">
                                            <span
                                                className={cx(
                                                    "inline-flex size-7 items-center justify-center rounded-md text-sm font-semibold",
                                                    stepNumberStyles[index % stepNumberStyles.length],
                                                )}
                                            >
                                                {index + 1}
                                            </span>
                                            <h3 className="mt-3 text-md font-semibold text-primary">{step.title}</h3>
                                            <p className="mt-1 text-sm text-tertiary">{step.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </section>

                        <aside className="lg:col-span-5">
                            <div className="rounded-2xl border border-secondary bg-primary p-6 shadow-xs lg:sticky lg:top-6">
                                <h2 className="text-xl font-semibold text-primary">Book This Session</h2>

                                <AriaRadioGroup
                                    value={selectedTier}
                                    onChange={(value) => setSelectedTier(value as TierId)}
                                    className="mt-5 flex flex-col gap-3"
                                >
                                    {tierOptions.map((tier) => {
                                        const Icon = tier.icon;
                                        return (
                                            <AriaRadio
                                                key={tier.id}
                                                value={tier.id}
                                                className={({ isSelected }) =>
                                                    cx(
                                                        "flex cursor-pointer items-center gap-3 rounded-xl border bg-primary p-4 transition duration-100 ease-linear",
                                                        isSelected ? "border-brand ring-2 ring-brand" : "border-secondary hover:border-secondary_alt",
                                                    )
                                                }
                                            >
                                                {({ isSelected }) => (
                                                    <>
                                                        <FeaturedIcon
                                                            icon={Icon}
                                                            size="sm"
                                                            color={tier.id === "gold" ? "warning" : "gray"}
                                                            theme={isSelected ? "light" : "modern"}
                                                        />
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-2">
                                                                <p className="text-md font-semibold text-primary">{tier.title}</p>
                                                                {tier.isPopular && (
                                                                    <Badge type="pill-color" color="brand" size="sm">
                                                                        Popular
                                                                    </Badge>
                                                                )}
                                                            </div>
                                                            <p className="text-sm text-tertiary">{tier.subtitle}</p>
                                                        </div>
                                                        <p className="text-xl font-semibold text-primary">
                                                            ${tier.rate}
                                                            <span className="ml-1 text-sm font-medium text-tertiary">/hr</span>
                                                        </p>
                                                    </>
                                                )}
                                            </AriaRadio>
                                        );
                                    })}
                                </AriaRadioGroup>

                                <div className="mt-5">
                                    <Select
                                        size="md"
                                        label="Platform"
                                        selectedKey={selectedPlatform}
                                        items={[...platformOptions]}
                                        onSelectionChange={(key) => setSelectedPlatform(String(key) as PlatformId)}
                                    >
                                        {(item) => <Select.Item id={item.id} label={item.label} />}
                                    </Select>
                                </div>

                                <div className="mt-6 space-y-2 rounded-xl border border-secondary bg-secondary p-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <p className="text-tertiary">Session (1 hour)</p>
                                        <p className="font-medium text-primary">{formatCurrency(activeTier.rate)}</p>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <p className="text-tertiary">Platform fee</p>
                                        <p className="font-medium text-primary">{formatCurrency(platformFee)}</p>
                                    </div>
                                    <div className="border-t border-secondary pt-3">
                                        <div className="flex items-center justify-between">
                                            <p className="text-md font-semibold text-primary">Total</p>
                                            <p className="text-display-xs font-semibold text-brand-secondary">{formatCurrency(total)}</p>
                                        </div>
                                    </div>
                                </div>

                                <Button className="mt-6 w-full" color="primary" size="lg" iconLeading={CalendarCheck01} onClick={handleBookNow}>
                                    Book Now
                                </Button>

                                <div className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-secondary bg-secondary p-3 text-sm text-tertiary">
                                    <ShieldTick className="size-4 text-fg-brand-secondary" aria-hidden="true" />
                                    Satisfaction guaranteed or your money back
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </div>
    );
};
