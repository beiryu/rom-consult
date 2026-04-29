"use client";

import { useMemo, useState } from "react";
import { useQueries } from "@tanstack/react-query";
import { CalendarCheck01, CreditCard02, Globe01, InfoCircle, Lock01, ShieldTick } from "@untitledui/icons";
import { useRouter } from "next/navigation";
import { createBooking } from "@/api/bookings";
import { syncCart } from "@/api/cart";
import { createOrder } from "@/api/orders";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Input } from "@/components/base/input/input";
import { Select } from "@/components/base/select/select";
import { fetchProductById } from "@/api/products";
import { useBookingCartStore } from "@/stores/booking-cart-store";
import { useAuthStore } from "@/stores/auth-store";
import { formatCurrency, getPlatformById, getTierById } from "./booking-options";

const countryOptions = [
    { id: "us", label: "United States" },
    { id: "ca", label: "Canada" },
    { id: "uk", label: "United Kingdom" },
    { id: "au", label: "Australia" },
    { id: "sg", label: "Singapore" },
];

export const ServiceBookingPaymentPage = () => {
    const router = useRouter();
    const user = useAuthStore((state) => state.user);
    const items = useBookingCartStore((state) => state.items);
    const clearCart = useBookingCartStore((state) => state.clearCart);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [scheduledAt, setScheduledAt] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [stateRegion, setStateRegion] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [country, setCountry] = useState<string | null>(null);
    const [isRefundAccepted, setIsRefundAccepted] = useState(false);
    const [isTermsAccepted, setIsTermsAccepted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const productQueries = useQueries({
        queries: items.map((item) => ({
            queryKey: ["products", "detailById", item.serviceId],
            queryFn: () => fetchProductById(item.serviceId),
            enabled: Boolean(item.serviceId),
        })),
    });
    const productById = useMemo(
        () =>
            items.reduce<Record<string, string>>((acc, item, index) => {
                const product = productQueries[index]?.data;
                if (product) {
                    acc[item.serviceId] = product.name;
                }
                return acc;
            }, {}),
        [items, productQueries],
    );

    const lineItems = useMemo(
        () =>
            items
                .map((item) => {
                    const tier = getTierById(item.tierId);
                    const platform = getPlatformById(item.platformId);
                    const serviceTitle = productById[item.serviceId] ?? "Service";

                    return {
                        service: {
                            id: item.serviceId,
                            title: serviceTitle,
                        },
                        tier,
                        platform,
                        quantity: item.quantity,
                        subtotal: tier.rate * item.quantity,
                    };
                })
                .filter(Boolean),
        [items, productById],
    );
    const subtotal = useMemo(() => lineItems.reduce((sum, lineItem) => sum + lineItem.subtotal, 0), [lineItems]);
    const total = subtotal;
    const hasItems = lineItems.length > 0;
    const isScheduledDateInFuture = useMemo(() => {
        if (!scheduledAt) {
            return false;
        }

        const selectedDate = new Date(`${scheduledAt}T00:00:00`);
        const now = new Date();
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        return selectedDate.getTime() > todayStart.getTime();
    }, [scheduledAt]);

    const isFormValid =
        hasItems &&
        fullName.trim().length > 0 &&
        email.trim().length > 0 &&
        Boolean(country) &&
        Boolean(scheduledAt) &&
        isScheduledDateInFuture &&
        isRefundAccepted &&
        isTermsAccepted;

    const handleCompleteSecureBooking = async () => {
        if (!isFormValid) {
            return;
        }

        setIsSubmitting(true);
        setSubmitError(null);

        try {
            await syncCart(
                items.map((item) => ({
                    productId: item.serviceId,
                    quantity: item.quantity,
                })),
            );

            await createOrder({
                notes: `${fullName.trim()} | ${email.trim()}`,
            });

            const scheduledAtIso = new Date(`${scheduledAt}T09:00:00`).toISOString();
            await Promise.all(
                items.map((item) =>
                    createBooking({
                        productId: item.serviceId,
                        platform: item.platformId,
                        scheduledAt: scheduledAtIso,
                    }),
                ),
            );

            clearCart();
            router.push("/dashboard/orders");
        } catch {
            setSubmitError("Unable to complete booking right now. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-primary">
            <main className="py-12 md:py-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
                        <section className="space-y-6 lg:col-span-7">
                            <div className="overflow-hidden rounded-2xl border border-secondary bg-primary shadow-xs">
                                <div className="border-b border-secondary px-6 py-4">
                                    <h2 className="text-lg font-semibold text-primary">Booking Summary</h2>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-secondary">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-semibold text-quaternary">SERVICE/RESOURCE</th>
                                                <th className="px-6 py-3 text-left text-xs font-semibold text-quaternary">RATE</th>
                                                <th className="px-6 py-3 text-left text-xs font-semibold text-quaternary">HOURS/QTY</th>
                                                <th className="px-6 py-3 text-right text-xs font-semibold text-quaternary">SUBTOTAL</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {hasItems ? (
                                                lineItems.map((lineItem) => (
                                                    <tr key={`${lineItem.service.id}-${lineItem.tier.id}-${lineItem.platform.id}`} className="border-t border-secondary">
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center gap-2">
                                                                <Badge type="pill-color" color="brand" size="sm">
                                                                    {lineItem.tier.title}
                                                                </Badge>
                                                                <p className="font-semibold text-primary">{lineItem.service.title}</p>
                                                            </div>
                                                            <p className="mt-1 text-sm text-tertiary">{lineItem.platform.label}</p>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <p className="font-semibold text-primary">
                                                                {formatCurrency(lineItem.tier.rate)}
                                                                <span className="ml-1 text-sm font-medium text-tertiary">/hr</span>
                                                            </p>
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <p className="font-semibold text-primary">
                                                                {lineItem.quantity}
                                                                <span className="ml-1 text-sm font-medium text-tertiary">hour(s)</span>
                                                            </p>
                                                        </td>
                                                        <td className="px-6 py-4 text-right text-display-xs font-semibold text-brand-secondary">{formatCurrency(lineItem.subtotal)}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr className="border-t border-secondary">
                                                    <td colSpan={4} className="px-6 py-6 text-center text-sm text-tertiary">
                                                        Your cart is empty. Add sessions before completing payment.
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-2xl border border-secondary bg-primary shadow-xs">
                                <div className="border-b border-secondary px-6 py-4">
                                    <h2 className="text-lg font-semibold text-primary">Your Information</h2>
                                </div>
                                <div className="space-y-4 px-6 py-5">
                                    {!user ? (
                                        <div className="space-y-4 rounded-xl border border-secondary bg-secondary p-4">
                                            <p className="text-sm text-tertiary">Please log in to continue with secure payment and booking.</p>
                                            <Button color="primary" size="md" href="/login">
                                                Login to continue
                                            </Button>
                                        </div>
                                    ) : (
                                        <>
                                    <Input label="Full Name" isRequired value={fullName} onChange={setFullName} placeholder="Enter your full name" />
                                    <Input
                                        label="Email Address"
                                        isRequired
                                        type="email"
                                        value={email}
                                        onChange={setEmail}
                                        placeholder="your@email.com"
                                        hint="We’ll send your booking confirmation to this email"
                                    />
                                    <Input label="Phone Number (Optional)" value={phone} onChange={setPhone} placeholder="+1 (555) 123-4567" />
                                    <Input
                                        label="Scheduled Date"
                                        isRequired
                                        type="date"
                                        value={scheduledAt}
                                        onChange={setScheduledAt}
                                        hint={!scheduledAt || isScheduledDateInFuture ? undefined : "Please select a future date."}
                                    />

                                    <div className="border-t border-secondary pt-4">
                                        <h3 className="text-lg font-semibold text-primary">Billing Address (Optional)</h3>
                                        <div className="mt-4 space-y-4">
                                            <Input label="Street Address" value={streetAddress} onChange={setStreetAddress} placeholder="123 Main Street" />
                                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                                <Input label="City" value={city} onChange={setCity} placeholder="New York" />
                                                <Input label="State" value={stateRegion} onChange={setStateRegion} placeholder="NY" />
                                                <Input label="ZIP Code" value={zipCode} onChange={setZipCode} placeholder="10001" />
                                            </div>
                                            <Select
                                                label="Country"
                                                isRequired
                                                selectedKey={country}
                                                items={[...countryOptions]}
                                                onSelectionChange={(key) => setCountry(String(key))}
                                                placeholder="-- Select your country --"
                                            >
                                                {(item) => <Select.Item id={item.id} label={item.label} />}
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="rounded-xl border border-secondary bg-secondary p-3">
                                        <div className="flex items-center gap-2 text-sm text-secondary">
                                            <Globe01 className="size-4 text-fg-brand-secondary" aria-hidden="true" />
                                            We accept orders from customers worldwide
                                        </div>
                                    </div>

                                    <div className="space-y-3 rounded-xl border border-secondary bg-secondary p-3">
                                        <div className="flex items-center gap-2 text-sm text-secondary">
                                            <InfoCircle className="size-4 text-fg-brand-secondary" aria-hidden="true" />
                                            Booking a live consulting session delivered via video call.
                                        </div>
                                        <Checkbox
                                            size="sm"
                                            isSelected={isRefundAccepted}
                                            onChange={setIsRefundAccepted}
                                            label={
                                                <span className="text-sm text-secondary">
                                                    I have read and agree to the{" "}
                                                    <a href="/refund-policy" className="text-brand-secondary underline">
                                                        Refund Policy
                                                    </a>
                                                    .
                                                </span>
                                            }
                                        />
                                        <Checkbox
                                            size="sm"
                                            isSelected={isTermsAccepted}
                                            onChange={setIsTermsAccepted}
                                            label={
                                                <span className="text-sm text-secondary">
                                                    I agree to the{" "}
                                                    <a href="/terms-of-service" className="text-brand-secondary underline">
                                                        Terms of Service
                                                    </a>
                                                    .
                                                </span>
                                            }
                                        />
                                    </div>

                                    <div className="flex items-center justify-center gap-2 rounded-xl border border-secondary bg-secondary p-3 text-sm text-tertiary">
                                        <ShieldTick className="size-4 text-fg-brand-secondary" aria-hidden="true" />
                                        Your account secures booking history and order tracking.
                                    </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </section>

                        <aside className="lg:col-span-5">
                            <div className="overflow-hidden rounded-2xl border border-secondary bg-primary shadow-xs lg:sticky lg:top-6">
                                <div className="border-b border-secondary px-6 py-4">
                                    <h2 className="text-lg font-semibold text-primary">Booking Total</h2>
                                </div>
                                <div className="space-y-4 px-6 py-5">
                                    {!hasItems && (
                                        <Button className="w-full" color="secondary" size="md" href="/checkout" iconLeading={CalendarCheck01}>
                                            Back to Checkout
                                        </Button>
                                    )}
                                    <div className="flex items-center justify-between">
                                        <p className="text-md text-secondary">Subtotal:</p>
                                        <p className="text-md font-semibold text-primary">{formatCurrency(subtotal)}</p>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-secondary pt-4">
                                        <p className="text-xl font-semibold text-primary">Total:</p>
                                        <p className="text-xl font-semibold text-primary">{formatCurrency(total)}</p>
                                    </div>

                                    <Button
                                        className="w-full"
                                        color="primary"
                                        size="lg"
                                        iconLeading={Lock01}
                                        isDisabled={!user || !isFormValid || isSubmitting}
                                        onClick={handleCompleteSecureBooking}
                                    >
                                        {isSubmitting ? "Processing..." : "Complete Secure Booking"}
                                    </Button>
                                    {submitError ? <p className="text-sm text-error-primary">{submitError}</p> : null}

                                    <p className="text-center text-sm text-tertiary">- OR PAY WITH -</p>

                                    <Button className="w-full" color="secondary" size="lg">
                                        PayPal
                                    </Button>
                                    <Button className="w-full" color="secondary" size="lg" iconLeading={CreditCard02}>
                                        Debit or Credit Card
                                    </Button>

                                    <div className="flex items-start gap-2 rounded-xl border border-secondary bg-secondary p-3 text-sm text-tertiary">
                                        <ShieldTick className="mt-0.5 size-4 shrink-0 text-fg-brand-secondary" aria-hidden="true" />
                                        Secure Checkout: All payments are processed securely through encrypted payment gateways.
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
