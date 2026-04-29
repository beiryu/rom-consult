import { apiClient } from "@/lib/api-client";
import type { PaginationParams, PaginatedResponse } from "@/types/api";
import type { ServiceItem } from "@/components/marketing/browse-services/services-data";

export type Product = ServiceItem;

export type ProductCategory = {
    id: string;
    label: string;
};

export type ProductListParams = PaginationParams;

export type SearchProductsParams = PaginationParams & {
    query: string;
};

export const fetchProducts = async (params: ProductListParams = {}): Promise<PaginatedResponse<Product>> => {
    const { data } = await apiClient.get<PaginatedResponse<Product>>("/products", { params });
    return data;
};

export const searchProducts = async (params: SearchProductsParams): Promise<PaginatedResponse<Product>> => {
    const { data } = await apiClient.get<PaginatedResponse<Product>>("/products/search", { params });
    return data;
};

export const fetchCategories = async (): Promise<ProductCategory[]> => {
    const { data } = await apiClient.get<ProductCategory[]>("/products/categories");
    return data;
};

export const fetchProductsByCategory = async (
    categoryId: string,
    params: ProductListParams = {},
): Promise<PaginatedResponse<Product>> => {
    const { data } = await apiClient.get<PaginatedResponse<Product>>(`/products/categories/${categoryId}`, {
        params,
    });
    return data;
};

export const fetchProductBySlug = async (slug: string): Promise<Product> => {
    const { data } = await apiClient.get<Product>(`/products/${slug}`);
    return data;
};
