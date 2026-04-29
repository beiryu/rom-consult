import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { VerifiedTick } from "@/components/base/avatar/base-components";
import { cx } from "@/utils/cx";

const reviews = [
    [
        {
            id: "c0-r0",
            quote: "RomConsult helped us tighten our financial plan before a funding round—clear, direct, and focused on what investors actually ask for.",
            author: {
                name: "Founder, B2B SaaS",
                title: "Series A stage, EU",
                imageUrl: "https://www.untitledui.com/images/avatars/nikolas-gibbons?fm=webp&q=80",
            },
            company: {
                name: "Technology",
                imageUrl: "https://www.untitledui.com/logos/logotype/dark/powersurge.svg",
            },
        },
        {
            id: "c0-r1",
            quote: "We used their support for market entry and entity setup. Having one advisory thread across strategy and operations saved us weeks.",
            author: {
                name: "COO, industrial SME",
                title: "Manufacturing, France",
                imageUrl: "https://www.untitledui.com/images/avatars/marco-kelly?fm=webp&q=80",
            },
            company: {
                name: "Operations",
                imageUrl: "https://www.untitledui.com/logos/logotype/dark/railspeed.svg",
            },
        },
        {
            id: "c0-r2",
            quote: "Practical operational improvements—not just slides. Our leadership team finally had a shared view of priorities and cash.",
            author: {
                name: "Managing director",
                title: "Services company",
                imageUrl: "https://www.untitledui.com/images/avatars/zaid-schwartz?fm=webp&q=80",
            },
            company: {
                name: "Professional services",
                imageUrl: "https://www.untitledui.com/logos/logotype/dark/wildcrafted.svg",
            },
        },
    ],
    [
        {
            id: "c1-r0",
            quote: "RomConsult's blend of strategic and financial advice is what we needed while scaling headcount and geographies.",
            author: {
                name: "CEO, health tech",
                title: "Startup, Paris",
                imageUrl: "https://www.untitledui.com/images/avatars/ammar-foley?fm=webp&q=80",
            },
            company: {
                name: "Health",
                imageUrl: "https://www.untitledui.com/logos/logotype/dark/goodwell.svg",
            },
        },
        {
            id: "c1-r1",
            quote: "IP and commercial structure were new to us. They walked us through trademarks and agreements without drowning us in jargon.",
            author: {
                name: "Product lead",
                title: "Consumer brand",
                imageUrl: "https://www.untitledui.com/images/avatars/florence-shaw?fm=webp&q=80",
            },
            company: {
                name: "Retail",
                imageUrl: "https://www.untitledui.com/logos/logotype/dark/quixotic.svg",
            },
        },
        {
            id: "c1-r2",
            quote: "Responsive team. When a board meeting moved up, they adjusted and delivered the analysis we needed on time.",
            author: {
                name: "CFO",
                title: "Growth-stage company",
                imageUrl: "https://www.untitledui.com/images/avatars/owen-garcia?fm=webp&q=80",
            },
            company: {
                name: "Finance",
                imageUrl: "https://www.untitledui.com/logos/logotype/dark/solaris-energy.svg",
            },
        },
    ],
    [
        {
            id: "c2-r0",
            quote: "From company formation to first hires in France, RomConsult gave us a single point of contact for questions big and small.",
            author: {
                name: "International expansion lead",
                title: "US parent, EU subsidiary",
                imageUrl: "https://www.untitledui.com/images/avatars/mathilde-lewis?fm=webp&q=80",
            },
            company: {
                name: "Expansion",
                imageUrl: "https://www.untitledui.com/logos/logotype/dark/stacked-lab.svg",
            },
        },
        {
            id: "c2-r1",
            quote: "We valued the honesty about what could wait and what could not. That judgment is rare in consulting.",
            author: {
                name: "Board member",
                title: "Family-owned SME",
                imageUrl: "https://www.untitledui.com/images/avatars/stefan-sears?fm=webp&q=80",
            },
            company: {
                name: "Governance",
                imageUrl: "https://www.untitledui.com/logos/logotype/dark/magnolia.svg",
            },
        },
        {
            id: "c2-r2",
            quote: "Budget and liquidity work freed our founders to focus on product again. The engagement paid for itself in avoided mistakes.",
            author: {
                name: "Finance manager",
                title: "Deep tech startup",
                imageUrl: "https://www.untitledui.com/images/avatars/harriet-rojas?fm=webp&q=80",
            },
            company: {
                name: "R&D",
                imageUrl: "https://www.untitledui.com/logos/logotype/dark/ikigai-labs.svg",
            },
        },
    ],
];

export const TestimonialSocialCards03Brand = () => {
    return (
        <div className="flex flex-col items-center gap-16 bg-primary py-16 lg:py-24">
            <div className="flex max-w-container flex-col items-center gap-4 px-4 text-center lg:gap-5 lg:px-8">
                <h1 className="text-display-sm font-semibold text-primary lg:text-display-md">Client perspectives</h1>
                <p className="text-lg text-tertiary lg:text-xl">
                    Representative feedback aligned with RomConsult’s focus on startups, SMEs, and hands-on strategic and financial support.
                </p>
            </div>
            <div className="grid max-w-container grid-cols-1 gap-5 mask-b-from-[calc(100%-340px)] px-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:px-8">
                {reviews.map((reviewGroup, index) => (
                    <div key={index} className={cx("flex flex-col gap-5 lg:gap-8", index === 0 && "lg:py-8", index === 2 && "lg:pt-10")}>
                        {reviewGroup.map((review) => (
                            <div key={review.id} className="flex flex-col gap-8 rounded-xl bg-secondary p-6 shadow-xs lg:justify-between lg:gap-12 lg:p-8">
                                <div className="flex flex-col items-start gap-3">
                                    <blockquote className="text-md text-tertiary">{review.quote}</blockquote>
                                </div>
                                <AvatarLabelGroup
                                    size="lg"
                                    border={false}
                                    src={review.author.imageUrl}
                                    alt={review.author.name}
                                    title={
                                        <span className="relative flex items-center gap-1 text-primary">
                                            {review.author.name}
                                            <VerifiedTick size="lg" />
                                        </span>
                                    }
                                    subtitle={<span className="text-tertiary">{review.author.title}</span>}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
