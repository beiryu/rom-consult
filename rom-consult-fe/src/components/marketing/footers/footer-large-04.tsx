"use client";

import { ChevronRight } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";

const footerNavList = [
    {
        label: "RomConsult",
        items: [
            { label: "Services", href: "#services" },
            { label: "About", href: "#about" },
            { label: "Process", href: "#process" },
            { label: "FAQ", href: "#faq" },
            {
                label: "Contact",
                href: "#contact",
                badge: (
                    <Badge size="sm" type="modern" className="ml-1">
                        Web
                    </Badge>
                ),
            },
        ],
    },
    {
        label: "Focus areas",
        items: [
            { label: "Strategic planning", href: "#services" },
            { label: "Financial advisory", href: "#services" },
            { label: "Operations", href: "#services" },
            { label: "Market entry", href: "#services" },
            { label: "Intellectual property", href: "#services" },
        ],
    },
];

const socialProofAvatars = [
    { src: "https://www.untitledui.com/logos/images/Kintsugi.jpg", alt: "Client" },
    { src: "https://www.untitledui.com/logos/images/Refractional.jpg", alt: "Client" },
    { src: "https://www.untitledui.com/logos/images/Leapyear.jpg", alt: "Client" },
    { src: "https://www.untitledui.com/logos/images/ContrastAI.jpg", alt: "Client" },
];

const FooterSocialProofBadge = () => (
    <a
        href="#about"
        className="flex w-max items-center gap-3 rounded-full bg-primary_alt py-1.5 pr-2 pl-1.5 shadow-xs ring-1 ring-secondary_alt transition duration-100 ease-linear hover:bg-primary_hover"
    >
        <div className="flex items-start">
            {socialProofAvatars.map((avatar, i) => (
                <img
                    key={i}
                    src={avatar.src}
                    alt={avatar.alt}
                    className="-ml-1 size-6 rounded-full object-cover ring-[1.5px] ring-white outline-[0.5px] outline-offset-[-0.5px] outline-black/16 first:ml-0"
                />
            ))}
        </div>
        <hr className="h-4 w-px rounded-full border-none bg-border-secondary" />
        <div className="flex items-center gap-1.5">
            <p className="text-sm font-semibold text-primary">100+ satisfied clients</p>
            <ChevronRight className="size-4 text-fg-quaternary" />
        </div>
    </a>
);

export const FooterLarge04 = () => {
    return (
        <footer className="bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 md:gap-16 xl:flex-row">
                    <div className="flex w-full flex-col gap-6 md:max-w-xs">
                        <a
                            href="#hero"
                            className="w-max rounded-md text-xl font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            RomConsult
                        </a>
                        <p className="text-md text-tertiary">
                            Strategic, financial, and operational consulting for startups and SMEs—based in Paris, serving clients across Europe.
                        </p>
                        <FooterSocialProofBadge />
                    </div>
                    <nav className="flex flex-1 flex-col-reverse gap-12 md:flex-row md:gap-8 xl:justify-end">
                        <ul className="grid w-full grid-cols-2 gap-8 md:max-w-xs">
                            {footerNavList.map((category) => (
                                <li key={category.label}>
                                    <h4 className="text-sm font-semibold text-primary">{category.label}</h4>
                                    <ul className="mt-4 flex flex-col gap-3">
                                        {category.items.map((item) => (
                                            <li key={item.label} className="flex">
                                                <Button color="link-color" size="md" href={item.href} iconTrailing={item.badge} className="max-h-5 gap-1">
                                                    {item.label}
                                                </Button>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                            className="flex w-full flex-col gap-4 md:max-w-90"
                        >
                            <label htmlFor="newsletters-email" className="text-sm font-semibold text-primary">
                                Stay up to date
                            </label>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Input
                                    isRequired
                                    id="newsletters-email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    size="lg"
                                    wrapperClassName="flex-1"
                                />
                                <Button type="submit" size="lg">
                                    Subscribe
                                </Button>
                            </div>
                        </Form>
                    </nav>
                </div>
                <div className="mt-12 flex flex-col-reverse justify-between gap-4 border-t border-secondary pt-8 md:mt-16 md:flex-row md:gap-6">
                    <p className="text-sm text-quaternary">© 2026 RomConsult. All rights reserved.</p>

                    <ul className="flex gap-3">
                        {[
                            { label: "Terms", href: "#" },
                            { label: "Privacy", href: "#" },
                            { label: "Cookies", href: "#" },
                        ].map(({ label, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    className="rounded-xs text-sm text-quaternary outline-focus-ring transition duration-100 ease-linear hover:text-tertiary focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};
