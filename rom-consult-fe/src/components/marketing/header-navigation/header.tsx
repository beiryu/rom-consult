"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, LogOut01, ShoppingBag01 } from "@untitledui/icons";
import Image from "next/image";
import Link from "next/link";
import { Button as AriaButton, Dialog as AriaDialog, DialogTrigger as AriaDialogTrigger, Popover as AriaPopover } from "react-aria-components";
import { Avatar } from "@/components/base/avatar/avatar";
import { Button } from "@/components/base/buttons/button";
import { useAuthStore } from "@/stores/auth-store";
import { useBookingCartStore } from "@/stores/booking-cart-store";
import { cx } from "@/utils/cx";

type HeaderNavItem = {
    label: string;
    href?: string;
    menu?: ReactNode;
};

const headerNavItems: HeaderNavItem[] = [
    { label: "Book Consulting", href: "/browse-services" },
    { label: "Become a consultant", href: "/become-a-consultant" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
];

const footerNavItems = [
    { label: "Book Consulting", href: "/browse-services" },
    { label: "Become a consultant", href: "/become-a-consultant" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Legal", href: "#" },
];

const getInitials = (fullName?: string) => {
    if (!fullName?.trim()) {
        return "U";
    }

    const words = fullName.trim().split(/\s+/);

    return words
        .slice(0, 2)
        .map((word) => word[0]?.toUpperCase() ?? "")
        .join("");
};

const MobileNavItem = (props: { className?: string; label: string; href?: string; children?: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (props.href) {
        return (
            <li>
                <a
                    href={props.href}
                    className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-secondary transition duration-100 ease-linear hover:bg-secondary_hover hover:text-primary"
                >
                    {props.label}
                </a>
            </li>
        );
    }

    return (
        <li className="flex flex-col gap-0.5">
            <button
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-secondary transition duration-100 ease-linear hover:bg-secondary_hover hover:text-primary"
            >
                {props.label}{" "}
                <ChevronDown
                    className={cx("size-4 stroke-[2.625px] text-fg-quaternary transition duration-100 ease-linear", isOpen ? "-rotate-180" : "rotate-0")}
                />
            </button>

            {isOpen && <div>{props.children}</div>}
        </li>
    );
};

const MobileFooter = (props: {
    isAuthenticated: boolean;
    isHydrated: boolean;
    onLogout: () => void;
    initials: string;
}) => {
    return (
        <div className="flex flex-col gap-8 border-t border-secondary px-4 py-6">
            <div>
                <ul className="grid grid-flow-col grid-cols-2 grid-rows-4 gap-x-6 gap-y-3">
                    {footerNavItems.map((navItem) => (
                        <li key={navItem.label}>
                            <Button
                                color="link-gray"
                                size="sm"
                                href={navItem.href}
                                className="text-secondary hover:text-primary *:data-icon:text-fg-quaternary hover:*:data-icon:text-fg-primary"
                            >
                                {navItem.label}
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col gap-3">
                {!props.isHydrated ? null : props.isAuthenticated ? (
                    <div className="flex items-center gap-3">
                        <Link href="/dashboard" className="group inline-flex rounded-full outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                            <Avatar size="sm" initials={props.initials} focusable />
                        </Link>
                        <Button size="md" color="secondary-destructive" iconLeading={LogOut01} onClick={props.onLogout}>
                            Log out
                        </Button>
                    </div>
                ) : (
                    <>
                        <Button size="md" color="secondary" className="bg-primary text-primary hover:bg-primary_hover" href="/login">
                            Log in
                        </Button>
                        <Button color="primary" size="md" className="ring-brand_alt" href="/signup">
                            Sign up
                        </Button>
                    </>
                )}
                <Button size="md" href="/contact" color="secondary" className="bg-primary text-primary hover:bg-primary_hover">
                    Contact RomConsult
                </Button>
                <Button color="secondary" size="md" href="#services" className="bg-brand-solid text-primary_on-brand ring-brand_alt hover:bg-brand-solid_hover">
                    View services
                </Button>
            </div>
        </div>
    );
};

interface HeaderProps {
    items?: HeaderNavItem[];
    isFullWidth?: boolean;
    isFloating?: boolean;
    className?: string;
}

export const Header = ({ items = headerNavItems, isFullWidth, isFloating, className }: HeaderProps) => {
    const headerRef = useRef<HTMLElement>(null);
    const [isHydrated, setIsHydrated] = useState(false);
    const [isCartHydrated, setIsCartHydrated] = useState(false);
    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);
    const cartLineCount = useBookingCartStore((state) => state.items.length);
    const isAuthenticated = isHydrated && Boolean(user);
    const userInitials = getInitials(user?.fullName);
    const showCartCount = isCartHydrated && cartLineCount > 0;

    useEffect(() => {
        const authPersistApi = useAuthStore.persist;
        const cartPersistApi = useBookingCartStore.persist;
        let unsubscribeAuthHydration: (() => void) | undefined;
        let unsubscribeCartHydration: (() => void) | undefined;

        if (!authPersistApi) {
            setIsHydrated(true);
        } else {
            unsubscribeAuthHydration = authPersistApi.onFinishHydration(() => {
                setIsHydrated(true);
            });
            setIsHydrated(authPersistApi.hasHydrated());
        }

        if (!cartPersistApi) {
            setIsCartHydrated(true);
        } else {
            unsubscribeCartHydration = cartPersistApi.onFinishHydration(() => {
                setIsCartHydrated(true);
            });
            setIsCartHydrated(cartPersistApi.hasHydrated());
        }

        return () => {
            unsubscribeAuthHydration?.();
            unsubscribeCartHydration?.();
        };
    }, []);

    return (
        <>
            <header
                ref={headerRef}
                className={cx(
                    "sticky top-0 z-50 flex h-16 w-full items-center justify-center bg-primary/95 backdrop-blur-sm md:h-18",
                    isFloating && "h-16 md:h-19 md:pt-3",
                    isFullWidth && !isFloating ? "has-aria-expanded:bg-primary" : "max-md:has-aria-expanded:bg-primary",
                    className,
                )}
            >
                <div className="flex size-full max-w-container flex-1 items-center pr-3 pl-4 md:px-8">
                <div
                    className={cx(
                        "flex w-full justify-between gap-4",
                        isFloating && "ring-brand_alt md:rounded-2xl md:bg-primary md:py-3 md:pr-3 md:pl-4 md:shadow-xs md:ring-1",
                    )}
                >
                    <div className="flex flex-1 items-center gap-5">
                        <a
                            href="/"
                            className="shrink-0 rounded-md outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                            aria-label="RomConsult home"
                        >
                            <Image src="/assets/Logomark - Black.svg" alt="RomConsult" width={249} height={44} className="h-7 w-auto md:h-8" priority />
                        </a>

                        {/* Desktop navigation */}
                        <nav className="max-md:hidden">
                            <ul className="flex items-center gap-0.5">
                                {items.map((navItem) => (
                                    <li key={navItem.label}>
                                        {navItem.menu ? (
                                            <AriaDialogTrigger>
                                                <AriaButton className="flex cursor-pointer items-center gap-0.5 rounded-lg px-1.5 py-1 text-sm font-semibold text-secondary outline-focus-ring transition duration-100 ease-linear hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2">
                                                    <span className="px-0.5">{navItem.label}</span>

                                                    <ChevronDown className="size-4 rotate-0 stroke-[2.625px] text-fg-quaternary transition duration-100 ease-linear in-aria-expanded:-rotate-180" />
                                                </AriaButton>

                                                <AriaPopover
                                                    className={({ isEntering, isExiting }) =>
                                                        cx(
                                                            "hidden origin-top will-change-transform md:block",
                                                            isFullWidth && "w-full",
                                                            isEntering && "duration-200 ease-out animate-in fade-in slide-in-from-top-1",
                                                            isExiting && "duration-150 ease-in animate-out fade-out slide-out-to-top-1",
                                                        )
                                                    }
                                                    offset={isFloating && !isFullWidth ? -4 : isFullWidth ? 0 : 8}
                                                    containerPadding={0}
                                                    triggerRef={(isFloating && isFullWidth) || isFullWidth ? headerRef : undefined}
                                                >
                                                    {({ isEntering, isExiting }) => (
                                                        <AriaDialog
                                                            className={cx(
                                                                "mx-auto origin-top outline-hidden",
                                                                isFloating && "max-w-7xl px-8 pt-3",
                                                                isEntering && !isFullWidth && "duration-200 ease-out animate-in zoom-in-95",
                                                                isExiting && !isFullWidth && "duration-150 ease-in animate-out zoom-out-95",
                                                            )}
                                                        >
                                                            {navItem.menu}
                                                        </AriaDialog>
                                                    )}
                                                </AriaPopover>
                                            </AriaDialogTrigger>
                                        ) : (
                                            <a
                                                href={navItem.href}
                                                className="flex cursor-pointer items-center gap-0.5 rounded-lg px-1.5 py-1 text-sm font-semibold text-secondary outline-focus-ring transition duration-100 ease-linear hover:text-primary focus:outline-offset-2 focus-visible:outline-2"
                                            >
                                                <span className="px-0.5">{navItem.label}</span>
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="hidden items-center gap-3 md:flex">
                        <Link
                            href="/checkout"
                            className="relative inline-flex rounded-lg border border-secondary p-2 text-fg-secondary outline-focus-ring transition duration-100 ease-linear hover:bg-secondary_hover hover:text-fg-primary focus-visible:outline-2 focus-visible:outline-offset-2"
                            aria-label="View cart"
                        >
                            <ShoppingBag01 className="size-5" />
                            {showCartCount && (
                                <span className="absolute -top-2 -right-2 inline-flex min-w-5 items-center justify-center rounded-full bg-brand-solid px-1.5 text-xs font-semibold text-primary_on-brand">
                                    {cartLineCount}
                                </span>
                            )}
                        </Link>
                        {!isHydrated ? null : isAuthenticated ? (
                            <>
                                <Link href="/dashboard" className="group inline-flex rounded-full outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                                    <Avatar size="sm" initials={userInitials} focusable />
                                </Link>
                                <Button color="secondary-destructive" size={isFloating ? "md" : "sm"} iconLeading={LogOut01} onClick={logout}>
                                    Log out
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button color="secondary" size={isFloating ? "md" : "sm"} className="bg-primary text-primary hover:bg-primary_hover" href="/login">
                                    Log in
                                </Button>
                                <Button color="primary" size={isFloating ? "md" : "sm"} className="ring-brand_alt" href="/signup">
                                    Sign up
                                </Button>
                            </>
                        )}
                    </div>

                    {/* Mobile menu and menu trigger */}
                    <div className="ml-auto flex items-center gap-1 md:hidden">
                        <Link
                            href="/checkout"
                            className="relative inline-flex rounded-lg p-2 text-fg-secondary outline-focus-ring transition duration-100 ease-linear hover:bg-secondary_hover hover:text-fg-primary focus-visible:outline-2 focus-visible:outline-offset-2"
                            aria-label="View cart"
                        >
                            <ShoppingBag01 className="size-5" />
                            {showCartCount && (
                                <span className="absolute -top-2 -right-2 inline-flex min-w-5 items-center justify-center rounded-full bg-brand-solid px-1.5 text-xs font-semibold text-primary_on-brand">
                                    {cartLineCount}
                                </span>
                            )}
                        </Link>
                    </div>

                    <AriaDialogTrigger>
                        <AriaButton
                            aria-label="Toggle navigation menu"
                            className={({ isFocusVisible, isHovered }) =>
                                cx(
                                    "group cursor-pointer rounded-lg p-2 md:hidden",
                                    isHovered && "bg-secondary_hover",
                                    isFocusVisible && "outline-2 outline-offset-2 outline-focus-ring",
                                )
                            }
                        >
                            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    className="hidden text-secondary group-aria-expanded:block"
                                    d="M18 6L6 18M6 6L18 18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    className="text-secondary group-aria-expanded:hidden"
                                    d="M3 12H21M3 6H21M3 18H21"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </AriaButton>
                        <AriaPopover
                            triggerRef={headerRef}
                            className="scrollbar-hide h-[calc(100%-72px)] w-full overflow-y-auto shadow-lg md:hidden"
                            offset={0}
                            crossOffset={20}
                            containerPadding={0}
                            placement="bottom left"
                        >
                            <AriaDialog className="outline-hidden">
                                <nav className="w-full bg-primary shadow-lg">
                                    <ul className="flex flex-col gap-0.5 py-5">
                                        {items.map((navItem) =>
                                            navItem.menu ? (
                                                <MobileNavItem key={navItem.label} label={navItem.label}>
                                                    {navItem.menu}
                                                </MobileNavItem>
                                            ) : (
                                                <MobileNavItem key={navItem.label} label={navItem.label} href={navItem.href} />
                                            ),
                                        )}
                                    </ul>

                                    <MobileFooter
                                        isAuthenticated={isAuthenticated}
                                        isHydrated={isHydrated}
                                        initials={userInitials}
                                        onLogout={logout}
                                    />
                                </nav>
                            </AriaDialog>
                        </AriaPopover>
                    </AriaDialogTrigger>
                </div>
                </div>
            </header>

        </>
    );
};
