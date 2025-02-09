import "./Navbar.css"
import Burger from "../../assets/navbar/List.svg"
import Logo from "../../assets/navbar/GLOBUS.svg"
import User from "../../assets/navbar/user.svg"
import Search from "../../assets/navbar/search.svg"
import Like from "../../assets/navbar/like.svg"
import ShopCart from "../../assets/navbar/shop-cart.svg"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="wrapper">
      <div className="navbar">
        <div className="navbar__left">
            <div className="navbar__menu-burger">
                <img src={Burger} alt="" />
            </div>
            <div className="navbar__logo">
                <img src={Logo} alt="" />
            </div>
            <div className="navbar__menu-list">
              <Link to=''>Каталог</Link>
              <Link to=''>Доставка</Link>
              <Link to=''>Оплата</Link>
              <Link to=''>О нас</Link>
              <Link to=''>Контакты</Link>
            </div>
        </div>
        <div className="navbar__right">
            <Link to='/login'>
                <img src={User} alt=""/>
            </Link>
            <div>
                <img src={Search} alt=""/>
            </div>
            <div>
                <img src={Like} alt=""/>
            </div>
            <div>
                <img src={ShopCart} alt=""/>
            </div>
        </div>
      </div>
    </div>
  )
}

