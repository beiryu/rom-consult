"use client";

import type { ReactNode } from "react";
import { Mail01, MarkerPin01, Phone } from "@untitledui/icons";
import Image from "next/image";
import { AlertFloating } from "@/components/application/alerts/alerts";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { AmexIcon, MastercardIcon, PayPalIcon, VisaIcon } from "@/components/foundations/payment-icons";

type FooterNavItem = {
    label: string;
    href: string;
    badge?: ReactNode;
    isDisabled?: boolean;
};

type FooterNavCategory = {
    label: string;
    items: FooterNavItem[];
};

const footerNavList: FooterNavCategory[] = [
    {
        label: "Services",
        items: [
            {
                label: "Book Consulting",
                href: "/browse-services",
            },
            {
                label: "Become a Consultant",
                href: "/become-a-consultant",
            },
            {
                label: "About Us",
                href: "/about",
            },
            {
                label: "FAQs",
                href: "/faq",
            },
            {
                label: "Support",
                href: "/support",
            },
            {
                label: "Contact Us",
                href: "/contact",
            },
        ],
    },
    {
        label: "Legal",
        items: [
            {
                label: "Terms of Service",
                href: "/terms-of-service",
            },
            {
                label: "Privacy Policy",
                href: "/privacy-policy",
            },
            {
                label: "Refund Policy",
                href: "/refund-policy",
            },
            {
                label: "Disclaimer",
                href: "/disclaimer",
            },
            {
                label: "Acceptable Use",
                href: "/acceptable-use",
            },
            {
                label: "AML/CFT Policy",
                href: "/aml-cft-policy",
            },
        ],
    },
];
const paymentOptions = [
    { label: "Paypal", icon: PayPalIcon },
    { label: "Visa", icon: VisaIcon },
    { label: "MasterCard", icon: MastercardIcon },
    { label: "AMex", icon: AmexIcon },
];

export const FooterLarge12 = () => {
    return (
        <footer className="bg-primary">
            <div className="bg-secondary_alt py-10 md:py-12">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col gap-4">
                        <AlertFloating
                            color="warning"
                            title="Disclaimer"
                            description="Rom Consult provides technical consulting and implementation services for cloud platforms and digital advertising systems. We do not guarantee specific financial results, earnings, or ROI. All business outcomes vary based on individual execution, market conditions, and other factors."
                            confirmLabel="Learn more"
                            confirmHref="/disclaimer"
                        />
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-container px-4 py-12 md:px-8 md:pt-16">
                <div className="flex flex-col gap-12 md:gap-16 xl:flex-row">
                    <div className="flex flex-col gap-6 xl:w-1/2">
                        <a href="/" aria-label="RomConsult home" className="w-full shrink-0">
                            <Image src="/assets/Logomark - Black.svg" alt="RomConsult" width={249} height={44} className="h-7 w-auto md:h-8" />
                        </a>
                        <p className="text-md text-tertiary">
                            Professional 1-on-1 technical consulting services for digital marketing platforms, cloud hosting, and business systems.
                        </p>
                        <div className="flex flex-col gap-3 text-sm text-tertiary">
                            <p className="font-semibold text-primary">RomConsult LTD</p>
                            <div className="flex items-start gap-2">
                                <MarkerPin01 className="mt-0.5 size-5 shrink-0 text-fg-secondary" />
                                <span>60 rue François 1er, 75008 Paris</span>
                            </div>
                            <a href="tel:+14588007464" className="flex items-start gap-2 transition duration-100 ease-linear hover:text-tertiary_hover">
                                <Phone className="mt-0.5 size-5 shrink-0 text-fg-secondary" />
                                <span>+1 (458) 800-7464</span>
                            </a>
                            <a
                                href="mailto:info@rom-consult.com"
                                className="flex items-start gap-2 transition duration-100 ease-linear hover:text-tertiary_hover"
                            >
                                <Mail01 className="mt-0.5 size-5 shrink-0 text-fg-secondary" />
                                <span>info@rom-consult.com</span>
                            </a>
                        </div>
                    </div>
                    <nav className="xl:w-1/2">
                        <ul className="grid flex-1 grid-cols-2 gap-8">
                            {footerNavList.slice(0, 5).map((category) => (
                                <li key={category.label}>
                                    <ul className="flex flex-col gap-3">
                                        {category.items.map((item) => (
                                            <li key={item.label} className="flex">
                                                <Button
                                                    color="link-gray"
                                                    size="md"
                                                    href={item.href}
                                                    isDisabled={item.isDisabled}
                                                    iconTrailing={item.badge}
                                                    className="max-h-5 gap-1"
                                                >
                                                    {item.label}
                                                </Button>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="mt-12 flex flex-col-reverse justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row">
                    <p className="text-sm text-quaternary">© 2026 RomConsult. All rights reserved.</p>
                    <ul className="flex gap-4">
                        {paymentOptions.map(({ label, icon: Icon }) => (
                            <li key={label}>
                                <Icon className="h-5 w-auto" aria-label={label} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};
