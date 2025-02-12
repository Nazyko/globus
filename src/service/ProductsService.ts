import axios from "axios"
import { AllProductsResponse, CategoryListResponse, getSingleProductResponse, SearchResponse, SingleCategoryResponse } from "../types/response/ProductResponse"

const baseURL = 'https://globus-nukus.uz'

export const getCategoryList = async () => {
    const respose = await axios.get<CategoryListResponse>(`${baseURL}/api/categories`)    
    return respose.data
}
export const getCategoryById = async (id: number) => {
    const response = await axios.get<SingleCategoryResponse>(`${baseURL}/api/categories/${id}`)     
    return response.data
}

export const getAllProducts = async () => {
    const response = await axios.get<AllProductsResponse>(`${baseURL}/api/products`)
    return response.data
}

export const getWithPagination = async (limit: number, offset: number) => {
    const response = await axios.get<AllProductsResponse>(`${baseURL}/api/products?limit=${limit}&offset=${offset}`)
    return response.data
}

export const searchProducts = async ( limit: number, offset: number, text: string) => {
    const response = await axios.get<SearchResponse>(`${baseURL}/api/products?limit=${limit}&offset=${offset}&search=${text}`)
    return response.data
}

export const getSingleProduct = async (id: number) => {
    const response = await axios.get<getSingleProductResponse>(`${baseURL}/api/products/${id}`)
    return response.data
}