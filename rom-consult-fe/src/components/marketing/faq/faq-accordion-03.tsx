"use client";

import { useState } from "react";
import { Clock, CreditCardRefresh, File05, Mail01, SlashCircle01, SwitchHorizontal01 } from "@untitledui/icons";
import { motion } from "motion/react";
import { cx } from "@/utils/cx";

const faqsExtended = [
    {
        question: "What's included in a consulting session?",
        answer: "Each session includes 1-on-1 live consulting, screen sharing, hands-on implementation support, and a post-session summary with recommended next steps.",
        icon: Clock,
    },
    {
        question: "Which platforms and tools are supported?",
        answer: "Support spans 100+ tools including Google Ads, Meta Ads, AWS, Azure, GA4, email delivery stacks, and AI workflow tooling.",
        icon: SwitchHorizontal01,
    },
    {
        question: "How long are sessions?",
        answer: "Most sessions run 30-60 minutes depending on topic complexity and the selected consultant tier.",
        icon: SlashCircle01,
    },
    {
        question: "Can you help with account or setup issues?",
        answer: "Yes. Consultants can review issues, recommend compliant fixes, and guide your team through implementation during the live call.",
        icon: File05,
    },
    {
        question: "Do you have a refund policy?",
        answer: "A full refund is typically available when cancellation is made 24+ hours before the scheduled session time.",
        icon: CreditCardRefresh,
    },
    {
        question: "How quickly can we start?",
        answer: "You can usually book immediately and begin with the first available consultant slot.",
        icon: Mail01,
    },
];

export const FAQAccordion03 = () => {
    const [openQuestions, setOpenQuestions] = useState(new Set([0]));

    const handleToggle = (index: number) => {
        openQuestions.has(index) ? openQuestions.delete(index) : openQuestions.add(index);
        setOpenQuestions(new Set(openQuestions));
    };

    return (
        <section id="faq" className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
                    <div className="flex w-full max-w-3xl flex-col items-center text-center lg:max-w-xl lg:items-start lg:text-left">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">FAQ</span>

                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Common questions</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5">
                            Practical answers about sessions, supported platforms, and booking flow. For a tailored conversation,{" "}
                            <a href="#contact" className="rounded-xs underline underline-offset-4 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                                contact our team
                            </a>
                            .
                        </p>
                    </div>
                    <div className="flex w-full flex-col gap-8">
                        {faqsExtended.map((faq, index) => (
                            <div key={faq.question}>
                                <h3>
                                    <button
                                        onClick={() => handleToggle(index)}
                                        className="flex w-full cursor-pointer items-start justify-between gap-6 rounded-md text-left outline-focus-ring select-none focus-visible:outline-2 focus-visible:outline-offset-2 md:gap-6"
                                    >
                                        <span className="text-md font-semibold text-primary">{faq.question}</span>

                                        <span aria-hidden="true" className="flex size-6 items-center text-fg-quaternary">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
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
                                                    className={cx(
                                                        "origin-center rotate-0 transition duration-150 ease-out",
                                                        openQuestions.has(index) && "-rotate-90",
                                                    )}
                                                    x1="12"
                                                    y1="8"
                                                    x2="12"
                                                    y2="16"
                                                ></line>
                                                <line x1="8" y1="12" x2="16" y2="12"></line>
                                            </svg>
                                        </span>
                                    </button>
                                </h3>

                                <motion.div
                                    className="overflow-hidden"
                                    initial={false}
                                    animate={{
                                        height: openQuestions.has(index) ? "auto" : 0,
                                        opacity: openQuestions.has(index) ? 1 : 0,
                                    }}
                                    transition={{
                                        type: "spring",
                                        damping: 24,
                                        stiffness: 240,
                                        bounce: 0.4,
                                    }}
                                >
                                    <div className="pt-1 pr-12">
                                        <p className="text-md text-tertiary">{faq.answer}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
