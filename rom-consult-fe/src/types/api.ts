export type ApiEnvelope<T> = {
    statusCode: number;
    message: string;
    timestamp: string;
    data: T;
};

export type ApiPaginationMetadata = {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
};

export type ApiPaginatedData<T> = {
    items: T[];
    metadata: ApiPaginationMetadata;
};

export type PaginationParams = {
    page?: number;
    limit?: number;
};
