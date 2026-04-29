"use client";

import { Briefcase01 } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const provider = {
    label: "Service Provider",
    name: "RomConsult LTD",
    icon: Briefcase01,
};

export const ConsultantProviderDisclosure = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="rounded-2xl bg-secondary px-4 py-5 ring-1 ring-secondary md:px-6 md:py-6">
                    <div className="mx-auto max-w-2xl">
                        <div className="flex items-center justify-center gap-4 rounded-xl bg-primary px-4 py-4 ring-1 ring-secondary md:px-6 md:py-5">
                            <div className="shrink-0">
                                <FeaturedIcon icon={provider.icon} color="gray" theme="modern" size="md" />
                            </div>
                            <div className="flex flex-col text-left">
                                <p className="text-sm font-medium uppercase tracking-wide text-quaternary">{provider.label}</p>
                                <p className="mt-0.5 text-lg font-semibold text-primary">{provider.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
