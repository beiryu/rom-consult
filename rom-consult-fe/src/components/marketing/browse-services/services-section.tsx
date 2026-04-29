"use client";

import { useMemo, useState } from "react";
import { SearchLg } from "@untitledui/icons";
import { PaginationPageDefault } from "@/components/application/pagination/pagination";
import { Input } from "@/components/base/input/input";
import { services } from "./services-data";
import { CategorySidebar, type ServiceCategory } from "./category-sidebar";
import { ServiceCard } from "./service-card";

const PAGE_SIZE = 9;

export const ServicesSection = () => {
    const [activeCategoryId, setActiveCategoryId] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [page, setPage] = useState(1);

    const categories = useMemo<ServiceCategory[]>(() => {
        const grouped = services.reduce<Record<string, ServiceCategory>>((acc, service) => {
            if (!acc[service.categoryId]) {
                acc[service.categoryId] = {
                    id: service.categoryId,
                    label: service.categoryLabel,
                    count: 0,
                };
            }
            acc[service.categoryId].count += 1;
            return acc;
        }, {});

        return [{ id: "all", label: "All services", count: services.length }, ...Object.values(grouped)];
    }, []);

    const filteredServices = useMemo(() => {
        if (activeCategoryId === "all") {
            return services;
        }
        return services.filter((service) => service.categoryId === activeCategoryId);
    }, [activeCategoryId]);

    const searchedServices = useMemo(() => {
        const normalizedQuery = searchQuery.trim().toLowerCase();
        if (!normalizedQuery) {
            return filteredServices;
        }

        return filteredServices.filter((service) => {
            const inTitle = service.title.toLowerCase().includes(normalizedQuery);
            const inCategory = service.categoryLabel.toLowerCase().includes(normalizedQuery);
            const inFeatures = service.features.some((feature) => feature.toLowerCase().includes(normalizedQuery));
            return inTitle || inCategory || inFeatures;
        });
    }, [filteredServices, searchQuery]);

    const totalPages = Math.max(1, Math.ceil(searchedServices.length / PAGE_SIZE));

    const visibleServices = useMemo(() => {
        const start = (page - 1) * PAGE_SIZE;
        return searchedServices.slice(start, start + PAGE_SIZE);
    }, [searchedServices, page]);

    const handleCategoryChange = (categoryId: string) => {
        setActiveCategoryId(categoryId);
        setPage(1);
    };

    const handleSearchChange = (value: string) => {
        setSearchQuery(value);
        setPage(1);
    };

    const handlePageChange = (nextPage: number) => {
        setPage(nextPage);
    };

    return (
        <section className="bg-primary py-12 md:py-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mb-8 border-b border-secondary pb-5 md:pb-6">
                    <div className="flex flex-col gap-5 md:gap-6 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                            <h2 className="text-xl font-semibold text-primary md:text-display-xs">Consulting services</h2>
                            <p className="mt-1 text-md text-tertiary">
                                Browse and book expert sessions by category. Showing {searchedServices.length} of {services.length} services.
                            </p>
                        </div>

                        <Input
                            size="md"
                            type="search"
                            aria-label="Search services"
                            placeholder="Search"
                            icon={SearchLg}
                            shortcut
                            value={searchQuery}
                            onChange={(value) => handleSearchChange(value)}
                            className="w-full lg:max-w-67"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-8 lg:flex-row">
                    <div className="order-2 lg:order-1 lg:w-60 lg:shrink-0">
                        <CategorySidebar categories={categories} activeId={activeCategoryId} onChange={handleCategoryChange} />
                    </div>

                    <div className="order-1 flex-1 lg:order-2">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {visibleServices.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    category={service.categoryLabel}
                                    title={service.title}
                                    priceRange={service.priceRange}
                                    features={service.features}
                                    bookHref={`/browse-services/${service.id}`}
                                />
                            ))}
                        </div>

                        <PaginationPageDefault
                            className="mt-8"
                            page={page}
                            total={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
