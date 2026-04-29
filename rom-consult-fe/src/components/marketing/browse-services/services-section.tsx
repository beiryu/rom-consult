"use client";

import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SearchLg } from "@untitledui/icons";
import { PaginationPageDefault } from "@/components/application/pagination/pagination";
import { Input } from "@/components/base/input/input";
import { searchProducts } from "@/api/products";
import { useProductCategories, useProducts } from "@/hooks/use-products";
import { CategorySidebar, type ServiceCategory } from "./category-sidebar";
import { mapProductToServiceCardItem } from "./product-mappers";
import { ServiceCard } from "./service-card";

const PAGE_SIZE = 9;

export const ServicesSection = () => {
    const [activeCategoryId, setActiveCategoryId] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
    const [page, setPage] = useState(1);

    useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            setDebouncedSearchQuery(searchQuery.trim());
        }, 300);

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [searchQuery]);

    const hasSearch = debouncedSearchQuery.length > 0;
    const categoryId = activeCategoryId === "all" ? undefined : activeCategoryId;
    const baseParams = useMemo(() => ({ page, limit: PAGE_SIZE, categoryId }), [categoryId, page]);

    const productsQuery = useProducts(baseParams);
    const searchQueryResult = useQuery({
        queryKey: ["products", "search", { ...baseParams, searchQuery: debouncedSearchQuery }],
        queryFn: () => searchProducts({ ...baseParams, searchQuery: debouncedSearchQuery }),
        enabled: hasSearch,
    });
    const categoriesQuery = useProductCategories();

    const activeQuery = hasSearch ? searchQueryResult : productsQuery;
    const products = activeQuery.data?.items ?? [];
    const totalItems = activeQuery.data?.metadata.totalItems ?? 0;
    const totalPages = Math.max(1, activeQuery.data?.metadata.totalPages ?? 1);

    const categories = useMemo<ServiceCategory[]>(() => {
        const categoryItems = categoriesQuery.data?.items ?? [];
        return [
            { id: "all", label: "All services", count: activeCategoryId === "all" ? totalItems : 0 },
            ...categoryItems.map((category) => ({
                id: category.id,
                label: category.name,
                count: activeCategoryId === category.id ? totalItems : 0,
            })),
        ];
    }, [activeCategoryId, categoriesQuery.data?.items, totalItems]);

    const serviceCards = useMemo(() => products.map((product) => mapProductToServiceCardItem(product)), [products]);

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
                                Browse and book expert sessions by category. Showing {products.length} of {totalItems} services.
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
                        {activeQuery.isPending ? (
                            <div className="rounded-2xl border border-secondary bg-secondary p-6 text-md text-tertiary">
                                Loading services...
                            </div>
                        ) : null}

                        {activeQuery.isError ? (
                            <div className="rounded-2xl border border-error_subtle bg-error-secondary p-6 text-md text-error-primary">
                                Could not load services right now. Please try again.
                            </div>
                        ) : null}

                        {!activeQuery.isPending && !activeQuery.isError ? (
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                                {serviceCards.map((service) => (
                                    <ServiceCard
                                        key={service.id}
                                        category={service.categoryLabel}
                                        title={service.title}
                                        priceRange={service.priceRange}
                                        features={service.features}
                                        bookHref={`/browse-services/${service.slug}`}
                                    />
                                ))}
                            </div>
                        ) : null}

                        {!activeQuery.isPending && !activeQuery.isError && serviceCards.length === 0 ? (
                            <div className="mt-6 rounded-2xl border border-secondary bg-secondary p-6 text-md text-tertiary">
                                No services found for your current filters.
                            </div>
                        ) : null}

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
