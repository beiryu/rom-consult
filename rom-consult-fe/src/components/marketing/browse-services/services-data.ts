export interface ServiceHowItWorksStep {
    id: string;
    title: string;
    description: string;
}

export interface ServiceSessionMeta {
    id: string;
    label: string;
}

export interface ServiceItem {
    id: string;
    categoryId: string;
    categoryLabel: string;
    title: string;
    priceRange: string;
    features: string[];
    about: string;
    included: string[];
    sessionMeta: ServiceSessionMeta[];
    howItWorks: ServiceHowItWorksStep[];
}

type BaseServiceItem = Omit<ServiceItem, "about" | "included" | "sessionMeta" | "howItWorks">;

const defaultSessionMeta: ServiceSessionMeta[] = [
    { id: "live-video", label: "Live Video Session" },
    { id: "one-hour", label: "1 Hour" },
    { id: "expert", label: "Expert Consultant" },
];

const defaultHowItWorks: ServiceHowItWorksStep[] = [
    {
        id: "book",
        title: "Book Your Session",
        description: "Select your tier and complete payment to reserve your 1-hour slot.",
    },
    {
        id: "confirm",
        title: "Get Confirmation",
        description: "Receive your session confirmation and meeting details by email.",
    },
    {
        id: "join",
        title: "Join The Call",
        description: "Connect with your consultant at the scheduled time for the live session.",
    },
    {
        id: "results",
        title: "Get Results",
        description: "Leave with actionable recommendations tailored to your business goals.",
    },
];

const enrichService = (service: BaseServiceItem): ServiceItem => ({
    ...service,
    about: `Work with a consultant to improve your ${service.title.toLowerCase()} approach. This session focuses on practical actions you can apply right away.`,
    included: [
        "Live 1-on-1 video consultation with screen sharing",
        "Personalized strategies tailored to your business",
        "Expert guidance from certified professionals",
        "Q&A session to address your specific questions",
        "Post-session documentation and action items",
        "Recording available upon request",
    ],
    sessionMeta: defaultSessionMeta,
    howItWorks: defaultHowItWorks,
});

