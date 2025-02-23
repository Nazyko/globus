import { Link } from "react-router-dom"
import XIcon from "../../../assets/cart/x.svg"
import PlusIcon from "../../../assets/cart/plus.svg"
import MinusIcon from "../../../assets/cart/minus.svg"
import "./CartItems.css"
import { ICart } from "../../../types/response/CartResponse"
import { useEffect } from "react"


interface CartItemProps {
  items: ICart[] | undefined;
  cartId: number;
  productId: number;
  product_name: string;
  product_code: string;
  images: [
    {
      id: number;
      image: string
    }
  ]
  price: number;
  quantity: number;
  increment: ( cartId: number, id: number, quantity: number ) => void
  decrement: ( cartId: number,id: number, quantity: number ) => void
  deleteCartItem: (id: number) => void
  refetch: () => void
}

export const CartItem:React.FC<CartItemProps> = ({
  items, cartId, 
  productId, product_name, 
  product_code, price, quantity, images,
  refetch, increment, decrement, deleteCartItem
}) => {

  useEffect(() => {
    if(!items) {
      refetch()
    }
  }, [items, refetch])

  return (
    <div className="cart-item">

      <img
        className="cart-item__img"
        src={images[0].image} 
        alt={product_name} 
      />

      <Link to={`/product/${productId}`} className="cart-item__text">
        <h3>{product_name}</h3>
        <p>Код товара <span>{product_code}</span></p>
      </Link>

      <p className="cart-item__price">{price * quantity}</p>

      <div className="cart-item__counter">
        <button onClick={() => decrement(cartId, productId, quantity)}>
          <img src={MinusIcon} alt="" />
        </button>
        <span>{quantity}</span>
        <button onClick={() => increment(cartId, productId, quantity)}>
          <img src={PlusIcon} alt="" />
        </button>
      </div>

      <button 
        onClick={() => deleteCartItem(cartId)}
        className="cart-item__del-btn">
        <img src={XIcon} alt="Удалить" />
      </button>

    </div>
  )
}
