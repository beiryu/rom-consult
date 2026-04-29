"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { VisitorOfferModal } from "@/components/application/modals/visitor-offer-modal";

const DISMISS_KEY = "romconsult-visitor-offer-dismissed";
const FIRST_VISIT_DELAY_MS = 4000;
const MIN_HIDDEN_MS = 5000;

const isDismissed = () => {
    if (typeof window === "undefined") return false;
    try {
        return window.sessionStorage.getItem(DISMISS_KEY) === "true";
    } catch {
        return false;
    }
};

const markDismissed = () => {
    if (typeof window === "undefined") return;
    try {
        window.sessionStorage.setItem(DISMISS_KEY, "true");
    } catch {
        // sessionStorage may be unavailable (e.g. private mode) — fail silently.
    }
};

export const SitePromoModals = () => {
    const [isOpen, setIsOpen] = useState(false);
    const hasOpenedRef = useRef(false);
    const hiddenSinceRef = useRef<number | null>(null);

    const openOnce = useCallback(() => {
        if (hasOpenedRef.current) return;
        if (isDismissed()) return;
        hasOpenedRef.current = true;
        setIsOpen(true);
    }, []);

    useEffect(() => {
        if (isDismissed()) return;

        const timer = window.setTimeout(openOnce, FIRST_VISIT_DELAY_MS);
        return () => window.clearTimeout(timer);
    }, [openOnce]);

    useEffect(() => {
        const handleVisibility = () => {
            if (document.hidden) {
                hiddenSinceRef.current = Date.now();
                return;
            }

            const since = hiddenSinceRef.current;
            hiddenSinceRef.current = null;
            if (since === null) return;

            const hiddenMs = Date.now() - since;
            if (hiddenMs < MIN_HIDDEN_MS) return;

            openOnce();
        };

        document.addEventListener("visibilitychange", handleVisibility);
        return () => document.removeEventListener("visibilitychange", handleVisibility);
    }, [openOnce]);

    const handleOpenChange = useCallback((next: boolean) => {
        setIsOpen(next);
        if (!next) markDismissed();
    }, []);

    return <VisitorOfferModal isOpen={isOpen} onOpenChange={handleOpenChange} />;
};
