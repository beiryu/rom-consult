"use client";

import type { Key } from "react-aria-components";
import { Tabs } from "@/components/application/tabs/tabs";
import { NativeSelect } from "@/components/base/select/select-native";

export interface ServiceCategory {
    id: string;
    label: string;
    count: number;
}

interface CategorySidebarProps {
    categories: ServiceCategory[];
    activeId: string;
    onChange: (categoryId: string) => void;
}

export const CategorySidebar = ({ categories, activeId, onChange }: CategorySidebarProps) => {
    const tabItems = categories.map((category) => ({
        id: category.id,
        label: category.label,
        badge: category.count,
    }));

    return (
        <aside className="rounded-2xl border border-secondary bg-primary p-4">
            <h2 className="px-2 pb-3 text-sm font-semibold text-primary">Categories</h2>

            <NativeSelect
                size="sm"
                aria-label="Service category"
                value={activeId}
                onChange={(event) => onChange(event.target.value)}
                options={categories.map((category) => ({
                    label: `${category.label} (${category.count})`,
                    value: category.id,
                }))}
                className="w-full md:hidden"
            />

            <Tabs
                orientation="vertical"
                selectedKey={activeId}
                onSelectionChange={(key) => onChange(String(key as Key))}
                className="max-md:hidden"
            >
                <Tabs.List type="button-brand" items={tabItems} className="w-full">
                    {(tab) => <Tabs.Item {...tab} className="w-full justify-between" />}
                </Tabs.List>
            </Tabs>
        </aside>
    );
};
