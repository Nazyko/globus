import { Link } from "react-router-dom";
import "./CartTotal.css"

interface CartTotalProps {
  totalPrice: number;
  totalQuantity: number;
}

export const CartTotal:React.FC<CartTotalProps> = ({totalPrice, totalQuantity}) => {
  

  return (
    <div className="cart-total">
      <div className="amount">
        <h2 className="amount__title">Сумма заказа:</h2>
        <div className="amount__text">
          <h3>{totalQuantity} товара:</h3>
          <span>{totalPrice}</span>
        </div>
        <div className="amount__text">
          <h3>Доставка:</h3>
          <span>{0}</span>
        </div>
        <div className="amount__total">
          Итого:
          <span>{totalPrice}</span>
        </div>
        <div className="amount_checkout">
          <Link to='/checkout' className="amount__btn">
            Перейти к оформлению
          </Link>
        </div>
      </div>
    </div>
  )
}


