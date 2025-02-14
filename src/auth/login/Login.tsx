import { Link, useNavigate } from "react-router-dom"
import "./Login.css"
import { useEffect, useState } from "react"
import { login } from "../../service/AuthService"
import { useMutation } from "@tanstack/react-query"
import { useAuth } from "../../hooks/useAuth"

export const Login = () => {
  const [ phone, setPhone ] = useState<string>("")
  const [ password, setPassword ] = useState<string>("")

  const navigate = useNavigate()

  const { mutate: handleLogin, isSuccess, data } = useMutation({
    mutationKey: ['auth'],
    mutationFn: login,
  })

  const { refetch } = useAuth()

  useEffect(() => {
    if(isSuccess && data) {
      localStorage.setItem("access", data.data.token.access)
      localStorage.setItem("refresh", data.data.token.access)
      navigate("/")
      refetch()
    }
  }, [isSuccess, data, refetch, navigate])

  const handleSubmit = () => {
    if(phone && password) {
      handleLogin({ phone: phone, password: password })
    }
  }

  return (
    <div className="login">
      <div className="login__inner">
        <h3 className="login__title">Авторизация</h3>
        <form className="login__container">
          <div className="login__input-box">
            <label className="input-box__label">Телефон:</label>
            <input 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel" 
              placeholder="998 90 123 45 67"/>
          </div>
          <div className="login__input-box">
            <label className="input-box__label">Пароль:</label>
            <input 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text" 
              placeholder="Пароль"/>
          </div>
        </form>
        <Link to="" className="login__forgot-pass">Забыл пароль</Link>
        <button className="login__btn" onClick={handleSubmit}>Авторизация</button>
        <label>Еще нет аккаунта? <Link to="/register">Регистация</Link></label>
      </div>
    </div>    
  )
}