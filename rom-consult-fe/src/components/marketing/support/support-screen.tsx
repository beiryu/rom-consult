"use client";

import { useMemo, useState } from "react";
import {
    BookOpen01,
    ChevronRight,
    Clock,
    InfoCircle,
    LifeBuoy01,
    Mail01,
    MarkerPin01,
    MessageChatSquare,
    SearchLg,
    Send01,
    Ticket01,
} from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { Select } from "@/components/base/select/select";
import type { SelectItemType } from "@/components/base/select/select-shared";
import { TextArea } from "@/components/base/textarea/textarea";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const categoryItems: SelectItemType[] = [
    { id: "technical", label: "Technical issue" },
    { id: "billing", label: "Billing and payment" },
    { id: "account", label: "Account access" },
    { id: "service", label: "Service delivery" },
    { id: "other", label: "Other" },
];

const quickResources = [
    { label: "FAQ", href: "/faq" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Contact Us", href: "/contact" },
];

declare global {
    interface Window {
        $crisp?: Array<[string, string, string]>;
    }
}

export const SupportScreen = () => {
    const [ticketMessage, setTicketMessage] = useState("");
    const [messageError, setMessageError] = useState("");

    const ticketMessageHint = useMemo(() => {
        if (messageError) {
            return messageError;
        }

        return "Minimum 20 characters";
    }, [messageError]);

    const openLiveChat = () => {
        if (typeof window === "undefined") {
            return;
        }

        window.$crisp?.push(["do", "chat:open"]);
    };

    return (
        <>
            <section className="relative overflow-hidden bg-utility-brand-50_alt py-16 md:py-24" aria-labelledby="support-hero-heading">
                <div className="relative mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
                        <BadgeGroup className="hidden md:flex" size="lg" theme="light" color="brand" addonText="Contact us">
                            Support and sales
                        </BadgeGroup>
                        <BadgeGroup className="md:hidden" size="md" theme="light" color="brand" addonText="Contact us">
                            Get in touch
                        </BadgeGroup>
                        <h1 id="support-hero-heading" className="mt-4 text-display-md font-medium text-brand-primary md:text-display-lg lg:text-display-xl">
                            How Can We Help You?
                        </h1>
                        <p className="mt-4 max-w-120 text-lg text-balance text-brand-secondary md:mt-6 md:text-xl">
                            Tell us what you need, and we&apos;ll connect you with the right expert.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-primary py-16 md:py-20">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
                        <li className="rounded-2xl border border-secondary bg-primary p-6 text-center">
                            <FeaturedIcon icon={BookOpen01} color="success" theme="light" size="md" className="mx-auto" />
                            <h2 className="mt-4 text-lg font-semibold text-primary">Browse FAQ</h2>
                            <p className="mt-2 text-md text-tertiary">Find quick answers to common questions.</p>
                            <Button href="/faq" color="secondary" size="md" className="mt-5 w-full justify-center">
                                Open FAQ
                            </Button>
                        </li>
                        <li className="rounded-2xl border border-secondary bg-primary p-6 text-center">
                            <FeaturedIcon icon={MessageChatSquare} color="brand" theme="light" size="md" className="mx-auto" />
                            <h2 className="mt-4 text-lg font-semibold text-primary">Live Chat</h2>
                            <p className="mt-2 text-md text-tertiary">Chat with our support team in real time.</p>
                            <Button onClick={openLiveChat} color="secondary" size="md" className="mt-5 w-full justify-center">
                                Start Chat
                            </Button>
                        </li>
                        <li className="rounded-2xl border border-secondary bg-primary p-6 text-center">
                            <FeaturedIcon icon={Ticket01} color="warning" theme="light" size="md" className="mx-auto" />
                            <h2 className="mt-4 text-lg font-semibold text-primary">Submit Ticket</h2>
                            <p className="mt-2 text-md text-tertiary">Create a detailed support request.</p>
                            <Button href="#create-ticket" color="secondary" size="md" className="mt-5 w-full justify-center">
                                Go to Form
                            </Button>
                        </li>
                    </ul>
                </div>
            </section>

            <section id="create-ticket" className="bg-primary pb-16 md:pb-24" aria-labelledby="create-ticket-heading">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3 lg:gap-10">
                        <div className="flex flex-col gap-6 lg:col-span-2">
                            <div className="rounded-3xl border border-secondary bg-primary p-6 md:p-8">
                                <div className="flex items-start gap-3">
                                    <div>
                                        <h2 id="create-ticket-heading" className="text-xl font-semibold text-primary md:text-display-xs">
                                            Create Support Ticket
                                        </h2>
                                        <p className="mt-1 text-md text-tertiary">Fill out the form below and we&apos;ll respond within 24-48 hours.</p>
                                    </div>
                                </div>

                                <Form
                                    className="mt-8 flex flex-col gap-6"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        if (ticketMessage.trim().length < 20) {
                                            setMessageError("Message must be at least 20 characters.");
                                            return;
                                        }

                                        setMessageError("");
                                        const data = Object.fromEntries(new FormData(e.currentTarget));
                                        console.log("Support ticket submitted:", data);
                                    }}
                                >
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <Input name="fullName" label="Full Name" placeholder="John Doe" size="lg" isRequired />
                                        <Input name="email" label="Email Address" placeholder="john@example.com" type="email" size="lg" isRequired />
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <Input
                                            name="bookingId"
                                            label="Booking ID"
                                            placeholder="32-digit booking ID"
                                            size="lg"
                                            hint="Found in your booking confirmation email"
                                        />
                                        <Input
                                            name="consultantId"
                                            label="Consultant ID"
                                            placeholder="20-digit consultant ID"
                                            size="lg"
                                            hint="Found in your consultant dashboard"
                                        />
                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl border border-secondary bg-secondary p-4">
                                        <FeaturedIcon icon={InfoCircle} color="brand" theme="light" size="sm" />
                                        <p className="text-sm text-secondary">
                                            <span className="font-semibold text-primary">Note:</span> Please provide at least one reference ID to help us assist you
                                            faster.
                                        </p>
                                    </div>

                                    <Select name="category" label="Category" placeholder="Select a category" items={categoryItems} size="lg" isRequired>
                                        {(item) => <Select.Item id={item.id} label={item.label} />}
                                    </Select>

                                    <Input name="subject" label="Subject" placeholder="Brief description of your issue" size="lg" isRequired />

                                    <TextArea
                                        name="message"
                                        label="Message"
                                        placeholder="Please describe your issue in detail..."
                                        rows={5}
                                        value={ticketMessage}
                                        onChange={(e) => {
                                            setTicketMessage(e.target.value);
                                            if (messageError && e.target.value.trim().length >= 20) {
                                                setMessageError("");
                                            }
                                        }}
                                        isInvalid={Boolean(messageError)}
                                        hint={ticketMessageHint}
                                        isRequired
                                    />

                                    <Button type="submit" size="xl" iconLeading={Send01} className="w-full">
                                        Submit Ticket
                                    </Button>
                                </Form>
                            </div>

                            <div className="rounded-3xl border border-secondary bg-primary p-6 md:p-8">
                                <h3 className="text-xl font-semibold text-primary md:text-display-xs">Check Existing Ticket</h3>
                                <p className="mt-1 text-md text-tertiary">Enter your ticket ID and email to view status.</p>

                                <Form
                                    className="mt-6 flex flex-col gap-4"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        const data = Object.fromEntries(new FormData(e.currentTarget));
                                        console.log("Check support ticket:", data);
                                    }}
                                >
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        <Input name="ticketId" label="Ticket ID" placeholder="TK-XXXXXXXXXXX" size="lg" isRequired />
                                        <Input name="ticketEmail" label="Email Address" placeholder="your@email.com" type="email" size="lg" isRequired />
                                    </div>
                                    <Button type="submit" color="secondary" size="lg" iconLeading={SearchLg} className="w-full md:w-auto">
                                        View Ticket
                                    </Button>
                                </Form>
                            </div>
                        </div>

                        <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:col-span-1">
                            <div className="rounded-3xl border border-brand_alt bg-brand-section px-6 py-7 md:px-8 md:py-9">
                                <ul className="divide-y divide-secondary/60">
                                    {[
                                        {
                                            title: "Email",
                                            icon: Mail01,
                                            content: <p className="mt-1 text-md font-semibold text-primary_on-brand">support@romconsult.com</p>,
                                        },
                                        {
                                            title: "Response Time",
                                            icon: Clock,
                                            content: <p className="mt-1 text-md font-semibold text-primary_on-brand">24-48 hours</p>,
                                        },
                                        {
                                            title: "Tech Provider",
                                            icon: MarkerPin01,
                                            content: (
                                                <p className="mt-1 whitespace-pre-line text-md text-secondary_on-brand">
                                                    <span className="font-semibold text-primary_on-brand">RomConsult LTD</span>
                                                    {"\n"}20 Wenlock Road
                                                    {"\n"}London, N1 7GU, England
                                                    {"\n"}+44 7474 711663
                                                </p>
                                            ),
                                        },
                                    ].map((item) => (
                                        <li key={item.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
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

                            <div className="rounded-3xl border border-secondary bg-primary p-6 md:p-7">
                                <div className="flex items-center gap-2">
                                    <LifeBuoy01 className="size-5 text-fg-brand-primary" aria-hidden />
                                    <h3 className="text-lg font-semibold text-primary">Quick Resources</h3>
                                </div>
                                <ul className="mt-5 flex flex-col gap-3">
                                    {quickResources.map((item) => (
                                        <li key={item.href}>
                                            <Button href={item.href} color="link-gray" size="md" iconTrailing={ChevronRight} className="w-full justify-between">
                                                {item.label}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
};
