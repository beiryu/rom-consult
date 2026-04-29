"use client";

import { useState } from "react";
import { Building07, Clock, Mail01, MarkerPin01 } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Badge } from "@/components/base/badges/badges";
import { AppStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Form } from "@/components/base/form/form";
import { Input, InputBase } from "@/components/base/input/input";
import { InputGroup } from "@/components/base/input/input-group";
import { NativeSelect } from "@/components/base/select/select-native";
import { TextArea } from "@/components/base/textarea/textarea";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import countries, { phoneCodeOptions } from "@/utils/countries";

const HeaderCentered = () => {
    return (
        <section className="relative overflow-hidden bg-utility-brand-50_alt py-16 md:py-24">
            <div className="relative mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
                    <BadgeGroup className="hidden md:flex" size="lg" theme="light" color="brand" addonText="Contact us">
                        Support and sales
                    </BadgeGroup>
                    <BadgeGroup className="md:hidden" size="md" theme="light" color="brand" addonText="Contact us">
                        Get in touch
                    </BadgeGroup>

                    <h1 className="mt-4 text-display-md font-medium text-brand-primary md:text-display-lg lg:text-display-xl">Connect with our team</h1>
                    <p className="mt-4 max-w-120 text-lg text-balance text-brand-secondary md:mt-6 md:text-xl">
                        Tell us what you need, and we&apos;ll connect you with the right expert.
                    </p>
                </div>
            </div>
        </section>
    );
};

