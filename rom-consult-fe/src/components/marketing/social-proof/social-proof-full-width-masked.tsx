const logos = [
    {
        name: "Odeaolabs",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/odeao-labs.svg",
        darkModeImageUrl: "https://www.untitledui.com/logos/logotype/white/odeao-labs.svg",
    },
    {
        name: "Kintsugi",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/kintsugi.svg",
        darkModeImageUrl: "https://www.untitledui.com/logos/logotype/white/kintsugi.svg",
    },
    {
        name: "Magnolia",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/magnolia.svg",
        darkModeImageUrl: "https://www.untitledui.com/logos/logotype/white/magnolia.svg",
    },
    {
        name: "Powersurge",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/powersurge.svg",
        darkModeImageUrl: "https://www.untitledui.com/logos/logotype/white/powersurge.svg",
    },
    {
        name: "Warpspeed",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/warpspeed.svg",
        darkModeImageUrl: "https://www.untitledui.com/logos/logotype/white/warpspeed.svg",
    },
    {
        name: "Leapyear",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/leapyear.svg",
        darkModeImageUrl: "https://www.untitledui.com/logos/logotype/white/leapyear.svg",
    },
    {
        name: "Easytax",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/easy-tax.svg",
        darkModeImageUrl: "https://www.untitledui.com/logos/logotype/white/easy-tax.svg",
    },
    {
        name: "Sisyphus",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/sisyphus.svg",
        darkModeImageUrl: "https://www.untitledui.com/logos/logotype/white/sisyphus.svg",
    },
    {
        name: "Catalog",
        imageUrl: "https://www.untitledui.com/logos/logotype/color/catalog.svg",
        darkModeImageUrl: "https://www.untitledui.com/logos/logotype/white/catalog.svg",
    },
];

export const SocialProofFullWidthMasked = () => {
    return (
        <section className="overflow-hidden bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-8">
                    <p className="text-center text-md font-medium text-tertiary">Trusted by 4,000+ companies</p>
                    <div className="flex max-w-full flex-col items-center gap-y-4 mask-x-from-80%">
                        {/* Top layer of logos (visible on all viewports) */}
                        <div className="flex">
                            <div className="flex w-auto max-w-none shrink-0 animate-marquee justify-center gap-5 pl-5 motion-reduce:animate-none md:gap-6 md:pl-6">
                                {/* Light mode images (hidden in dark mode) */}
                                {logos.map((logo) => (
                                    <img key={logo.name} alt={logo.name} src={logo.imageUrl} className="h-8 opacity-85 md:h-10 dark:hidden" />
                                ))}

                                {/* Dark mode images (hidden in light mode) */}
                                {logos.map((logo) => (
                                    <img key={logo.name} alt={logo.name} src={logo.darkModeImageUrl} className="h-8 opacity-85 not-dark:hidden md:h-10" />
                                ))}
                            </div>

                            <div className="flex w-auto max-w-none shrink-0 animate-marquee justify-center gap-5 pl-5 motion-reduce:animate-none md:gap-6 md:pl-6">
                                {/* Light mode images (hidden in dark mode) */}
                                {logos.map((logo) => (
                                    <img key={logo.name} alt={logo.name} src={logo.imageUrl} className="h-8 opacity-85 md:h-10 dark:hidden" />
                                ))}

                                {/* Dark mode images (hidden in light mode) */}
                                {logos.map((logo) => (
                                    <img key={logo.name} alt={logo.name} src={logo.darkModeImageUrl} className="h-8 opacity-85 not-dark:hidden md:h-10" />
                                ))}
                            </div>
                        </div>

                        {/* Bottom layer of logos (visible on mobile only) */}
                        <div className="flex md:hidden">
                            <div className="flex w-auto max-w-none shrink-0 animate-marquee justify-center gap-5 pl-5 delay-[-3s] direction-reverse motion-reduce:-translate-x-1/2 motion-reduce:animate-none md:gap-6 md:pl-6">
                                {/* Light mode images (hidden in dark mode) */}
                                {logos.map((logo) => (
                                    <img key={logo.name} alt={logo.name} src={logo.imageUrl} className="h-8 opacity-85 md:h-10 dark:hidden" />
                                ))}

                                {/* Dark mode images (hidden in light mode) */}
                                {logos.map((logo) => (
                                    <img key={logo.name} alt={logo.name} src={logo.darkModeImageUrl} className="h-8 opacity-85 not-dark:hidden md:h-10" />
                                ))}
                            </div>

                            <div className="flex w-auto max-w-none shrink-0 animate-marquee justify-center gap-5 pl-5 delay-[-3s] direction-reverse motion-reduce:-translate-x-1/2 motion-reduce:animate-none md:gap-6 md:pl-6">
                                {/* Light mode images (hidden in dark mode) */}
                                {logos.map((logo) => (
                                    <img key={logo.name} alt={logo.name} src={logo.imageUrl} className="h-8 opacity-85 md:h-10 dark:hidden" />
                                ))}

                                {/* Dark mode images (hidden in light mode) */}
                                {logos.map((logo) => (
                                    <img key={logo.name} alt={logo.name} src={logo.darkModeImageUrl} className="h-8 opacity-85 not-dark:hidden md:h-10" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
