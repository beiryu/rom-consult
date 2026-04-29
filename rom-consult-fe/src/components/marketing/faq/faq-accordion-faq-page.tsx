"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Avatar } from "@/components/base/avatar/avatar";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

const faqCategories = [
    {
        title: "Booking & Scheduling",
        description: "Questions about booking flow, session timing, and rescheduling.",
        faqs: [
            {
                question: "How do I book a consulting session?",
                answer:
                    "Browse services, choose your preferred consultant tier, and complete checkout. You will receive an immediate booking confirmation and our team follows up to finalize your session slot.",
            },
            {
                question: "Can I choose my preferred date and time?",
                answer:
                    "Yes. After booking, we share scheduling options so you can pick a time that works for your team and timeline.",
            },
            {
                question: "How long does it take to schedule my session after booking?",
                answer:
                    "Most bookings are scheduled within 24-48 hours. If your request is urgent, include it in your booking notes and we prioritize where possible.",
            },
            {
                question: "What if I need to reschedule my session?",
                answer:
                    "You can reschedule by contacting support. Earlier notice gives you the most flexibility and helps us keep your preferred consultant available.",
            },
        ],
    },
    {
        title: "Payments & Pricing",
        description: "Answers about payment methods, rates, invoices, and refunds.",
        faqs: [
            {
                question: "What payment methods do you accept?",
                answer:
                    "We support major cards and popular online payment options through secure checkout providers.",
            },
            {
                question: "How much do consulting sessions cost?",
                answer:
                    "Pricing depends on session type, consultant seniority, and engagement scope. You will always see clear pricing before confirming your booking.",
            },
            {
                question: "When will I be charged?",
                answer:
                    "Payment is collected at booking to secure your slot. You receive a receipt and confirmation email immediately after checkout.",
            },
            {
                question: "Do you provide invoices and custom billing details?",
                answer:
                    "Yes. We issue formal invoices for all engagements and can include company details, VAT information, and PO references when requested.",
            },
            {
                question: "What is your refund policy?",
                answer:
                    "Refund eligibility depends on how far in advance the cancellation is submitted. Full or partial refunds may apply based on your booking terms.",
            },
        ],
    },
    {
        title: "Sessions & Delivery",
        description: "What to expect during consulting calls and post-session support.",
        faqs: [
            {
                question: "Which services does RomConsult provide?",
                answer:
                    "We support strategy, operations, finance, market-entry, and digital growth topics for startups and SMEs through both one-off sessions and structured packages.",
            },
            {
                question: "What is included in a consulting session?",
                answer:
                    "Sessions include live advisory support, practical recommendations tailored to your goals, and clear next steps so your team can execute confidently.",
            },
            {
                question: "What video platform do you use for sessions?",
                answer:
                    "Sessions are delivered on standard video meeting platforms such as Zoom or Google Meet, with links shared before your appointment.",
            },
            {
                question: "How long are consulting sessions?",
                answer:
                    "Session lengths vary by package. Most clients choose 60-minute sessions, with shorter and deeper-dive formats also available.",
            },
        ],
    },
    {
        title: "Technical Requirements",
        description: "Device, internet, and setup guidance before your call.",
        faqs: [
            {
                question: "What are the minimum technical requirements?",
                answer:
                    "You need a stable internet connection, a microphone, and a device that supports modern browsers or meeting apps.",
            },
            {
                question: "Can I join from mobile or tablet?",
                answer:
                    "Yes. Mobile and tablet access is supported, but desktop typically provides the best experience for screen sharing and live walkthroughs.",
            },
            {
                question: "Do you offer help with implementation during sessions?",
                answer:
                    "Yes. Depending on your session scope, consultants can guide setup steps, troubleshoot issues, and provide implementation direction in real time.",
            },
        ],
    },
    {
        title: "Consultants & Support",
        description: "Information about consultant quality, communication, and next steps.",
        faqs: [
            {
                question: "How are consultants vetted and qualified?",
                answer:
                    "Consultants are selected based on relevant project experience, communication quality, and performance standards maintained across engagements.",
            },
            {
                question: "Can I become a consultant on your platform?",
                answer:
                    "Yes. We regularly review consultant applications from professionals with proven experience and strong client communication skills.",
            },
            {
                question: "How can I contact RomConsult directly?",
                answer:
                    "Use the Contact page or your booking confirmation email thread. Our support team typically responds within one business day.",
            },
        ],
    },
];

