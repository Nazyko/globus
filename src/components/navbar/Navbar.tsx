import "./Navbar.css"
import Burger from "../../assets/navbar/List.svg"
import Logo from "../../assets/navbar/GLOBUS.svg"
import User from "../../assets/navbar/user.svg"
import Search from "../../assets/navbar/search.svg"
import Like from "../../assets/navbar/like.svg"
import ShopCart from "../../assets/navbar/shop-cart.svg"
import { Link } from "react-router-dom"
import { useState } from "react"
import { CategoryList } from "../category/category-list/CategoryList"

export const Navbar = () => {
  const [openCatalog, setOpenCatalog] = useState<boolean>(false)

  return (
    <div className="wrapper">
      <div className="navbar">
        <div className="navbar__left">
            <div className="navbar__menu-burger">
                <img src={Burger} alt="" />
            </div>
            <Link to='/' className="navbar__logo">
                <img src={Logo} alt="" />
            </Link>
            <button className="catalog-btn" onClick={() => setOpenCatalog(!openCatalog)}>Каталог</button>
            <div className="navbar__menu-list">
              <Link to='/'>О нас</Link>
              <Link to='/'>Доставка</Link>
              <Link to='/'>Оплата</Link>
              <Link to='/'>Контакты</Link>
            </div>
        </div>
        <div className="navbar__right">
            <Link to='/login'>
                <img src={User} alt=""/>
            </Link>
            <Link to='/'>
                <img src={Search} alt=""/>
            </Link>
            <Link to='/'>
                <img src={Like} alt=""/>
            </Link>
            <Link to='/'>
                <img src={ShopCart} alt=""/>
            </Link>
        </div>
      </div>

      <CategoryList active={openCatalog} setActive={setOpenCatalog}/>
    </div>
  )
}

