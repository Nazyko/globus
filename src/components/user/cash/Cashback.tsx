import "./Cashback.css"
import { useQuery } from "@tanstack/react-query"
import { getCash } from "../../../service/AuthService"


export const Cashback = () => {
  const { data } = useQuery({
    queryKey: ['cash'],
    queryFn: getCash
  })

  return (
    <div className="cashback">
      <h1 className="cashback__title">Мой кэшбэк</h1>
      <div className="cashback__balance">
        Ваш баланс:
        <span>{data?.data.cashback_balance}</span>
      </div>
    </div>
  )
}

