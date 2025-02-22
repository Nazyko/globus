import "./Detail.css"
import { useMutation, useQuery } from "@tanstack/react-query"
import { getSingleProduct } from "../../service/ProductsService"
import { useParams } from "react-router-dom"
import { addProductToCart } from "../../service/CartService"


export const Detail = () => {
    const { id } = useParams()
    
    const { data } = useQuery({
        queryKey: ['products'],
        queryFn: () => getSingleProduct(Number(id))
    })

    const { mutate: addCart } = useMutation({
        mutationKey: ['cart'],
        mutationFn: addProductToCart
    })

    const addCartProduct = (id: number) => {
        addCart({
            product: id,
            quantity: 1
        })
    }
      
    return (
        <div className="wrapper">
            <div className="detail">
                <div className="detail__left">
                    {data?.data?.items?.images.map(image => (
                        <img src={image.image} alt="" key={image.id}/>
                    ))}
                </div>
                <div className="detail__right">
                    <div className="detail__heading">
                        <p className="text-gray">Код товара: {data?.data?.items?.code}</p>
                        <h2 className="detail__title">{data?.data?.items?.name}</h2>
                        <p className="detail__price">{data?.data?.items?.price} som</p>
                    </div>
                    
                    <div className="desciption">
                        <h2 className="desciption-title">Описание:</h2>
                        <p className="desciption-body">{data?.data?.items?.description}</p>
                    </div>
                    <button
                        onClick={() => addCartProduct(Number(data?.data.items.id))} 
                        className="detail-btn">В корзину</button>
                    <p>Осталось: {data?.data?.items?.amount} шт</p>
                </div>
            </div>
        </div>
    )
}


