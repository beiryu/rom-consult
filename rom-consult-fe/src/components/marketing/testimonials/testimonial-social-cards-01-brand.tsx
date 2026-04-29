import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { VerifiedTick } from "@/components/base/avatar/base-components";

const reviews = [
    {
        id: "review-01",
        quote: "Their SEO and ad strategy helped us double qualified leads in just one quarter.",
        author: {
            name: "Sienna Hewitt",
            title: "Marketing Lead, BrightWave",
            imageUrl: "https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80",
        },
        company: {
            name: "Warpspeed",
            imageUrl: "https://www.untitledui.com/logos/logotype/white/warpspeed.svg",
        },
    },
    {
        id: "review-02",
        quote: "The team translated our goals into a measurable roadmap and executed faster than expected.",
        author: {
            name: "Caitlyn King",
            title: "Head of Growth, NovaCore",
            imageUrl: "https://www.untitledui.com/images/avatars/caitlyn-king?fm=webp&q=80",
        },
        company: {
            name: "Warpspeed",
            imageUrl: "https://www.untitledui.com/logos/logotype/white/odeao-labs.svg",
        },
    },
    {
        id: "review-03",
        quote: "Cloud migration used to feel risky, but they made the transition smooth and well-documented.",
        author: {
            name: "Olly Schroeder",
            title: "Operations Director, CloudPath",
            imageUrl: "https://www.untitledui.com/images/avatars/olly-schroeder?fm=webp&q=80",
        },
        company: {
            name: "Warpspeed",
            imageUrl: "https://www.untitledui.com/logos/logotype/white/nietzsche.svg",
        },
    },
    {
        id: "review-04",
        quote: "Our reporting finally makes sense. Weekly insights now drive decisions across marketing and sales.",
        author: {
            name: "Riley O'Moore",
            title: "Founder, PeakAtlas",
            imageUrl: "https://www.untitledui.com/images/avatars/riley-moore?fm=webp&q=80",
        },
        company: {
            name: "QuartzAI",
            imageUrl: "https://www.untitledui.com/logos/logotype/white/quartz-ai.svg",
        },
    },
];

export const TestimonialSocialCards01Brand = () => {
    return (
        <div className="flex flex-col items-center gap-16 bg-brand-section py-16 lg:py-24">
            <div className="flex max-w-container flex-col items-center gap-4 px-4 text-center lg:gap-5 lg:px-8">
                <h2 className="text-display-sm font-semibold text-primary_on-brand lg:text-display-md">What Clients Say</h2>
                <p className="text-lg text-tertiary_on-brand lg:text-xl">Results-driven teams trust us to accelerate growth and simplify delivery.</p>
            </div>
            <div className="grid max-w-container grid-cols-1 gap-5 px-4 lg:grid-cols-2 lg:gap-6 lg:px-8">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="flex flex-col gap-12 rounded-xl bg-brand-section_subtle p-6 shadow-xs lg:min-h-64 lg:justify-between lg:gap-0 lg:p-8"
                    >
                        <div className="flex flex-col items-start gap-3">
                            <img className="block h-8 lg:hidden" src={review.company.imageUrl} alt={review.company.name} />
                            <blockquote className="text-lg font-medium text-primary_on-brand lg:text-xl">{review.quote}</blockquote>
                        </div>
                        <div className="flex justify-between">
                            <AvatarLabelGroup
                                border
                                size="lg"
                                src={review.author.imageUrl}
                                alt={review.author.name}
                                avatarClassName="bg-primary"
                                title={
                                    <span className="relative flex items-center gap-1 text-primary_on-brand">
                                        {review.author.name}
                                        <VerifiedTick size="lg" />
                                    </span>
                                }
                                subtitle={<span className="text-tertiary_on-brand">{review.author.title}</span>}
                            />
                            <img className="hidden h-8 opacity-85 lg:block" src={review.company.imageUrl} alt={review.company.name} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
