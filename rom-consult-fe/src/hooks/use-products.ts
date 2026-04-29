"use client";

import { useQuery } from "@tanstack/react-query";
import {
    fetchCategories,
    fetchProductById,
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
    detailById: (id: string) => [...productKeys.all, "detailById", id] as const,
};

export const useProducts = (params: ProductListParams = {}) =>
    useQuery({
        queryKey: productKeys.list(params),
        queryFn: () => fetchProducts(params),
    });

export const useProductCategories = () =>
    useQuery({
        queryKey: productKeys.categories(),
        queryFn: () => fetchCategories({ page: 1, limit: 100 }),
        staleTime: 10 * 60_000,
    });

export const useProductBySlug = (slug: string) =>
    useQuery({
        queryKey: productKeys.detail(slug),
        queryFn: () => fetchProductBySlug(slug),
        enabled: Boolean(slug),
    });

export const useProductById = (id: string) =>
    useQuery({
        queryKey: productKeys.detailById(id),
        queryFn: () => fetchProductById(id),
        enabled: Boolean(id),
    });
