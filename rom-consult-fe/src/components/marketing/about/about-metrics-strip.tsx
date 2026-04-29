"use client";

const metrics = [
    { value: "100+", label: "Consulting topics" },
    { value: "$5-20", label: "Per hour rate" },
    { value: "24/7", label: "Email support" },
    { value: "100%", label: "Service-based" },
];

export const AboutMetricsStrip = () => {
    return (
        <section className="bg-primary py-12 md:py-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <ul className="grid grid-cols-2 gap-4 text-center md:grid-cols-4 md:gap-6">
                    {metrics.map((item) => (
                        <li key={item.label} className="rounded-2xl bg-secondary px-4 py-5 ring-1 ring-secondary md:px-5 md:py-6">
                            <p className="text-display-xs font-semibold text-brand-secondary md:text-display-sm">{item.value}</p>
                            <p className="mt-2 text-xs font-medium uppercase tracking-wide text-quaternary md:text-sm">{item.label}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
