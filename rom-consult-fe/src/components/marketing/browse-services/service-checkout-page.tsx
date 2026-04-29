"use client";

import { useMemo, useState } from "react";
import { CalendarCheck01, Lock01, Minus, Plus, ShieldTick, Trash01 } from "@untitledui/icons";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { useBookingCartStore } from "@/stores/booking-cart-store";
import { formatCurrency, getPlatformById, getTierById } from "./booking-options";
import { getServiceById } from "./services-data";

export const ServiceCheckoutPage = () => {
    const router = useRouter();
    const items = useBookingCartStore((state) => state.items);
    const removeLine = useBookingCartStore((state) => state.removeLine);
    const setLineQuantity = useBookingCartStore((state) => state.setLineQuantity);
    const [couponCode, setCouponCode] = useState("");
    const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

    const lineItems = useMemo(
        () =>
            items
                .map((item) => {
                    const service = getServiceById(item.serviceId);
                    if (!service) {
                        return null;
                    }

                    const tier = getTierById(item.tierId);
                    const platform = getPlatformById(item.platformId);

                    return {
                        lineId: item.lineId,
                        service,
                        tier,
                        platform,
                        quantity: item.quantity,
                        subtotal: tier.rate * item.quantity,
                    };
                })
                .filter((item) => item !== null),
        [items],
    );
    const subtotal = useMemo(() => lineItems.reduce((sum, lineItem) => sum + lineItem.subtotal, 0), [lineItems]);
    const lineCount = lineItems.length;

    const decrementQuantity = (lineId: string, quantity: number) => setLineQuantity(lineId, Math.max(1, quantity - 1));
    const incrementQuantity = (lineId: string, quantity: number) => setLineQuantity(lineId, quantity + 1);

    const handleRemoveLineItem = (lineId: string) => removeLine(lineId);

    const handleProceedToCheckout = () => {
        if (lineCount === 0) {
            return;
        }

        router.push("/checkout/payment");
    };

    return (
        <div className="bg-primary">
            <main className="py-12 md:py-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
                        <section className="lg:col-span-7">
                            <div className="overflow-hidden rounded-2xl border border-secondary bg-primary shadow-xs">
                                <div className="flex items-center justify-between border-b border-secondary px-6 py-4">
                                    <h2 className="text-md font-semibold text-primary">Cart Items</h2>
                                    <p className="text-sm text-tertiary">{lineCount} item(s)</p>
                                </div>

                                <div className="px-6 py-5">
                                    {lineCount === 0 ? (
                                        <div className="flex flex-col items-start gap-4 rounded-xl border border-secondary bg-secondary p-4">
                                            <p className="text-md text-secondary">Your cart is empty. Add a session to continue.</p>
                                            <Button color="secondary" size="md" href="/browse-services">
                                                Browse Services
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            {lineItems.map((lineItem) => (
                                                <div key={lineItem.lineId} className="grid grid-cols-1 items-center gap-4 border-b border-secondary pb-4 last:border-b-0 last:pb-0 md:grid-cols-[1fr_auto_auto_auto]">
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-primary">{lineItem.service.title}</h3>
                                                        <div className="mt-1 flex items-center gap-2">
                                                            <Badge type="pill-color" color="brand" size="sm">
                                                                {lineItem.tier.title} Consultant
                                                            </Badge>
                                                            <span className="text-sm text-tertiary">{lineItem.platform.label}</span>
                                                        </div>
                                                        <p className="mt-1 text-sm text-secondary">{formatCurrency(lineItem.tier.rate)}/hour</p>
                                                    </div>

                                                    <div className="flex items-center rounded-lg border border-secondary">
                                                        <button
                                                            type="button"
                                                            onClick={() => decrementQuantity(lineItem.lineId, lineItem.quantity)}
                                                            className="flex h-9 w-9 items-center justify-center text-fg-secondary transition duration-100 ease-linear hover:bg-secondary"
                                                            aria-label="Decrease quantity"
                                                        >
                                                            <Minus className="size-4" />
                                                        </button>
                                                        <div className="flex h-9 min-w-10 items-center justify-center border-x border-secondary px-2 text-sm font-semibold text-primary">
                                                            {lineItem.quantity}
                                                        </div>
                                                        <button
                                                            type="button"
                                                            onClick={() => incrementQuantity(lineItem.lineId, lineItem.quantity)}
                                                            className="flex h-9 w-9 items-center justify-center text-fg-secondary transition duration-100 ease-linear hover:bg-secondary"
                                                            aria-label="Increase quantity"
                                                        >
                                                            <Plus className="size-4" />
                                                        </button>
                                                    </div>

                                                    <p className="text-display-xs font-semibold text-brand-secondary">{formatCurrency(lineItem.subtotal)}</p>

                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemoveLineItem(lineItem.lineId)}
                                                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-error_subtle bg-primary text-fg-error-secondary outline-error transition duration-100 ease-linear hover:bg-error-primary hover:text-fg-error-primary"
                                                        aria-label="Remove item"
                                                    >
                                                        <Trash01 className="size-4" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>

                        <aside className="lg:col-span-5">
                            <div className="overflow-hidden rounded-2xl border border-secondary bg-primary shadow-xs lg:sticky lg:top-6">
                                <div className="flex items-center justify-between border-b border-secondary bg-primary px-6 py-4">
                                    <h2 className="text-md font-semibold text-primary">Summary</h2>
                                </div>

                                <div className="space-y-5 px-6 py-5">
                                    <div className="flex gap-3">
                                        <Input
                                            value={couponCode}
                                            onChange={(value) => setCouponCode(value)}
                                            placeholder="Enter coupon code"
                                            aria-label="Coupon code"
                                            className="flex-1"
                                        />
                                        <Button color="secondary" size="md" onClick={() => setAppliedCoupon(couponCode.trim() || null)}>
                                            Apply
                                        </Button>
                                    </div>
                                    {appliedCoupon && <p className="text-sm text-brand-secondary">Coupon code “{appliedCoupon}” saved for checkout.</p>}

                                    <div className="space-y-2 border-b border-secondary pb-4">
                                        <div className="flex items-center justify-between">
                                            <p className="text-md text-primary">Subtotal</p>
                                            <p className="text-md font-medium text-primary">{formatCurrency(subtotal)}</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="text-md text-tertiary">Tax</p>
                                            <p className="text-sm text-tertiary">Calculated at checkout</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p className="text-lg font-semibold text-primary">Total</p>
                                        <p className="text-display-xs font-semibold text-brand-secondary">{formatCurrency(subtotal)}</p>
                                    </div>

                                    <Button className="w-full" color="primary" size="lg" iconLeading={Lock01} onClick={handleProceedToCheckout} isDisabled={lineCount === 0}>
                                        Proceed to Checkout
                                    </Button>

                                    <Button className="w-full" color="secondary" size="lg" href="/browse-services" iconLeading={CalendarCheck01}>
                                        Add More Sessions
                                    </Button>

                                    <div className="flex items-center justify-center gap-2 rounded-xl border border-secondary bg-secondary p-3 text-sm text-tertiary">
                                        <ShieldTick className="size-4 text-fg-brand-secondary" aria-hidden="true" />
                                        Secure checkout with encrypted payment processing
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </div>
    );
};
