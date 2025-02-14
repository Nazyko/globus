import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { getMe } from "../service/AuthService"



export const useAuth = () => {
    const [ isAuth, setAuth ] = useState<boolean>(false)
    const queryClient = useQueryClient();
    
    const checkToken = () => !!localStorage.getItem('access');

    const { data, refetch } = useQuery({
        queryKey: ['auth'],
        queryFn: getMe,
        enabled: checkToken()
    })
    useEffect(() => {
        if (data) {
            setAuth(true);
            localStorage.setItem("user", JSON.stringify(data.data.user))
        } else {
            setAuth(false);
        }
    }, [data]);

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setAuth(false);
        queryClient.invalidateQueries({ queryKey: ['auth'] });
        queryClient.removeQueries({ queryKey: ['auth'] }); 
    };

    return {
        isAuth,
        data,
        refetch,
        logout
    }
}