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
        setAuth(!!data);
    }, [data]);

    const logout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setAuth(false);
        queryClient.invalidateQueries({ queryKey: ['auth'] });
        queryClient.removeQueries({ queryKey: ['auth'] }); // Очищаем данные пользователя
    };


    return {
        isAuth,
        data,
        refetch,
        logout
    }
}