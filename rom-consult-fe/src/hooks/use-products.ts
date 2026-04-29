"use client";

import { useQuery } from "@tanstack/react-query";
import {
    fetchCategories,
    fetchProductBySlug,
    fetchProducts,
    type ProductListParams,
} from "@/api/products";

export const productKeys = {
    all: ["products"] as const,
    lists: () => [...productKeys.all, "list"] as const,
    list: (params: ProductListParams) => [...productKeys.lists(), params] as const,
    categories: () => [...productKeys.all, "categories"] as const,
    detail: (slug: string) => [...productKeys.all, "detail", slug] as const,
};

export const useProducts = (params: ProductListParams = {}) =>
    useQuery({
        queryKey: productKeys.list(params),
        queryFn: () => fetchProducts(params),
    });

export const useProductCategories = () =>
    useQuery({
        queryKey: productKeys.categories(),
        queryFn: fetchCategories,
        staleTime: 10 * 60_000,
    });

export const useProductBySlug = (slug: string) =>
    useQuery({
        queryKey: productKeys.detail(slug),
        queryFn: () => fetchProductBySlug(slug),
        enabled: Boolean(slug),
    });
