export interface ICategory {
    id: number;
    name: string;
    min_price: number;
    max_price: number;
    parent_category: number | null;
}

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

export interface IProduct {
    id: number;
    code: string;
    name: string;
    description: string;
    discounts: number | null;
    price: number;
    discount_price: number | null;
    is_new: boolean;
    amount: number
    category: number;
    images: [
        {
            id: number;
            image: string
        }
    ]
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


