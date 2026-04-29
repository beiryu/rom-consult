import { Button } from "@/components/base/buttons/button";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Facebook, LinkedIn, X } from "@/components/foundations/social-icons";

const footerNavList = [
    {
        label: "Company",
        items: [
            { label: "About", href: "#" },
            { label: "Team", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Contact", href: "#" },
        ],
    },
    {
        label: "Services",
        items: [
            { label: "SEO Optimization", href: "#" },
            { label: "Google Ads", href: "#" },
            { label: "Cloud Migration", href: "#" },
            { label: "Analytics", href: "#" },
        ],
    },
    {
        label: "Resources",
        items: [
            { label: "Blog", href: "#" },
            { label: "Case Studies", href: "#" },
            { label: "FAQ", href: "#" },
            { label: "Support", href: "#" },
        ],
    },
    {
        label: "Legal",
        items: [
            {
                label: "Terms",
                href: "#",
            },
            {
                label: "Privacy",
                href: "#",
            },
            { label: "Cookies", href: "#" },
            { label: "GDPR", href: "#" },
        ],
    },
];
const footerSocials = [
    {
        label: "X",
        icon: X,
        href: "https://x.com/",
    },
    {
        label: "LinkedIn",
        icon: LinkedIn,
        href: "https://www.linkedin.com/",
    },
    {
        label: "Facebook",
        icon: Facebook,
        href: "https://www.facebook.com/",
    },
    {
        label: "Instagram",
        icon: X,
        href: "https://instagram.com/",
    },
];

export const FooterLarge10 = () => {
    return (
        <footer className="bg-brand-section py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-between border-b border-secondary pb-8 md:pb-16 lg:flex-row">
                    <div className="max-w-3xl">
                        <h2 className="text-display-xs font-semibold text-primary_on-brand md:text-display-sm">Stay in the loop</h2>
                        <p className="mt-2 text-md text-tertiary_on-brand md:mt-4 md:text-xl">
                            Get monthly insights on digital growth, cloud strategy, and analytics.
                        </p>
                    </div>

                    <div className="mt-8 flex w-full max-w-md gap-3 self-stretch sm:self-start lg:mt-0">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="h-12 flex-1 rounded-xl border border-secondary bg-primary px-4 text-md text-primary placeholder:text-placeholder"
                        />
                        <Button size="xl">Subscribe</Button>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-12 md:mt-16 md:gap-16 xl:flex-row">
                    <div className="flex flex-col gap-6 md:w-80 md:gap-8">
                        <UntitledLogo className="h-7 w-min shrink-0" />
                        <p className="text-md text-tertiary_on-brand">Digital marketing and cloud consulting for ambitious companies.</p>
                    </div>
                    <nav className="flex-1">
                        <ul className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-4">
                            {footerNavList.map((category) => (
                                <li key={category.label}>
                                    <h4 className="text-sm font-semibold text-quaternary_on-brand">{category.label}</h4>
                                    <ul className="mt-4 flex flex-col gap-3">
                                        {category.items.map((item) => (
                                            <li key={item.label} className="flex">
                                                <Button color="link-gray" size="md" href={item.href} className="max-h-5 gap-1 text-tertiary_on-brand">
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

                <div className="mt-12 flex flex-col-reverse justify-between gap-6 border-t border-secondary pt-8 md:mt-16 md:flex-row">
                    <p className="text-sm text-quaternary_on-brand">© 2026 Rum Consult. All rights reserved.</p>
                    <ul className="flex gap-4">
                        {footerSocials.map(({ label, icon: Icon, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex rounded-xs text-fg-quaternary outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    <Icon className="size-5" aria-label={label} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};
