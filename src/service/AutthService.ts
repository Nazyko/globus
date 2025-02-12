import axios from "axios"
import { IRegisterRequest } from "../types/request/Request"

const baseURL = 'https://globus-nukus.uz/api'

export const registration = async (credentials: IRegisterRequest) => {
    const response = await axios.post(`${baseURL}/api/users`, credentials)
    return response.data
}

export const verification = async (code: number) => {
    const response = await axios.post(`${baseURL}/api/users/verify`, code)
    return response.data
}