import axios from "axios"
import { AllProductsResponse, CategoryListResponse, SingleCategoryResponse } from "../types/response/CatergoryResponse"

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

