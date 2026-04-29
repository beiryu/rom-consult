import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { VerifiedTick } from "@/components/base/avatar/base-components";
import { StarIcon } from "@/components/foundations/rating-stars";

const reviews = [
    {
        id: "review-01",
        quote: "The Google Ads audit was clear and practical. Within two weeks, our CPL dropped and we finally knew where budget was leaking.",
        author: {
            name: "Sienna Hewitt",
            username: "@siennahewitt",
            imageUrl: "https://www.untitledui.com/images/avatars/sienna-hewitt?fm=webp&q=80",
        },
    },
    {
        id: "review-02",
        quote: "Our GA4 and GTM setup is finally clean. The session gave us a tracking framework our team can actually maintain.",
        author: {
            name: "Kari Rasmussen",
            username: "@itskari",
            imageUrl: "https://www.untitledui.com/images/avatars/kari-rasmussen?fm=webp&q=80",
        },
    },
    {
        id: "review-03",
        quote: "We migrated key workloads to AWS with confidence. The recommendations were prioritized, realistic, and easy to execute.",
        author: {
            name: "Amélie Laurent",
            username: "@alaurent_",
            imageUrl: "https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80",
        },
    },
    {
        id: "review-04",
        quote: "Our CRM automation now handles follow-ups without manual work. It saved hours every week and improved lead response times.",
        author: {
            name: "Aliah Lane",
            username: "@aliah_ux",
            imageUrl: "https://www.untitledui.com/images/avatars/aliah-lane?fm=webp&q=80",
        },
    },
    {
        id: "review-05",
        quote: "The SEO and content roadmap was exactly what we needed. We had a clear 90-day plan by the end of the call.",
        author: {
            name: "Eduard Franz",
            username: "@eduardfranz",
            imageUrl: "https://www.untitledui.com/images/avatars/eduard-franz?fm=webp&q=80",
        },
    },
    {
        id: "review-06",
        quote: "From email deliverability to domain setup, everything was handled step by step. Open rates improved almost immediately.",
        author: {
            name: "Lily-Rose Chedjou",
            username: "@lilyrose",
            imageUrl: "https://www.untitledui.com/images/avatars/lily-rose-chedjou?fm=webp&q=80",
        },
    },
];

export const TestimonialSocialCards02 = () => {
    return (
        <div className="flex flex-col items-center gap-16 bg-primary py-16 lg:py-24">
            <div className="flex max-w-container flex-col items-center gap-4 px-4 text-center lg:gap-5 lg:px-8">
                <span className="text-sm font-semibold tracking-wide text-brand-secondary uppercase md:text-md">Testimonials</span>
                <h1 className="text-display-sm font-semibold text-primary lg:text-display-md">Client Results</h1>
                <p className="text-lg text-tertiary lg:text-xl">Real feedback from founders and teams after 1-on-1 consulting sessions.</p>
            </div>
            <div className="grid max-w-container grid-cols-1 gap-5 px-4 lg:grid-cols-3 lg:gap-6 lg:px-8">
                {reviews.map((review) => (
                    <div key={review.id} className="flex flex-col items-start gap-8 rounded-xl bg-secondary p-6 lg:justify-between lg:p-8">
                        <div className="flex flex-col items-start gap-4">
                            <div aria-hidden="true" className="flex gap-1">
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>
                            <blockquote className="text-md font-medium text-primary">{review.quote}</blockquote>
                        </div>
                        <AvatarLabelGroup
                            border
                            size="lg"
                            src={review.author.imageUrl}
                            alt={review.author.name}
                            title={
                                <span className="relative flex items-center gap-1">
                                    {review.author.name}
                                    <VerifiedTick size="lg" />
                                </span>
                            }
                            subtitle={review.author.username}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
