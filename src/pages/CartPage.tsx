import { Button, Center, Flex, Loader, Text } from "@mantine/core"
import { CartTotal } from "../components/cart/cart-total/CartTotal"
import { useMutation, useQuery } from "@tanstack/react-query"
import { deleteAllCartItems, deleteProductCart, getCartProducts, updateProductCart } from "../service/CartService"
import { useEffect } from "react"
import { AddProductToCartReq } from "../types/request/Request"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { CartItem } from "../components/cart/cart-items/CartItem"

export const CartPage = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['cart'],
    queryFn: getCartProducts
  })  

  useEffect(() => {
    if(!data) {
      refetch()
    }
  }, [refetch, data])

  const items = data?.data?.cart  
  const total = data?.data?.cart?.reduce((acc, item) => acc + (item.product?.price || 0) * item.quantity, 0) || 0;
  const totalQuantity = data?.data.cart.reduce((acc, item) => acc + item.quantity, 0) || 0;  
  
  
  const { mutate: deleteCartItem } = useMutation({
    mutationKey: ['cart'],
    mutationFn: deleteProductCart,
    onSuccess: () => refetch()
  })

  const { mutate: deleteAllItems } = useMutation({
    mutationKey: ['cart'],
    mutationFn: () => deleteAllCartItems(),
    onSuccess: () => refetch(),
  })

  const { mutate: updateItem } = useMutation({
    mutationKey: ['cart'],
    mutationFn: ({ id, credentials }: { id: number; credentials: AddProductToCartReq }) => 
      updateProductCart({id, ...credentials}),
      onSuccess: () => refetch()
  });


  const increment = (cartId: number, id: number, quantity: number) => {
    updateItem({
      id: cartId,
      credentials: {
        product: id,
        quantity: quantity + 1
      }
    })
  }

  const decrement = (cartId: number, id: number, quantity: number) => {
    if(quantity <= 1) {
      deleteCartItem(cartId)
    } else {
      updateItem({
        id: cartId,
        credentials: {
          product: id,
          quantity: quantity - 1
        }
      })
    }
  }

  if(isLoading) return <Center h={500}><Loader color="black"/></Center>

  return (
    <Flex direction='column' gap={32} pt={44} className="wrapper">
      <Flex justify='space-between'>
      <Text size="xl" fw={500} className="cart__title">
        Корзина
      </Text>
      <Button
        onClick={() => { 
          deleteAllItems()
          refetch()
        }}  
        variant="default">
          Очистить карзину 
          <DeleteOutlineOutlinedIcon />
      </Button>
      </Flex>
      
      <Flex align="flex-start" justify='space-between'>
        <div className="cart-items">
          { items && items?.length > 0 ? items?.map(item => (
            <CartItem 
              key={item.product.id}
              items={items}
              cartId={item.id}
              productId={item.product.id}
              product_name={item.product.name}
              product_code={item.product.code}
              images={item.product.images}
              price={item.product.price}
              quantity={item.quantity}
              refetch={refetch}
              increment={increment}
              decrement={decrement}
              deleteCartItem={deleteCartItem}
            />
          )) : (<div>Карзина Пусто</div>)}
        </div>
        <CartTotal totalPrice={Number(total)} totalQuantity={Number(totalQuantity)} />
      </Flex>
    </Flex>
  )
}
