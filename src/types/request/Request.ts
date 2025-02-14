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