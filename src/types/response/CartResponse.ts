import { IProduct } from "../interface/IProduct";

export interface ICart {
    id: number;
    product: IProduct;
    quantity: number;
    cart_items: number;
}

export interface getCartProductsRes {
    success: boolean;
    errMessage: string | null;
    errorCode: string | null;
    data: {
        cart: ICart[]
    }
}

export interface AddProductToCartRes {
    success: boolean;
    errMessage: string | null;
    errorCode: string | null;
    data: {
        cart: {
            id: number;
            product: number; 
        }
    }
}