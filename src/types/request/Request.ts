export interface RegisterRequest {
    first_name: string;
    last_name: string;
    password: string;
    phone: string;
    date_of_birth: string;
    gender: string;
}

export interface LoginRequest {
    phone: string;
    password: string;
}

export interface UpdateRequest {
    first_name: string;
    last_name: string;
    phone: string;
    date_of_birth: string;
    gender: string;
}

export interface ChangePasswordRequest {
    phone: string;
    password: string;
    password2: string;
}

export interface ChangePassVerifyRequest {
    phone: string;
    otp: string;
}

export interface AddProductToCartReq {
    product: number;
    quantity: number;
}

export interface CreateCardReq {
    card_number: string;
    expire: string;
}

export interface VerifyCardReq {
    token: string;
    code: string
}

export interface CreateReceiptReq {
    amount: number;
    order_id: number;
}