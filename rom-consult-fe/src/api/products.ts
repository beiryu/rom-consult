import { apiClient } from "@/lib/api-client";
import type { ApiEnvelope, ApiPaginatedData, PaginationParams } from "@/types/api";

export type ProductCategory = {
    id: string;
    name: string;
    slug: string;
    icon: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
};

export type ProductListParams = PaginationParams;

export type SearchProductsParams = PaginationParams & {
    searchQuery: string;
    categoryId?: string;
    categorySlug?: string;
    minPrice?: number;
    maxPrice?: number;
    sortBy?: string;
};

export type ProductJsonValue = string | number | boolean | null | ProductJsonValue[] | { [key: string]: ProductJsonValue };

export type Product = {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: string;
    currency: string;
    isActive: boolean;
    categoryId: string;
    category?: ProductCategory;
    features: ProductJsonValue | null;
    included: ProductJsonValue | null;
    sessionMeta: ProductJsonValue | null;
    howItWorks: ProductJsonValue | null;
    createdAt: string;
    updatedAt: string;
};

export type ProductListResponse = ApiPaginatedData<Product>;
export type ProductCategoryListResponse = ApiPaginatedData<ProductCategory>;

export const fetchProducts = async (params: ProductListParams = {}): Promise<ProductListResponse> => {
    const response = await apiClient.get<ApiEnvelope<ProductListResponse>>("/products", { params });
    return response.data.data;
};

export const searchProducts = async (params: SearchProductsParams): Promise<ProductListResponse> => {
    const response = await apiClient.get<ApiEnvelope<ProductListResponse>>("/products/search", { params });
    return response.data.data;
};

export const fetchCategories = async (params: ProductListParams = { page: 1, limit: 100 }): Promise<ProductCategoryListResponse> => {
    const response = await apiClient.get<ApiEnvelope<ProductCategoryListResponse>>("/products/categories", { params });
    return response.data.data;
};

export const fetchProductsByCategory = async (
    categoryId: string,
    params: ProductListParams = {},
): Promise<ProductListResponse> => {
    const response = await apiClient.get<ApiEnvelope<ProductListResponse>>(`/products/categories/${categoryId}/products`, {
        params,
    });
    return response.data.data;
};

export const fetchProductBySlug = async (slug: string): Promise<Product> => {
    const response = await apiClient.get<ApiEnvelope<Product>>(`/products/slug/${slug}`);
    return response.data.data;
};

export const fetchProductById = async (id: string): Promise<Product> => {
    const response = await apiClient.get<ApiEnvelope<Product>>(`/products/${id}`);
    return response.data.data;
};
