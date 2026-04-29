"use client";

import { Briefcase01, Building02 } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

const providers = [
    {
        label: "Tech Provider",
        name: "PD Cash LLC",
        icon: Building02,
    },
    {
        label: "Service Provider",
        name: "Optimark Media LTD",
        icon: Briefcase01,
    },
];

export const ConsultantProviderDisclosure = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="rounded-2xl bg-secondary px-4 py-5 ring-1 ring-secondary md:px-6 md:py-6">
                    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                        {providers.map((provider) => (
                            <li
                                key={provider.label}
                                className="flex items-center gap-4 rounded-xl bg-primary px-4 py-4 ring-1 ring-secondary md:px-5"
                            >
                                <div className="shrink-0">
                                    <FeaturedIcon icon={provider.icon} color="gray" theme="modern" size="md" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm font-medium uppercase tracking-wide text-quaternary">{provider.label}</p>
                                    <p className="mt-0.5 text-lg font-semibold text-primary">{provider.name}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
