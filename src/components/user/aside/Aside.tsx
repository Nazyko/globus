import "./Aside.css"
import { NavLink } from "react-router-dom"


export const Aside = () => {
  return (
    <div className="user-aside">
      <NavLink 
        to='/user'
        end
        className={({ isActive }) => isActive ? "user-aside-link active" : "user-aside-link"}>
          Личные данные
      </NavLink>
      <NavLink 
        to='/user/orders' 
        end
        className={({ isActive }) => isActive ? "user-aside-link active" : "user-aside-link"}>
          Мои заказы
      </NavLink>
      <NavLink 
        to='/user/cash'
        end
        className={({ isActive }) => isActive ? "user-aside-link active" : "user-aside-link"}>
          Мой кэшбэк
      </NavLink>
      <NavLink 
        to='/user/change-password' 
        end
        className={({ isActive }) => isActive ? "user-aside-link active" : "user-aside-link"}>
          Изменить пароль
      </NavLink>
      <button>Выйти</button>
    </div>
  )
}
