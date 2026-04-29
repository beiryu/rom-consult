"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/base/buttons/button";
import { CloseButton } from "@/components/base/buttons/close-button";

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex items-center gap-1.5">
        <div className="flex min-w-7 items-center justify-center rounded-md p-1 ring-1 ring-utility-brand-500_alt ring-inset">
            <p className="min-w-0 flex-1 text-center text-xs font-medium text-primary_on-brand">{value}</p>
        </div>
        <p className="text-sm text-tertiary_on-brand">{label}</p>
    </div>
);

const PROMO_CODE = "WELCOME15";
const PROMO_EXPIRY_KEY = "romconsult-promo-expiry";
const PROMO_DURATION_MS = 24 * 60 * 60 * 1000;

export const BannerCountdownBrandFullWidth = () => {
    const [expiryMs, setExpiryMs] = useState<number | null>(null);
    const [isDismissed, setIsDismissed] = useState(false);
    const [copied, setCopied] = useState(false);
    const [nowMs, setNowMs] = useState(Date.now());

    useEffect(() => {
        const savedExpiry = window.localStorage.getItem(PROMO_EXPIRY_KEY);
        const parsedExpiry = savedExpiry ? Number(savedExpiry) : NaN;

        if (Number.isFinite(parsedExpiry) && parsedExpiry > Date.now()) {
            setExpiryMs(parsedExpiry);
            return;
        }

        const nextExpiry = Date.now() + PROMO_DURATION_MS;
        window.localStorage.setItem(PROMO_EXPIRY_KEY, String(nextExpiry));
        setExpiryMs(nextExpiry);
    }, []);

    useEffect(() => {
        if (!expiryMs) return;

        const timer = window.setInterval(() => {
            setNowMs(Date.now());
        }, 1000);

        return () => {
            window.clearInterval(timer);
        };
    }, [expiryMs]);

    useEffect(() => {
        if (!copied) return;

        const timer = window.setTimeout(() => {
            setCopied(false);
        }, 1500);

        return () => {
            window.clearTimeout(timer);
        };
    }, [copied]);

    const countdown = useMemo(() => {
        if (!expiryMs) return { hours: 24, minutes: 0, seconds: 0 };

        const remainingMs = Math.max(expiryMs - nowMs, 0);
        const totalSeconds = Math.floor(remainingMs / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return { hours, minutes, seconds };
    }, [expiryMs, nowMs]);

    if (isDismissed) return null;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(PROMO_CODE);
            setCopied(true);
        } catch {
            setCopied(false);
        }
    };

    return (
        <div className="relative border-t border-brand_alt bg-brand-section_subtle md:border-t-0 md:border-b md:border-brand">
            <div className="mx-auto flex max-w-container flex-col gap-4 p-4 pr-12 md:flex-row md:items-center md:justify-between md:px-8 md:py-3">
                <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-semibold text-primary_on-brand">Welcome to RomConsult!</p>
                </div>

                <div className="flex flex-wrap items-center gap-3 md:justify-center">
                    <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-secondary_on-brand">Get 15% OFF your first consulting session with Code:</p>
                        <p className="rounded-md bg-brand-solid px-2 py-1 text-sm font-semibold text-primary_on-brand">{PROMO_CODE}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 md:justify-end">
                    <CountdownUnit value={countdown.hours} label="hrs" />
                    <CountdownUnit value={countdown.minutes} label="mins" />
                    <CountdownUnit value={countdown.seconds} label="secs" />
                </div>

                <div className="absolute top-2 right-2 flex shrink-0 items-center justify-center md:top-1/2 md:-translate-y-1/2">
                    <CloseButton size="sm" theme="dark" label="Dismiss" onPress={() => setIsDismissed(true)} />
                </div>
            </div>
        </div>
    );
};
