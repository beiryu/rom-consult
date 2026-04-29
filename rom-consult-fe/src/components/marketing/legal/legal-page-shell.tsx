"use client";

import type { ReactNode } from "react";

interface LegalPageShellProps {
    title: string;
    description: string;
    lastUpdated: string;
    children: ReactNode;
}

export const LegalPageShell = ({ title, description, lastUpdated, children }: LegalPageShellProps) => {
    return (
        <div className="bg-primary">
            <section className="bg-primary py-16 md:py-24">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Current as of {lastUpdated}</span>
                        <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">{title}</h1>
                        <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">{description}</p>
                    </div>
                </div>
            </section>

            <section className="bg-primary py-16 pt-0 md:py-24 md:pt-0">
                <div className="mx-auto max-w-container px-4 md:px-8">
                    <article className="mx-auto prose prose-headings:text-primary prose-p:text-tertiary prose-li:text-tertiary prose-strong:text-primary md:prose-lg md:max-w-180">
                        {children}
                    </article>
                </div>
            </section>
        </div>
    );
};
