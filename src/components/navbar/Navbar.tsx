import "./Navbar.css"
import Burger from "../../assets/navbar/List.svg"
import Logo from "../../assets/navbar/GLOBUS.svg"
import UserIcon from "../../assets/navbar/user.svg"
import SearchIcon from "../../assets/navbar/search.svg"
import LikeIcon from "../../assets/navbar/like.svg"
import ShopCartIcon from "../../assets/navbar/shop-cart.svg"
import { Link } from "react-router-dom"
import { useState } from "react"
import { CategoryList } from "../category/category-list/CategoryList"
import { useAuth } from "../../hooks/useAuth"

export const Navbar = () => {
  const [openCatalog, setOpenCatalog] = useState<boolean>(false)
  const { isAuth } = useAuth()

  return (
    <div className="wrapper" style={{borderBottom: '1px solid #DDDDDD'}}>
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
            <Link to={isAuth ? "/user": "/login"}>
                <img src={UserIcon} alt=""/>
            </Link>
            <Link to='/search'>
                <img src={SearchIcon} alt=""/>
            </Link>
            <Link to='/'>
                <img src={LikeIcon} alt=""/>
            </Link>
            <Link to='/'>
                <img src={ShopCartIcon} alt=""/>
            </Link>
        </div>
      </div>

      <CategoryList active={openCatalog} setActive={setOpenCatalog}/>
    </div>
  )
}