const baseServices: BaseServiceItem[] = [
    {
        id: "svc-1",
        categoryId: "ecommerce",
        categoryLabel: "E-commerce",
        title: "Store Architecture Review",
        priceRange: "$5-20",
        features: ["Checkout flow audit", "Catalog structure recommendations", "Performance improvement roadmap"],
    },
    {
        id: "svc-2",
        categoryId: "ecommerce",
        categoryLabel: "E-commerce",
        title: "Conversion Funnel Optimization",
        priceRange: "$5-20",
        features: ["Session recording analysis", "A/B test hypothesis pack", "Conversion KPI dashboard setup"],
    },
    {
        id: "svc-3",
        categoryId: "ecommerce",
        categoryLabel: "E-commerce",
        title: "Payment & Cart Diagnostics",
        priceRange: "$5-20",
        features: ["Abandonment reason mapping", "Payment error investigation", "Priority fix list"],
    },
    {
        id: "svc-4",
        categoryId: "crm",
        categoryLabel: "CRM",
        title: "CRM Pipeline Cleanup",
        priceRange: "$5-20",
        features: ["Stage redesign", "Lead scoring baseline", "Automation trigger cleanup"],
    },
    {
        id: "svc-5",
        categoryId: "crm",
        categoryLabel: "CRM",
        title: "Sales Workflow Automation",
        priceRange: "$5-20",
        features: ["Automation blueprint", "Opportunity routing setup", "Follow-up sequence templates"],
    },
    {
        id: "svc-6",
        categoryId: "crm",
        categoryLabel: "CRM",
        title: "Customer Retention Playbook",
        priceRange: "$5-20",
        features: ["Renewal risk signals", "Lifecycle email strategy", "Retention metrics reporting"],
    },
    {
        id: "svc-7",
        categoryId: "seo",
        categoryLabel: "SEO",
        title: "Technical SEO Deep Audit",
        priceRange: "$5-20",
        features: ["Crawlability and indexing checks", "Core Web Vitals diagnostics", "Fix backlog prioritization"],
    },
    {
        id: "svc-8",
        categoryId: "seo",
        categoryLabel: "SEO",
        title: "Content Gap Strategy",
        priceRange: "$5-20",
        features: ["Keyword clustering", "Competitor coverage analysis", "Topic roadmap creation"],
    },
    {
        id: "svc-9",
        categoryId: "seo",
        categoryLabel: "SEO",
        title: "Local SEO Optimization",
        priceRange: "$5-20",
        features: ["Profile health review", "Local citation improvement", "Location page recommendations"],
    },
    {
        id: "svc-10",
        categoryId: "analytics",
        categoryLabel: "Analytics",
        title: "GA4 & Tracking Reliability Audit",
        priceRange: "$5-20",
        features: ["Event model validation", "Tag implementation review", "Data quality monitoring setup"],
    },
    {
        id: "svc-11",
        categoryId: "analytics",
        categoryLabel: "Analytics",
        title: "Executive KPI Dashboard Setup",
        priceRange: "$5-20",
        features: ["Stakeholder metric mapping", "Dashboard architecture", "Automated weekly reporting"],
    },
    {
        id: "svc-12",
        categoryId: "analytics",
        categoryLabel: "Analytics",
        title: "Attribution Insight Session",
        priceRange: "$5-20",
        features: ["Channel contribution analysis", "Conversion path breakdown", "Budget allocation recommendations"],
    },
    {
        id: "svc-13",
        categoryId: "paid-media",
        categoryLabel: "Paid Media",
        title: "Google Ads Account Audit",
        priceRange: "$5-20",
        features: ["Campaign structure review", "Keyword intent alignment", "Budget waste reduction plan"],
    },
    {
        id: "svc-14",
        categoryId: "paid-media",
        categoryLabel: "Paid Media",
        title: "Meta Ads Creative Testing Plan",
        priceRange: "$5-20",
        features: ["Audience segmentation map", "Creative test matrix", "Performance benchmark setup"],
    },
    {
        id: "svc-15",
        categoryId: "paid-media",
        categoryLabel: "Paid Media",
        title: "Cross-Channel Budget Reallocation",
        priceRange: "$5-20",
        features: ["Channel efficiency analysis", "Scenario-based budget splits", "90-day optimization roadmap"],
    },
    {
        id: "svc-16",
        categoryId: "cloud-aws",
        categoryLabel: "AWS Cloud",
        title: "AWS Cost Optimization Sprint",
        priceRange: "$5-20",
        features: ["Resource rightsizing review", "Reserved savings recommendations", "Cost governance checklist"],
    },
    {
        id: "svc-17",
        categoryId: "cloud-aws",
        categoryLabel: "AWS Cloud",
        title: "Cloud Architecture Health Check",
        priceRange: "$5-20",
        features: ["Availability risk assessment", "Security baseline review", "Scalability improvement priorities"],
    },
    {
        id: "svc-18",
        categoryId: "cloud-aws",
        categoryLabel: "AWS Cloud",
        title: "Serverless Migration Planning",
        priceRange: "$5-20",
        features: ["Workload suitability review", "Migration timeline draft", "Operational readiness checklist"],
    },
    {
        id: "svc-19",
        categoryId: "email-marketing",
        categoryLabel: "Email Marketing",
        title: "Lifecycle Email Strategy Session",
        priceRange: "$5-20",
        features: ["Lifecycle stage mapping", "High-impact flow recommendations", "Content cadence blueprint"],
    },
    {
        id: "svc-20",
        categoryId: "email-marketing",
        categoryLabel: "Email Marketing",
        title: "Klaviyo Automation Optimization",
        priceRange: "$5-20",
        features: ["Flow logic cleanup", "Segmentation uplift opportunities", "Revenue tracking validation"],
    },
    {
        id: "svc-21",
        categoryId: "email-marketing",
        categoryLabel: "Email Marketing",
        title: "Deliverability & Domain Setup",
        priceRange: "$5-20",
        features: ["SPF, DKIM, DMARC checks", "Inbox placement diagnostics", "Sender reputation action plan"],
    },
    {
        id: "svc-22",
        categoryId: "ai-automation",
        categoryLabel: "AI Automation",
        title: "AI Workflow Discovery Workshop",
        priceRange: "$5-20",
        features: ["Use-case prioritization", "Tool stack recommendations", "Implementation quick wins"],
    },
    {
        id: "svc-23",
        categoryId: "ai-automation",
        categoryLabel: "AI Automation",
        title: "Prompt & Agent Design Review",
        priceRange: "$5-20",
        features: ["Prompt quality audit", "Guardrail design suggestions", "Evaluation checklist setup"],
    },
    {
        id: "svc-24",
        categoryId: "ai-automation",
        categoryLabel: "AI Automation",
        title: "Internal AI Assistant Rollout Plan",
        priceRange: "$5-20",
        features: ["Rollout governance model", "Knowledge source integration", "Team adoption framework"],
    },
];

export const services: ServiceItem[] = baseServices.map(enrichService);

export const getServiceById = (serviceId: string) => services.find((service) => service.id === serviceId);

export const formatPriceFromRange = (priceRange: string) => {
    const numbers = [...priceRange.matchAll(/\d+/g)].map((value) => Number.parseInt(value[0], 10));
    if (numbers.length === 0) {
        return "$99.00";
    }

    const midpoint = numbers.length > 1 ? (numbers[0] + numbers[1]) / 2 : numbers[0];
    return `$${midpoint.toFixed(2)}`;
};
