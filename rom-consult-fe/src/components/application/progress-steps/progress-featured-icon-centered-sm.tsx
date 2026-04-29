"use client";

import { BarChartSquare02, CheckCircle, MessageChatSquare, Rocket01 } from "@untitledui/icons";
import { Progress } from "@/components/application/progress-steps/progress-steps";
import type { ProgressFeaturedIconType } from "@/components/application/progress-steps/progress-types";

const steps: ProgressFeaturedIconType[] = [
    { title: "Book a session", description: "Choose topic & time", status: "complete", icon: MessageChatSquare },
    { title: "Get matched", description: "Consultant alignment", status: "current", connector: false, icon: BarChartSquare02 },
    { title: "Live session", description: "Hands-on setup", status: "incomplete", icon: Rocket01 },
    { title: "Documentation", description: "Summary & next steps", status: "incomplete", icon: CheckCircle },
];

const stepsWithLongerDescription: ProgressFeaturedIconType[] = [
    {
        title: "Book a session",
        description: "Pick a topic, consultant tier, and time slot that matches your immediate business or technical priority.",
        status: "complete",
        icon: MessageChatSquare,
    },
    {
        title: "Get matched",
        description: "You are paired with the consultant best suited to your platform needs and desired depth.",
        status: "current",
        connector: false,
        icon: BarChartSquare02,
    },
    {
        title: "Live session",
        description: "Work 1-on-1 with screen sharing for setup, troubleshooting, implementation, and Q&A.",
        status: "incomplete",
        icon: Rocket01,
    },
    {
        title: "Documentation",
        description: "Receive a concise session summary with recommendations, deliverables, and next actions.",
        status: "incomplete",
        icon: CheckCircle,
    },
];

export const ProgressFeaturedIconCenteredSm = () => {
    return (
        <>
            <Progress.IconsWithText type="featured-icon" items={steps} size="sm" orientation="horizontal" className="max-md:hidden" />
            <Progress.IconsWithText type="featured-icon" items={stepsWithLongerDescription} size="sm" orientation="vertical" className="md:hidden" />
        </>
    );
};
