"use client";

import type { ReactNode } from "react";
import { Clock, CurrencyDollarCircle } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import type { BadgeColors } from "@/components/base/badges/badge-types";
import { Badge, BadgeWithDot, BadgeWithFlag } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { RatingBadge } from "@/components/foundations/rating-badge";
import { AngelList, Dribbble, Facebook, GitHub, Layers, LinkedIn, X } from "@/components/foundations/social-icons";
import { AboutBenefitsGrid } from "@/components/marketing/about/about-benefits-grid";
import { AboutFeaturesIconCards01 } from "@/components/marketing/about/about-features-icon-cards-01";
import { AboutMetricsStrip } from "@/components/marketing/about/about-metrics-strip";
import { AboutWhoWeAreSplit } from "@/components/marketing/about/about-who-we-are-split";
import { CTACardHorizontal } from "@/components/marketing/cta/cta-card-horizontal";

const footerSocials = [
    { label: "X", icon: X, href: "https://x.com/" },
    { label: "LinkedIn", icon: LinkedIn, href: "https://www.linkedin.com/" },
    { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
    { label: "GitHub", icon: GitHub, href: "https://github.com/" },
    { label: "AngelList", icon: AngelList, href: "https://angel.co/" },
    { label: "Dribbble", icon: Dribbble, href: "https://dribbble.com/" },
    { label: "Layers", icon: Layers, href: "https://layers.com/" },
];

const footerNavList = [
    {
        label: "Product",
        items: [
            { label: "Overview", href: "#" },
            { label: "Features", href: "#" },
            {
                label: "Solutions",
                href: "#",
                badge: (
                    <Badge color="gray" type="modern" size="sm" className="ml-1">
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
        label: "Company",
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
        label: "Resources",
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
        label: "Social",
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
        label: "Legal",
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

const HeaderCentered = () => {
    return (
        <section className="relative overflow-hidden bg-utility-brand-50_alt py-16 md:py-24">
            <div className="relative mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
                    <BadgeGroup className="hidden md:flex" size="lg" theme="light" color="brand" addonText="About us">
                        Professional Consulting Platform
                    </BadgeGroup>
                    <BadgeGroup className="md:hidden" size="md" theme="light" color="brand" addonText="About us">
                        Expert 1-on-1 Consulting
                    </BadgeGroup>

                    <h1 className="mt-4 text-display-md font-medium text-brand-primary md:text-display-lg lg:text-display-xl">
                        Strategic guidance for digital growth and technical execution
                    </h1>
                    <p className="mt-4 max-w-120 text-lg text-balance text-brand-secondary md:mt-6 md:text-xl">
                        Rom Consult helps entrepreneurs and teams solve marketing, cloud, analytics, and automation challenges through live 1-on-1 expert
                        sessions.
                    </p>
                </div>
            </div>
        </section>
    );
};

interface JobCardSimpleProps {
    title: string;
    description: string;
    href: string;
    location: string;
    type: string;
    badgeText?: string;
    badgeColor: BadgeColors;
}

interface JobCard02Props extends Omit<JobCardSimpleProps, "location"> {
    salary: string;
    location: { city: string; country: string; countryCode: string };
}

const JobCard02 = (props: JobCard02Props) => {
    return (
        <a
            href={props.href}
            className="flex flex-col rounded-2xl bg-primary p-6 ring-1 ring-secondary outline-focus-ring ring-inset focus-visible:outline-2 focus-visible:outline-offset-2"
        >
            <div className="flex flex-col items-start gap-2 md:flex-row">
                <h3 className="text-md font-semibold text-primary">{props.title}</h3>

                <div className="flex flex-1 gap-2 md:flex-row-reverse md:justify-between">
                    <BadgeWithFlag flag="AU" color="gray" size="md" type="modern">
                        <span>
                            {props.location.city}, <span className="hidden md:inline-flex">{props.location.country}</span>
                            <span className="inline-flex md:hidden">{props.location.countryCode}</span>
                        </span>
                    </BadgeWithFlag>

                    <BadgeWithDot color={props.badgeColor} size="md" type="modern">
                        {props.badgeText}
                    </BadgeWithDot>
                </div>
            </div>

            <p className="mt-2 text-md text-tertiary">{props.description}</p>

            <div className="mt-5 flex gap-4">
                <div className="flex items-center gap-1.5">
                    <Clock size={20} className="text-fg-quaternary" />
                    <span className="text-sm font-medium text-tertiary">{props.type}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <CurrencyDollarCircle size={20} className="text-fg-quaternary" />
                    <span className="text-sm font-medium text-tertiary">{props.salary}</span>
                </div>
            </div>
        </a>
    );
};

const jobsByCategory: { category: string; description: string; jobs: JobCard02Props[] }[] = [
    {
        category: "Design",
        description: "Open positions in our design team.",
        jobs: [
            {
                title: "Product Designer",
                description: "We're looking for a mid-level product designer to join our team.",
                href: "#",
                badgeColor: "blue",
                badgeText: "Design",
                salary: "80k - 100k",
                type: "Full-time",
                location: { city: "Melbourne", country: "Australia", countryCode: "AU" },
            },
            {
                title: "UX Designer",
                description: "We're looking for a mid-level UX designer to join our team.",
                href: "#",
                badgeColor: "blue",
                badgeText: "Design",
                salary: "80k - 100k",
                type: "Full-time",
                location: { city: "Melbourne", country: "Australia", countryCode: "AU" },
            },
        ],
    },
    {
        category: "Software Development",
        description: "Open positions in our software team.",
        jobs: [
            {
                title: "Engineering Manager",
                description: "We're looking for an experienced engineering manager to join our team.",
                href: "#",
                badgeColor: "pink",
                badgeText: "Software",
                salary: "80k - 100k",
                type: "Full-time",
                location: { city: "Melbourne", country: "Australia", countryCode: "AU" },
            },
            {
                title: "Frontend Developer",
                description: "We're looking for an experienced frontend developer to join our team.",
                href: "#",
                badgeColor: "pink",
                badgeText: "Software",
                salary: "80k - 100k",
                type: "Full-time",
                location: { city: "Melbourne", country: "Australia", countryCode: "AU" },
            },
            {
                title: "Backend Developer",
                description: "We're looking for an experienced backend developer to join our team.",
                href: "#",
                badgeColor: "pink",
                badgeText: "Software",
                salary: "80k - 100k",
                type: "Full-time",
                location: { city: "Melbourne", country: "Australia", countryCode: "AU" },
            },
        ],
    },
    {
        category: "Customer Success",
        description: "Open positions in our CX team.",
        jobs: [
            {
                title: "Customer Success Manager",
                description: "We're looking for a mid-level product designer to join our team.",
                href: "#",
                badgeColor: "success",
                badgeText: "Customer Success",
                salary: "80k - 100k",
                type: "Full-time",
                location: { city: "Melbourne", country: "Australia", countryCode: "AU" },
            },
        ],
    },
];

const CareersCard03 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <Badge className="hidden md:flex" size="lg" color="brand" type="pill-color">
                        Careers
                    </Badge>
                    <Badge className="md:hidden" size="md" color="brand" type="pill-color">
                        Careers
                    </Badge>

                    <h2 className="mt-4 text-display-sm font-semibold text-primary md:text-display-md">We're looking for talented people</h2>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">We're a 100% remote team spread all across the world. Join us!</p>
                </div>
                <div className="mt-12 h-60 w-full md:mt-16 md:h-140">
                    <img src="https://www.untitledui.com/marketing/woman-artist-2.webp" alt="Woman artist" className="size-full object-cover" />
                </div>
                <div className="mx-auto mt-12 max-w-3xl md:mt-16">
                    <ul className="flex flex-col gap-8 md:gap-16">
                        {jobsByCategory.map(({ category, jobs }) => (
                            <li key={category}>
                                <h2 className="text-lg font-semibold text-primary md:text-xl">{category}</h2>
                                <ul className="mt-5 flex flex-col gap-4 md:gap-6">
                                    {jobs.map((job) => (
                                        <li key={job.title}>
                                            <JobCard02 {...job} />
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const FooterLarge02 = () => {
    return (
        <footer className="dark-mode">
            <div className="bg-primary py-12 md:pt-16">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col gap-12 md:gap-16 xl:flex-row">
                        <div className="flex flex-col items-start gap-6 md:w-80 md:gap-6">
                            <UntitledLogo className="h-7 w-min shrink-0" />
                            <p className="text-md text-tertiary">Design amazing digital experiences that create more happy in the world.</p>
                            <RatingBadge className="origin-top-left scale-[0.78]" />
                        </div>
                        <nav className="flex-1">
                            <ul className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-5">
                                {footerNavList.slice(0, 5).map((category) => (
                                    <li key={category.label}>
                                        <h4 className="text-sm font-semibold text-quaternary">{category.label}</h4>
                                        <ul className="mt-4 flex flex-col gap-3">
                                            {category.items.map((item) => (
                                                <li key={item.label} className="flex">
                                                    <Button color="link-gray" size="md" href={item.href} iconTrailing={item.badge} className="max-h-5 gap-1">
                                                        {item.label}
                                                    </Button>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-secondary_alt py-10 md:py-12">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="flex flex-col-reverse justify-between gap-6 md:flex-row">
                        <p className="text-sm text-quaternary">© 2077 Untitled UI. All rights reserved.</p>
                        <ul className="flex gap-6">
                            {footerSocials.map(({ label, icon: Icon, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        <Icon className="size-5" aria-label={label} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const AboutPage01 = () => {
    return (
        <div className="bg-primary">
            <HeaderCentered />
            <AboutMetricsStrip />
            <AboutWhoWeAreSplit />
            <AboutFeaturesIconCards01 />
            <AboutBenefitsGrid />

            <CTACardHorizontal />
        </div>
    );
};

export default AboutPage01;
