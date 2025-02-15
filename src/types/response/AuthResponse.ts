export interface RegisterResponse {
    success: boolean;
    errMessage: string | null;
    errorCode: string | null;
    data: {
        user: {
            id: number;
            first_name: string;
            last_name: string;
            phone: string;
            cashback_balance: number;
            date_of_birth: string;
            gender: string;
            is_active: boolean;
        }
    }
}

export interface VerifyResponse {
    success: boolean;
    errMessage: string | null;
    errorCode: string | null;
    data: {
        token: {
            access: string;
            refresh: string;
        }
    }
}

export interface LoginResponse {
    success: boolean;
    errMessage: string | null;
    errorCode: string | null;
    data: {
        token: {
            access: string;
            refresh: string;
        }
    }
}

export interface RefreshTokenResponse {
    success: boolean;
    errMessage: string | null;
    errorCode: string | null;
    data: {
        token: {
            access: string;
        }
    }
}

export interface GetMeResponse {
    success: boolean;
    errMessage: string | null;
    errorCode: string | null;
    data: {
        user: {
            id: number;
            first_name: string;
            last_name: string;
            phone: string;
            cashback_balance: number;
            date_of_birth: string;
            gender: string;
            is_active: boolean;
        }
    }
}

export interface UpdateUserDataResponse {
    success: boolean;
    errMessage: string | null;
    errorCode: string | null;
    data: {
        user: {
            id: number;
            first_name: string;
            last_name: string;
            phone: string;
            date_of_birth: string;
            gender: string;
            is_active: boolean;
        }
    }
}

export interface ChangePasswordVerifyResponse {
    success: boolean;
    errMessage: string | null;
    errorCode: string | null;
    data: {
        token: {
            access: string;
            refresh: string;
        }
    }
}

export interface GetCashResponse {
    success: boolean;
    errMessage: string | null;
    errorCode: string | null;
    data: {
        cashback_balance: number;
    }
}