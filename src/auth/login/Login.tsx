import { Link } from "react-router-dom"
import "./Login.css"

export const Login = () => {
  return (
    <div className="login">
      <div className="login__inner">
        <h3 className="login__title">Авторизация</h3>
        <div className="login__container">
          <div className="login__input-box">
            <label className="input-box__label">Телефон:</label>
            <input type="text" placeholder="Введите Телефон"/>
          </div>
          <div className="login__input-box">
            <label className="input-box__label">Пароль:</label>
            <input type="text" placeholder="Пароль"/>
          </div>
        </div>
        <Link to="" className="login__forgot-pass">Забыл пароль</Link>
        <button className="login__btn">Авторизация</button>
        <label>Еще нет аккаунта? <Link to="/register">Регистация</Link></label>
      </div>
    </div>    
  )
}