export const FAQAccordionFaqPage = () => {
    const [openQuestions, setOpenQuestions] = useState(new Set(["Booking & Scheduling-0"]));

    const handleToggle = (questionId: string) => {
        openQuestions.has(questionId) ? openQuestions.delete(questionId) : openQuestions.add(questionId);
        setOpenQuestions(new Set(openQuestions));
    };

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md">Frequently asked questions</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Everything you need to know about booking, sessions, and support.</p>
                </div>

                <div className="mx-auto mt-12 max-w-3xl md:mt-16">
                    <div className="flex flex-col gap-8">
                        {faqCategories.map((category, categoryIndex) => (
                            <div key={category.title} className={cx("pt-8 first:pt-0", categoryIndex !== 0 && "border-t border-secondary")}>
                                <h3 className="text-lg font-semibold text-primary">{category.title}</h3>
                                <p className="mt-1 mb-5 text-sm text-tertiary">{category.description}</p>

                                <div className="flex flex-col gap-8">
                                    {category.faqs.map((faq, index) => {
                                        const questionId = `${category.title}-${index}`;
                                        const isOpen = openQuestions.has(questionId);

                                        return (
                                            <div key={faq.question} className="not-first:-mt-px not-first:border-t not-first:border-secondary not-first:pt-6">
                                                <h4>
                                                    <button
                                                        onClick={() => handleToggle(questionId)}
                                                        className="flex w-full cursor-pointer items-start justify-between gap-2 rounded-md text-left outline-focus-ring select-none focus-visible:outline-2 focus-visible:outline-offset-2 md:gap-6"
                                                    >
                                                        <span className="text-md font-semibold text-primary">{faq.question}</span>

                                                        <span aria-hidden="true" className="flex size-6 items-center text-fg-quaternary">
                                                            <svg
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <circle cx="12" cy="12" r="10"></circle>
                                                                <line
                                                                    className={cx("origin-center rotate-0 transition duration-150 ease-out", isOpen && "-rotate-90")}
                                                                    x1="12"
                                                                    y1="8"
                                                                    x2="12"
                                                                    y2="16"
                                                                ></line>
                                                                <line x1="8" y1="12" x2="16" y2="12"></line>
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </h4>

                                                <motion.div
                                                    className="overflow-hidden"
                                                    initial={false}
                                                    animate={{
                                                        height: isOpen ? "auto" : 0,
                                                        opacity: isOpen ? 1 : 0,
                                                    }}
                                                    transition={{
                                                        type: "spring",
                                                        damping: 24,
                                                        stiffness: 240,
                                                        bounce: 0.4,
                                                    }}
                                                >
                                                    <div className="pt-1 pr-8 md:pr-12">
                                                        <p className="text-md text-tertiary">{faq.answer}</p>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center gap-6 rounded-2xl bg-secondary px-6 py-8 text-center md:mt-16 md:gap-8 md:pt-8 md:pb-10">
                    <div className="flex items-end -space-x-4">
                        <Avatar
                            src="https://www.untitledui.com/images/avatars/marco-kelly?fm=webp&q=80"
                            alt="Marco Kelly"
                            size="lg"
                            className="ring-[1.5px] ring-fg-white"
                        />
                        <Avatar
                            src="https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80"
                            alt="Amelie Laurent"
                            size="xl"
                            className="z-10 ring-[1.5px] ring-fg-white"
                        />
                        <Avatar
                            src="https://www.untitledui.com/images/avatars/jaya-willis?fm=webp&q=80"
                            alt="Jaya Willis"
                            size="lg"
                            className="ring-[1.5px] ring-fg-white"
                        />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-primary">Still have questions?</h4>
                        <p className="mt-2 text-md text-tertiary md:text-lg">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    </div>
                    <Button size="xl" href="/contact">
                        Get in touch
                    </Button>
                </div>
            </div>
        </section>
    );
};
