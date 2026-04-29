"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";
import { AlertFloating, AlertFullWidth, type AlertFloatingProps, type AlertFullWidthProps } from "@/components/application/alerts/alerts";

const FLOATING_EXIT_ANIMATION_MS = 220;
const DEFAULT_FLOATING_AUTO_HIDE_MS = 3000;

type AlertKind = "floating" | "fullWidth";

interface AlertQueueItem {
    id: string;
    kind: AlertKind;
    createdAt: number;
    options: AlertFloatingProps | AlertFullWidthProps;
}

type FloatingAlertOptions = AlertFloatingProps & {
    autoHideMs?: number;
};

type FullWidthAlertOptions = AlertFullWidthProps;

interface AlertsContextValue {
    showFloating: (options: FloatingAlertOptions) => string;
    showFullWidth: (options: FullWidthAlertOptions) => string;
    dismiss: (id: string) => void;
    clear: () => void;
}

const AlertsContext = createContext<AlertsContextValue | null>(null);

function createAlertId() {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
        return crypto.randomUUID();
    }

    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function AlertsProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<AlertQueueItem[]>([]);
    const [visibleFloatingIds, setVisibleFloatingIds] = useState<Set<string>>(new Set());
    const [exitingFloatingIds, setExitingFloatingIds] = useState<Set<string>>(new Set());
    const floatingTimerMapRef = useRef<Map<string, number>>(new Map());
    const floatingExitTimerMapRef = useRef<Map<string, number>>(new Map());

    const clearFloatingAutoHideTimer = useCallback((id: string) => {
        const timerId = floatingTimerMapRef.current.get(id);

        if (typeof timerId !== "undefined") {
            window.clearTimeout(timerId);
            floatingTimerMapRef.current.delete(id);
        }
    }, []);

    const clearFloatingExitTimer = useCallback((id: string) => {
        const timerId = floatingExitTimerMapRef.current.get(id);

        if (typeof timerId !== "undefined") {
            window.clearTimeout(timerId);
            floatingExitTimerMapRef.current.delete(id);
        }
    }, []);

    const dismiss = useCallback(
        (id: string) => {
            const targetItem = items.find((item) => item.id === id);

            if (!targetItem) {
                return;
            }

            if (targetItem.kind === "fullWidth") {
                setItems((prev) => prev.filter((item) => item.id !== id));
                return;
            }

            clearFloatingAutoHideTimer(id);
            clearFloatingExitTimer(id);

            setExitingFloatingIds((prev) => new Set(prev).add(id));
            setVisibleFloatingIds((prev) => {
                const next = new Set(prev);
                next.delete(id);
                return next;
            });

            const exitTimerId = window.setTimeout(() => {
                setItems((prev) => prev.filter((item) => item.id !== id));
                setExitingFloatingIds((prev) => {
                    const next = new Set(prev);
                    next.delete(id);
                    return next;
                });
                floatingExitTimerMapRef.current.delete(id);
            }, FLOATING_EXIT_ANIMATION_MS);

            floatingExitTimerMapRef.current.set(id, exitTimerId);
        },
        [clearFloatingAutoHideTimer, clearFloatingExitTimer, items],
    );

    const showFloating = useCallback(
        (options: FloatingAlertOptions) => {
            const id = createAlertId();
            const autoHideMs = options.autoHideMs ?? DEFAULT_FLOATING_AUTO_HIDE_MS;
            const { autoHideMs: _autoHideMs, ...componentOptions } = options;

            setItems((prev) => [
                ...prev,
                {
                    id,
                    kind: "floating",
                    createdAt: Date.now(),
                    options: componentOptions,
                },
            ]);
            setVisibleFloatingIds((prev) => new Set(prev).add(id));

            const autoHideTimerId = window.setTimeout(() => {
                dismiss(id);
            }, autoHideMs);

            floatingTimerMapRef.current.set(id, autoHideTimerId);
            return id;
        },
        [dismiss],
    );

    const showFullWidth = useCallback((options: FullWidthAlertOptions) => {
        const id = createAlertId();

        setItems((prev) => [
            ...prev,
            {
                id,
                kind: "fullWidth",
                createdAt: Date.now(),
                options,
            },
        ]);

        return id;
    }, []);

    const clear = useCallback(() => {
        for (const timerId of floatingTimerMapRef.current.values()) {
            window.clearTimeout(timerId);
        }

        for (const timerId of floatingExitTimerMapRef.current.values()) {
            window.clearTimeout(timerId);
        }

        floatingTimerMapRef.current.clear();
        floatingExitTimerMapRef.current.clear();
        setVisibleFloatingIds(new Set());
        setExitingFloatingIds(new Set());
        setItems([]);
    }, []);

    const fullWidthItems = items.filter((item) => item.kind === "fullWidth");
    const floatingItems = items
        .filter((item) => item.kind === "floating")
        .slice(-3)
        .reverse();

    const contextValue = useMemo<AlertsContextValue>(
        () => ({
            showFloating,
            showFullWidth,
            dismiss,
            clear,
        }),
        [clear, dismiss, showFloating, showFullWidth],
    );

    return (
        <AlertsContext.Provider value={contextValue}>
            {fullWidthItems.map((item) => {
                const options = item.options as AlertFullWidthProps;

                return (
                    <AlertFullWidth
                        key={item.id}
                        {...options}
                        onClose={() => {
                            options.onClose?.();
                            dismiss(item.id);
                        }}
                        onConfirm={() => {
                            options.onConfirm?.();
                            dismiss(item.id);
                        }}
                    />
                );
            })}

            {children}

            <div className="pointer-events-none fixed right-4 bottom-4 z-70 flex w-full max-w-[420px] flex-col gap-3 md:right-6 md:bottom-6">
                {floatingItems.map((item) => {
                    const options = item.options as AlertFloatingProps;
                    const isVisible = visibleFloatingIds.has(item.id);
                    const isExiting = exitingFloatingIds.has(item.id);

                    return (
                        <div
                            key={item.id}
                            className={`pointer-events-auto transition-all duration-200 ease-out ${
                                isVisible && !isExiting ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                            }`}
                        >
                            <AlertFloating
                                {...options}
                                onClose={() => {
                                    options.onClose?.();
                                    dismiss(item.id);
                                }}
                                onConfirm={() => {
                                    options.onConfirm?.();
                                    dismiss(item.id);
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </AlertsContext.Provider>
    );
}

export function useAlerts() {
    const context = useContext(AlertsContext);

    if (!context) {
        throw new Error("useAlerts must be used within an AlertsProvider");
    }

    return context;
}

export function useToastHelpers() {
    const { showFloating } = useAlerts();

    return {
        success: (description: string, title = "Success") =>
            showFloating({ title, description, confirmLabel: "OK", color: "success" }),
        error: (description: string, title = "Something went wrong") =>
            showFloating({ title, description, confirmLabel: "OK", color: "error" }),
        info: (description: string, title = "Notice") =>
            showFloating({ title, description, confirmLabel: "OK", color: "default" }),
    };
}
