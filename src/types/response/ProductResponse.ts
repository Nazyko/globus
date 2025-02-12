import { IProduct, ICategory } from "../interface/IProduct";


export interface CategoryListResponse {
    success: boolean;
    data: {
        categories: ICategory[];
    };
    errMessage: string | null;
    errorCode: string | null;
}

export interface SingleCategoryResponse {
    success: boolean;
    errMessage: string | null;
    errorCode: string | null;
    data: {
        categories: ICategory
    }
}

export interface AllProductsResponse {
    success: boolean;
    errMessage: string | null;
    errorCode: string | null;
    data: {
        items: IProduct[]
    }
    total_records: number;
    next: string | null;
    previous: string | null;
}

export interface SearchResponse {
    success: boolean;
    errMessage: string | null;
    errorCode: string | null;
    data: {
        items: IProduct[]
    }
    total_records: number;
    next: string | null;
    previous: string | null;
}


export interface getSingleProductResponse {
    success: boolean;
    errMessage: string | null;
    errorCode: string | null;
    data: {
        items: IProduct
    }
}