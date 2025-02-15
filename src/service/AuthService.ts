import axios from "axios"
import { ChangePassVerifyRequest, ChangePasswordRequest, LoginRequest, RegisterRequest, UpdateRequest } from "../types/request/Request"
import { ChangePasswordVerifyResponse, GetCashResponse, GetMeResponse, LoginResponse, RefreshTokenResponse, RegisterResponse, UpdateUserDataResponse, VerifyResponse } from "../types/response/AuthResponse"
import { api } from "../api/api"

const baseURL = 'https://globus-nukus.uz'

export const registration = async (credentials: RegisterRequest) => {
    try {
        const response = await axios.post<RegisterResponse>(`${baseURL}/api/users`, credentials)
        return response.data
    }
    catch(error) {
        console.error(error);
    }
}

export const wrongFormatError = async (credentials: RegisterRequest) => {
    try {
        const response = await axios.post<RegisterResponse>(`http://147.45.107.233/api/users`, credentials)
        return response.data
    }
    catch(error) {
        console.error(error)
    }
}

export const verification = async (code: number) => {
    try {
        const response = await axios.post<VerifyResponse>(`${baseURL}/api/users/verify`, code)
        return response.data
    }
    catch (error) {
        console.error(error);
    }
}

export const askCodeAgain = async (phone: string) => {
    try {
        const response = await axios.post(`${baseURL}/api/users/otp`, phone)
        return response.data
    }
    catch (error) {
        console.error(error);
    }
}

export const login = async (credentials: LoginRequest) => {
    try {
        const response = await axios.post<LoginResponse>(`${baseURL}/api/token`, credentials)
        return response.data
    }
    catch (error) {
        console.error(error);
    }
}

export const refreshToken = async () => {
    const token = localStorage.getItem("refresh")
    if(token) {
        try {
            const response = await axios.post<RefreshTokenResponse>(`${baseURL}/api/token/refresh`, {
                refresh: token
            })
            
            return response.data
        }
        catch (error) {
            console.error(error);
        }
    }
}

export const getMe = async () => {
    const token = localStorage.getItem("access")
    if(token) {
        try {
            const response = await axios.get<GetMeResponse>(`${baseURL}/api/users/me`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
            return response.data
        }
        catch (error) {
            console.error(error);
        }
    }

}

export const updateUserData = async ({ id, ...credentials }: { id: number } & UpdateRequest) => {
    try {
      const response = await api.put<UpdateUserDataResponse>(`api/users/${id}`, credentials);
      console.log(response.data);
      
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
};

export const changePassword = async (credentials: ChangePasswordRequest) => {
    try {
        const response = await api.post(`api/users/password-change`, credentials)
        return response.data
    }
    catch (error) {
        console.error(error);
    }
}

export const changePassVerify = async (credentials: ChangePassVerifyRequest) => {
    try {
        const response = await api.post<ChangePasswordVerifyResponse>(`api/users/password-change/verify`, credentials)
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export const getCash = async () => {
    try {
        const response = await api.get<GetCashResponse>(`api/users/cashback`)
        return response.data
    } catch (error) {
        console.error(error);
    }
}