const ContactFormAndMap = () => {
    const [selectedCountryPhone, setSelectedCountryPhone] = useState("US");

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
                    <div className="rounded-3xl border border-secondary bg-primary p-6 md:p-8 lg:p-10">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Send Us a Message</h2>
                    <p className="mt-4 text-lg whitespace-pre-line text-tertiary md:mt-6 md:text-xl">
                        Fill out the form below and we&apos;ll respond within 24-48 hours.
                    </p>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="mt-12 flex flex-col gap-8"
                    >
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-x-8 gap-y-6 sm:flex-row">
                                <Input isRequired size="lg" name="firstName" label="First name" placeholder="First name" wrapperClassName="flex-1" />
                                <Input isRequired size="lg" name="lastName" label="Last name" placeholder="Last name" wrapperClassName="flex-1" />
                            </div>
                            <Input isRequired size="lg" name="email" label="Email" type="email" placeholder="you@company.com" />
                            <InputGroup
                                size="lg"
                                name="phone"
                                label="Phone number"
                                leadingAddon={
                                    <NativeSelect
                                        aria-label="Country code"
                                        value={selectedCountryPhone}
                                        onChange={(value) => setSelectedCountryPhone(value.currentTarget.value)}
                                        options={phoneCodeOptions.map((item) => ({
                                            label: item.label as string,
                                            value: item.id as string,
                                        }))}
                                    />
                                }
                            >
                                <InputBase
                                    type="tel"
                                    placeholder={countries.find((country) => country.code === selectedCountryPhone)?.phoneMask?.replaceAll("#", "0")}
                                />
                            </InputGroup>
                            <TextArea isRequired label="Message" placeholder="Leave us a message..." rows={5} />
                            <Checkbox
                                name="privacy"
                                size="md"
                                hint={
                                    <>
                                        You agree to our friendly{" "}
                                        <a
                                            href="#"
                                            className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            privacy policy.
                                        </a>
                                    </>
                                }
                            />
                        </div>

                        <Button type="submit" size="xl">
                            Send message
                        </Button>
                    </Form>
                </div>
                    <div className="flex flex-col gap-6 lg:sticky lg:top-24">
                        <div className="rounded-3xl border border-brand_alt bg-brand-section px-6 py-7 md:px-8 md:py-9">
                            <div className="mb-6">
                                <p className="text-sm font-medium text-tertiary_on-brand">Contact details</p>
                                <h3 className="mt-2 text-display-xs font-semibold text-primary_on-brand">Talk to our team</h3>
                            </div>
                            <ul className="divide-y divide-secondary/60">
                                {[
                                    {
                                        title: "Email",
                                        icon: Mail01,
                                        content: <p className="mt-1 text-md font-semibold text-primary_on-brand">support@optimarkmedia.com</p>,
                                    },
                                    {
                                        title: "Response time",
                                        icon: Clock,
                                        content: <p className="mt-1 text-md font-semibold text-primary_on-brand">24-48 hours</p>,
                                    },
                                    {
                                        title: "Tech provider",
                                        icon: MarkerPin01,
                                        content: (
                                            <p className="mt-1 whitespace-pre-line text-md text-secondary_on-brand">
                                                <span className="font-semibold text-primary_on-brand">Optimark Media LTD</span>
                                                {"\n"}20 Wenlock Road
                                                {"\n"}London, N1 7GU, England
                                                {"\n"}+44 7474 711663
                                            </p>
                                        ),
                                    },
                                    {
                                        title: "Gig service provider",
                                        icon: Building07,
                                        content: (
                                            <p className="mt-1 whitespace-pre-line text-md text-secondary_on-brand">
                                                <span className="font-semibold text-primary_on-brand">PD Cash LLC</span>
                                                {"\n"}30 N Gould St, STE R
                                                {"\n"}Sheridan, WY 82801, USA
                                                {"\n"}+1 210 201 6000
                                            </p>
                                        ),
                                    },
                                ].map((item) => (
                                    <li key={item.title} className="flex gap-4 py-5 first:pt-0 last:pb-0 md:gap-5">
                                        <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/10 bg-primary/10">
                                            <item.icon className="size-5 text-fg-white" aria-hidden />
                                        </span>
                                        <div>
                                            <p className="text-xs font-medium tracking-[0.08em] text-tertiary_on-brand uppercase">{item.title}</p>
                                            {item.content}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-secondary bg-primary p-7 md:p-8">
                            <div className="min-w-0">
                                <div className="flex items-center justify-between gap-4">
                                    <p className="text-sm font-medium text-brand-secondary">Help center</p>
                                    <a
                                        href="/faq"
                                        className="text-sm font-medium text-brand-secondary transition duration-100 ease-linear hover:text-brand-secondary_hover hover:underline hover:underline-offset-3"
                                    >
                                        View FAQ -&gt;
                                    </a>
                                </div>
                                <h3 className="mt-1 text-xl font-semibold text-primary">Have questions?</h3>
                                <p className="mt-2 text-sm text-tertiary">
                                    Find quick answers, setup steps, and common troubleshooting guidance in our FAQ.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const navList2Brand = [
    {
        title: "Product",
        items: [
            { label: "Overview", href: "#" },
            { label: "Features", href: "#" },
            {
                label: "Solutions",
                href: "#",
                badge: (
                    <Badge type="modern" size="sm" className="ml-1">
                        New
                    </Badge>
                ),
            },
            { label: "Tutorials", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Releases", href: "#" },
        ],
    },
    {
        title: "Company",
        items: [
            { label: "About us", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Press", href: "#" },
            { label: "News", href: "#" },
            { label: "Media kit", href: "#" },
            { label: "Contact", href: "#" },
        ],
    },
    {
        title: "Resources",
        items: [
            { label: "Blog", href: "#" },
            { label: "Newsletter", href: "#" },
            { label: "Events", href: "#" },
            { label: "Help centre", href: "#" },
            { label: "Tutorials", href: "#" },
            { label: "Support", href: "#" },
        ],
    },
    {
        title: "Social",
        items: [
            { label: "X", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Facebook", href: "#" },
            { label: "GitHub", href: "#" },
            { label: "AngelList", href: "#" },
            { label: "Dribbble", href: "#" },
        ],
    },
    {
        title: "Legal",
        items: [
            { label: "Terms", href: "#" },
            { label: "Privacy", href: "#" },
            { label: "Cookies", href: "#" },
            { label: "Licenses", href: "#" },
            { label: "Settings", href: "#" },
            { label: "Contact", href: "#" },
        ],
    },
];

const FooterLarge03 = () => {
    return (
        <footer className="dark-mode bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <nav className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
                    <ul className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                        {navList2Brand.map((category) => (
                            <li key={category.title}>
                                <h4 className="text-sm font-semibold text-primary">{category.title}</h4>
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
                    <div className="w-full md:max-w-[135px]">
                        <h4 className="text-sm font-semibold text-primary">Start growing with Untitled</h4>
                        <div className="mt-4 flex w-max flex-row gap-4 md:flex-col">
                            <AppStoreButton href="#" className="w-[135px]" />
                            <GooglePlayButton href="#" className="w-[135px]" />
                        </div>
                    </div>
                </nav>
                <div className="mt-12 flex flex-col justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row md:items-center">
                    <UntitledLogo className="h-7 w-min" />
                    <p className="text-sm text-quaternary">© 2077 Untitled UI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const ContactPage03 = () => {
    return (
        <div className="bg-primary">
            <HeaderCentered />
            <ContactFormAndMap />
        </div>
    );
};

export default ContactPage03;
