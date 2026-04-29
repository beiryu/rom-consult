"use client";

interface DashboardHeroHeaderProps {
    title: string;
    subtitle: string;
}

export const DashboardHeroHeader = ({ title, subtitle }: DashboardHeroHeaderProps) => {
    return (
        <header className="rounded-2xl bg-brand-solid px-6 py-8 md:px-8">
            <div className="space-y-1">
                <h1 className="text-display-xs font-semibold text-primary_on-brand md:text-display-sm">{title}</h1>
                <p className="text-md text-tertiary_on-brand">{subtitle}</p>
            </div>
        </header>
    );
};
