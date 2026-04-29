"use client";

import { ArrowRight, Building02, CheckCircle, MessageChatCircle } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const steps = ["Browse 500+ consulting topics", "Book a live video session", "Get expert guidance in real time", "Implement actionable strategies"];

export const AboutWhoWeAreSplit = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <p className="text-sm font-semibold tracking-wide text-brand-secondary uppercase md:text-md">Who we are</p>
                        <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Professional business consulting platform</h2>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            Optimark Media connects entrepreneurs and businesses with expert consultants for live 1-on-1 video sessions across digital
                            marketing, cloud, and AI automation.
                        </p>

                        <div className="mt-8 flex flex-col gap-4 md:mt-10">
                            <div className="rounded-2xl bg-secondary px-5 py-4 ring-1 ring-secondary">
                                <div className="flex items-start gap-3">
                                    <FeaturedIcon icon={CheckCircle} size="md" color="brand" theme="dark" className="shrink-0" />
                                    <div>
                                        <p className="text-md font-semibold text-primary">Live consulting sessions</p>
                                        <p className="mt-1 text-sm text-tertiary">
                                            We provide personalized consultations via video call with practical, fast guidance.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl bg-primary px-5 py-4 ring-1 ring-secondary">
                                <div className="flex items-start gap-3">
                                    <FeaturedIcon icon={Building02} size="md" color="brand" theme="dark" className="shrink-0" />
                                    <div>
                                        <p className="text-md font-semibold text-primary">Company information</p>
                                        <p className="mt-1 text-sm text-tertiary">FD Global LLC, Seattle WA 98101, USA</p>
                                        <p className="text-sm text-tertiary">+1 (206) 123 4569</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <aside className="h-fit rounded-2xl bg-primary p-6 ring-1 ring-secondary md:p-8">
                        <FeaturedIcon icon={MessageChatCircle} size="md" color="brand" theme="dark" />
                        <h3 className="mt-4 text-xl font-semibold text-primary">How it works</h3>
                        <ul className="mt-5 space-y-3">
                            {steps.map((step) => (
                                <li key={step} className="flex items-start gap-2.5">
                                    <CheckCircle className="mt-0.5 size-5 shrink-0 text-brand-secondary" aria-hidden />
                                    <span className="text-md text-tertiary">{step}</span>
                                </li>
                            ))}
                        </ul>
                        <Button size="lg" href="/browse-services" iconTrailing={ArrowRight} className="mt-6 w-full justify-center">
                            Browse services
                        </Button>
                    </aside>
                </div>
            </div>
        </section>
    );
};
