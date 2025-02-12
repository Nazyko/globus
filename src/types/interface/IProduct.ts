export interface IProduct {
    id: number;
    code: string;
    name: string;
    description: string;
    discounts: number | null;
    price: number;
    discount_price: number | null;
    is_new: boolean;
    amount: number;
    category: number;
    images: [
        {
            id: number;
            image: string
        }
    ]
}

export interface ICategory {
    id: number;
    name: string;
    min_price: number;
    max_price: number;
    parent_category: number | null;
}
