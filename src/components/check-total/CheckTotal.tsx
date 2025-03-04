import { useQuery } from "@tanstack/react-query"
import "./CheckTotal.css"
import { getCartProducts } from "../../service/CartService"

export const CheckTotal = () => {
  const { data } = useQuery({
    queryKey: ['cart'],
    queryFn: getCartProducts
  })

  const total = data?.data?.cart?.reduce((acc, item) => acc + (item.product?.price || 0) * item.quantity, 0) || 0;
  const totalQuantity = data?.data.cart.reduce((acc, item) => acc + item.quantity, 0) || 0; 

  return (
    <div className="check-list">
      <h3 className="check-title">Состав заказа:</h3>
      <ul className="check-items">
        {data?.data.cart.map(item => (
          <li key={item.id} className="check-item">
            <img src={item.product.images[0].image} alt={item.product.name} />
              <div className="check-item-text">
                <h2>{item.product.name}</h2>
                <span>Код товара: {item.product.code}</span>
                <p>{item.product.price * item.quantity}</p>
              </div>
          </li>
        ))}
      </ul>
      <div className="check-quantity">
        <span>{totalQuantity} товара:</span>
        <p>{total}</p>
      </div>
      <div className="check-total">
        <p>Итого:</p>
        <p>{total}</p>
      </div>
    </div>
  )
}
