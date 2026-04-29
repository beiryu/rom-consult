"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "@untitledui/icons";
import type { Transition } from "motion/react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/base/buttons/button";
import { StarIcon } from "@/components/foundations/rating-stars";

const reviews = [
    {
        quote: "The Google Ads session was incredible. Our CPC dropped within the first week after applying the recommendations.",
        name: "Sarah M.",
        title: "E-commerce owner",
        company: "Optimark client",
        rating: 5,
        image: "https://www.untitledui.com/images/portraits/alisa-hester",
    },
    {
        quote: "GA4 felt overwhelming before the call. Now our team can actually track what is working across campaigns.",
        name: "David K.",
        title: "Marketing manager",
        company: "Optimark client",
        rating: 5,
        image: "https://www.untitledui.com/marketing/podcast-girl.webp",
    },
    {
        quote: "AWS setup was complex until we worked through EC2 and CloudFront together. Worth every minute.",
        name: "James L.",
        title: "SaaS founder",
        company: "Optimark client",
        rating: 5,
        image: "https://www.untitledui.com/marketing/girl.webp",
    },
];

const transition: Transition = {
    type: "tween",
    duration: 0.8,
    ease: [0.8, 0, 0.2, 1],
};

export const CTASplitImageQuote02 = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    return (
        <section id="contact" className="bg-primary py-16 lg:py-24">
            <div className="mx-auto grid w-full max-w-container grid-cols-1 gap-x-16 gap-y-12 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
                <div className="flex max-w-3xl flex-col items-start">
                    <h2 className="text-display-sm font-semibold text-primary md:text-display-md lg:text-display-lg">
                        Live expert consulting starting at $5/hour
                    </h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        Book 1-on-1 support across digital marketing, cloud infrastructure, analytics, and AI automation with actionable follow-up docs.
                    </p>

                    <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start md:mt-12">
                        <Button color="secondary" size="xl" href="#contact">
                            Book a session
                        </Button>
                        <Button size="xl" href="#about">
                            Learn more
                        </Button>
                    </div>
                </div>

                <div className="relative h-170 w-full overflow-hidden lg:h-180">
                    <AnimatePresence initial={false} mode="popLayout">
                        <motion.img
                            key={currentReviewIndex}
                            src={reviews[currentReviewIndex].image}
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                zIndex: 1,
                                opacity: 1,
                            }}
                            exit={{
                                zIndex: 0,
                                opacity: 0,
                            }}
                            transition={transition}
                            className="size-full object-cover"
                        />
                    </AnimatePresence>
                    <div className="relative">
                        <div className="absolute inset-x-0 bottom-0 flex h-110 items-end overflow-hidden bg-linear-to-t from-black/40 to-black/0 pt-16 md:pt-20 lg:pt-24"></div>
                        <AnimatePresence initial={false} mode="popLayout">
                            <motion.div
                                key={currentReviewIndex}
                                initial={{
                                    y: 180,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: 0,
                                    zIndex: 1,
                                    opacity: 1,
                                }}
                                exit={{
                                    y: 180,
                                    zIndex: 0,
                                    opacity: 0,
                                }}
                                transition={transition}
                                className="absolute inset-x-0 bottom-0 flex flex-col border-t border-alpha-white/30 bg-primary/30 px-5 pt-6 pb-8 backdrop-blur-[10px] md:p-8"
                            >
                                <q className="text-xl font-semibold text-white md:text-display-sm">{reviews[currentReviewIndex].quote}</q>

                                <div className="mt-5 flex flex-col-reverse justify-between gap-4 md:mt-8 md:flex-row">
                                    <p className="text-xl font-semibold whitespace-nowrap text-white md:text-display-xs">{reviews[currentReviewIndex].name}</p>
                                    <div aria-hidden="true" className="hidden gap-1 md:flex">
                                        <StarIcon className="text-fg-white" />
                                        <StarIcon className="text-fg-white" />
                                        <StarIcon className="text-fg-white" />
                                        <StarIcon className="text-fg-white" />
                                        <StarIcon className="text-fg-white" />
                                    </div>
                                </div>

                                <div className="mt-2 flex flex-col justify-between gap-4 md:mt-3 md:flex-row md:gap-3">
                                    <div className="flex flex-col md:gap-1">
                                        <p className="text-lg font-semibold text-white md:text-md">{reviews[currentReviewIndex].company}</p>
                                        <p className="text-md font-medium text-white md:text-sm">{reviews[currentReviewIndex].title}</p>
                                    </div>
                                    <div className="flex gap-4 md:gap-8">
                                        <button
                                            aria-label="Previous review"
                                            onClick={() => setCurrentReviewIndex(currentReviewIndex === 0 ? reviews.length - 1 : currentReviewIndex - 1)}
                                            className="group flex size-12 cursor-pointer items-center justify-center rounded-full ring-1 ring-white/50 outline-focus-ring transition duration-100 ease-linear ring-inset hover:ring-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 md:size-14"
                                        >
                                            <ArrowLeft className="size-5 text-white transition-inherit-all group-hover:opacity-70 md:size-6" />
                                        </button>
                                        <button
                                            aria-label="Next review"
                                            onClick={() => setCurrentReviewIndex(currentReviewIndex === reviews.length - 1 ? 0 : currentReviewIndex + 1)}
                                            className="group flex size-12 cursor-pointer items-center justify-center rounded-full ring-1 ring-white/50 outline-focus-ring transition duration-100 ease-linear ring-inset hover:ring-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 md:size-14"
                                        >
                                            <ArrowRight className="size-5 text-white transition-inherit-all group-hover:opacity-70 md:size-6" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};
