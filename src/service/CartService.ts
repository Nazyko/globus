import { api } from "../api/api";
import { AddProductToCartReq } from "../types/request/Request";
import { AddProductToCartRes, getCartProductsRes } from "../types/response/CartResponse";

export const getCartProducts = async () => {
    const response = await api.get<getCartProductsRes>(`/api/cart`)
    return response.data
}

export const addProductToCart = async (credentials: AddProductToCartReq) => {
    const response = await api.post<AddProductToCartRes>(`/api/cart`, credentials)    
    return response.data
}

export const updateProductCart = async ({id, ...credentials}: {id: number} & AddProductToCartReq) => {
    const response = await api.put(`/api/cart/${id}`, credentials)
    return response.data
}

export const deleteProductCart = async (id: number) =>  {
    const response = await api.delete(`/api/cart/${id}`)
    return response.data
}

export const deleteAllCartItems = async () => {
    const response = await api.delete(`/api/cart/delete-all`) 
    return response.data
}

export const delivery = async () => {
    const response = await api.get(`/api/delivery`)
    return response.data
}