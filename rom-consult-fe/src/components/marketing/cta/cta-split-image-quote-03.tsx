"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import type { Transition, Variants } from "motion/react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/base/buttons/button";
import { StarIcon } from "@/components/foundations/rating-stars";

const reviews = [
    {
        quote: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        name: "Felicity Pierre",
        title: "Head of Design, Layers",
        company: "UX Agency",
        rating: 5,
        image: "https://www.untitledui.com/marketing/interview.webp",
    },
    {
        quote: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        name: "Felicity Pierre",
        title: "Head of Design, Layers",
        company: "UX Agency",
        rating: 5,
        image: "https://www.untitledui.com/marketing/podcast-girl.webp",
    },
    {
        quote: "We've really sped up our workflow using Rum Consult and haven't looked back. We're so happy!",
        name: "Fleur Cook",
        title: "PM, Hourglass",
        company: "Web Design Agency",
        rating: 5,
        image: "https://www.untitledui.com/marketing/girl.webp",
    },
];

const variants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 500 : -500,
        opacity: 0,
    }),
    center: {
        x: 0,
        zIndex: 1,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction < 0 ? 500 : -500,
        zIndex: 0,
        opacity: 0,
    }),
};

const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;

    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const transition: Transition = {
    type: "tween",
    duration: 0.8,
    ease: [0.8, 0, 0.2, 1],
};

export const CTASplitImageQuote03 = () => {
    const [{ page, direction, count }, setPage] = useState({
        page: 0,
        direction: 0,
        count: 0,
    });

    const currentReview = wrap(0, reviews.length, page);

    const navigate = (direction: number) => {
        setPage({
            page: page + direction,
            direction,
            count: count + 1,
        });
    };

    return (
        <section className="grid grid-cols-1 gap-y-12 bg-primary py-16 lg:grid-cols-2 lg:items-center lg:py-0">
            <div className="flex w-full lg:justify-start lg:py-24">
                <div className="flex max-w-3xl flex-col items-start px-4 md:px-8 lg:max-w-(--breakpoint-sm) lg:pl-18">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md lg:text-display-lg">
                        Join 4,000+ startups growing with Rum Consult
                    </h2>

                    <ul className="mt-8 flex flex-col gap-4 md:gap-5 md:pl-4">
                        {["30-day free trial", "Personalized onboarding", "Access to all features"].map((feat) => (
                            <li key={feat} className="flex gap-3">
                                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-primary text-featured-icon-light-fg-brand">
                                    <svg width={15} height={13} viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037V0.390037Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>

                                <span className="pt-0.5 text-md text-tertiary md:pt-0 md:text-lg">{feat}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start md:mt-12">
                        <Button color="secondary" size="xl">
                            Learn more
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>
            </div>

            <div className="relative h-170 w-full overflow-hidden px-4 md:px-8 lg:order-first lg:h-180 lg:px-0">
                <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                    <motion.img
                        key={count}
                        custom={direction}
                        src={reviews[currentReview].image}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={transition}
                        className="size-full object-cover"
                    />
                </AnimatePresence>
                <div className="relative">
                    <div className="absolute inset-x-0 bottom-0 z-10 overflow-hidden bg-linear-to-t from-black/40 to-black/0 p-4 pt-16 md:p-8 md:pt-20 lg:pt-24">
                        <div className="flex flex-col overflow-hidden rounded-xl bg-primary/30 px-4 py-6 ring-1 ring-alpha-white/30 backdrop-blur-[10px] ring-inset md:px-5 md:pb-6">
                            <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                                <motion.q
                                    key={count}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        ...transition,
                                        delay: 0.02,
                                    }}
                                    className="text-xl font-semibold text-balance text-white md:text-display-sm"
                                >
                                    {reviews[currentReview].quote}
                                </motion.q>
                            </AnimatePresence>
                            <div className="mt-5 flex flex-col-reverse justify-between gap-4 md:mt-8 md:flex-row">
                                <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                                    <motion.p
                                        key={count}
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            ...transition,
                                            delay: 0.03,
                                        }}
                                        className="text-xl font-semibold whitespace-nowrap text-white md:text-display-xs"
                                    >
                                        {reviews[currentReview].name}
                                    </motion.p>
                                </AnimatePresence>
                                <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                                    <motion.div
                                        key={count}
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            ...transition,
                                            delay: 0.03,
                                        }}
                                        aria-hidden="true"
                                        className="hidden gap-1 md:flex"
                                    >
                                        <StarIcon className="text-fg-white" />
                                        <StarIcon className="text-fg-white" />
                                        <StarIcon className="text-fg-white" />
                                        <StarIcon className="text-fg-white" />
                                        <StarIcon className="text-fg-white" />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="mt-2 flex flex-col justify-between gap-5 md:mt-3 md:flex-row md:gap-3">
                                <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                                    <motion.div
                                        key={count}
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            ...transition,
                                            delay: 0.04,
                                        }}
                                        className="flex flex-col gap-0.5 md:gap-1"
                                    >
                                        <p className="text-lg font-semibold whitespace-nowrap text-white md:text-md">{reviews[currentReview].title}</p>
                                        <p className="text-md whitespace-nowrap text-white md:text-sm">{reviews[currentReview].company}</p>
                                    </motion.div>
                                </AnimatePresence>
                                <div className="flex gap-4 md:gap-8">
                                    <button
                                        aria-label="Previous review"
                                        onClick={() => navigate(-1)}
                                        className="group flex size-12 cursor-pointer items-center justify-center rounded-full border border-white/50 outline-focus-ring transition duration-100 ease-linear hover:border-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 md:size-14"
                                    >
                                        <ArrowLeft className="size-5 text-white transition-inherit-all group-hover:opacity-70 md:size-6" />
                                    </button>
                                    <button
                                        aria-label="Next review"
                                        onClick={() => navigate(1)}
                                        className="group flex size-12 cursor-pointer items-center justify-center rounded-full border border-white/50 outline-focus-ring transition duration-100 ease-linear hover:border-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 md:size-14"
                                    >
                                        <ArrowRight className="size-5 text-white transition-inherit-all group-hover:opacity-70 md:size-6" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
