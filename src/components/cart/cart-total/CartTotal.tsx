import "./CartTotal.css"

interface CartTotalProps {
  total: number;
}

export const CartTotal:React.FC<CartTotalProps> = () => {
  

  return (
    <div className="cart-total">
      <div className="amount">
        <h2 className="amount__title">Сумма заказа:</h2>
        <div className="amount__text">
          <h3>{0} товара:</h3>
          <span>{0}</span>
        </div>
        <div className="amount__text">
          <h3>Доставка:</h3>
          <span>{0}</span>
        </div>
      </div>
      <div className="total">
        <div className="total__title">
          Итого:
          <span>{0}</span>
        </div>
        <div className="total_checkout">
          <button className="total__btn">Перейти к оформлению</button>
          
          <div className="total__link">
            <a href="" className="">Ввести промокод</a>
          </div>
        </div>
      </div>
    </div>
  )
}


