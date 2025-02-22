import { Link } from "react-router-dom"
import XIcon from "../../../assets/cart/x.svg"
import PlusIcon from "../../../assets/cart/plus.svg"
import MinusIcon from "../../../assets/cart/minus.svg"
import "./CartItems.css"
import { ICart } from "../../../types/response/CartResponse"
import { useEffect } from "react"


interface CartItemsProps {
  items: ICart[] | undefined;
  increment: ( cartId: number, id: number, quantity: number ) => void
  decrement: ( cartId: number,id: number, quantity: number ) => void
  deleteCartItem: (id: number) => void
  refetch: () => void
}

export const CartItems:React.FC<CartItemsProps> = ({items, refetch, increment, decrement, deleteCartItem}) => {

  useEffect(() => {
    if(!items) {
      refetch()
    }
  }, [items, refetch])

  return (
    <div className="cart-items">
      { items && items?.length > 0 ? items?.map(item => (
        <div key={item.product.id} className="cart-item">
          <img
            className="cart-item__img"
            src={item.product.images[0].image} 
            alt={item.product.name} 
          />
          <Link to={`/product/${item.product.id}`} className="cart-item__text">
            <h3>{item.product.name}</h3>
            <p>Код товара <span>{item.product.code}</span></p>
          </Link>
          <p className="cart-item__price">{item.product.price}</p>

          <div className="cart-item__counter">
            <button onClick={() => decrement(item.id, item.product.id, item.quantity)}>
              <img src={MinusIcon} alt="" />
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => increment(item.id, item.product.id, item.quantity)}>
              <img src={PlusIcon} alt="" />
            </button>
          </div>
          <button 
            onClick={() => deleteCartItem(item.id)}
            className="cart-item__del-btn">
            <img src={XIcon} alt="Удалить" />
          </button>
        </div>
      )) : (<div>Карзина Пусто</div>)}
    </div>
  )
}
