import axios from "axios"
import { api } from "../api/api"
import { CreateCardReq, CreateReceiptReq, VerifyCardReq } from "../types/request/Request"
import { CreateCardRes, GetVerifyCodeRes, VerifyCardRes } from "../types/response/PaymentResponse"

const baseUrl = `https://globus-nukus.uz`

export const createPaymeCard = async (credentials: CreateCardReq) => {
    try {
        const response = await api.post<CreateCardRes>(`/api/cards/create_card`, credentials)
        return response.data
    }
    catch(error) {
        console.error("payment-error:", error);
    }
    
}

export const getVerifyCode = async () => {
    const token = localStorage.getItem('token')
    try {
        const response = await axios.post<GetVerifyCodeRes>(`${baseUrl}/api/cards/get_verify_code`, {
            token: token
        })
        return response.data
    }
    catch(error) {
        console.error("payment-error:", error);
    }    
}

export const verifyCard = async (credentials: VerifyCardReq) => {
    try {
        const response = await axios.post<VerifyCardRes>(`${baseUrl}/api/cards/verify_card`, credentials)
        return response.data
    }
    catch(error) {
        console.error("payment-error:", error);
    }
}

export const checkCard = async (token: string) => {
    try {
        const response = await axios.post(`${baseUrl}/api/cards/check_card`, {
            token: token
        })
        return response.data
    }
    catch(error) {
        console.error("payment-error:", error);
    }
}

export const createReceipt = async (credentials: CreateReceiptReq) => {
    try {
        const response = await axios.post(`${baseUrl}/api/receipts/receipts_c`, credentials)
        return response.data
    }
    catch(error) {
        console.error("payment-error:", error);
    }
}


export const payReceipt = async () => {
    try {
        const response = await axios.post(`${baseUrl}/api/receipts/receipts_pay`)
        return response.data
    }
    catch(error) {
        console.error("payment-error:", error);
    }
}