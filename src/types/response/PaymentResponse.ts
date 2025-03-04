export interface CreateCardRes {
    data: {
        card: {
            expire: string;
            number: string;
            recurrent: boolean;
            token: string;
            type: string;
            verify: boolean;
        }
    };
    errMessage: string | null;
    errorCode: string | null;
    success: boolean;
}

export interface GetVerifyCodeRes {
    success: boolean;
    errMessage: string | null;
    errorCode: string | null;
    data: {
        sent: boolean;
        phone: string;
        wait: number;
    }
}

export interface VerifyCardRes {
    success: boolean;
    errMessage: string | null;
    errorCode: string | null;
    data: {
        card: {
            number: string;
            expire: string;
            token: string;
            recurrent: boolean;
            verify: boolean;
            type: string;
        }
    }
}

export interface CheckCardRes {
    success: boolean;
    errMessage: string | null;
    errorCode: string | null;
    data: {
        card: {
            number: string;
            expire: string;
            token: string;
            recurrent: boolean;
            verify: boolean;
            type: string;
        }
    }
}

export interface CreateReceiptRes {
    success: boolean;
    errMessage: string | null;
    errorCode: string | null;
    data: {
        receipt: {
            _id: string;
            create_time: number;
            pay_time: number;
            cancel_time: number;
            state: number;
            type: number;
            external: boolean;
            operation: number;
            category: {
                _id: string;
                title: string;
                mcc: {
                    visa: string[]
                }
                color: string;
                sort: number;
                operation: number;
                indoor: boolean;
            }
            error: null;
            description: string;
            detail: string | null;
            amount: number;
            currency: number;
            commission: number;
            account: [
                {
                    name: string;
                    title: string;
                    value: string;
                    main: boolean;
                }
            ]
        }
    }
}