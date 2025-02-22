import { Button, Flex, Text } from "@mantine/core"
import { CartItems } from "../components/cart/cart-items/CartItems"
import { CartTotal } from "../components/cart/cart-total/CartTotal"
import { useMutation, useQuery } from "@tanstack/react-query"
import { deleteAllCartItems, deleteProductCart, getCartProducts, updateProductCart } from "../service/CartService"
import { useEffect } from "react"
import { AddProductToCartReq } from "../types/request/Request"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


export const CartPage = () => {
  const { data, refetch } = useQuery({
    queryKey: ['cart'],
    queryFn: getCartProducts
  })  

  useEffect(() => {
    if(!data) {
      refetch()
    }
  }, [refetch, data])

  const items = data?.data?.cart
  console.log(items);
  
  const total = data?.data.cart.map(item => item.quantity)
  
  const { mutate: deleteItem } = useMutation({
    mutationFn: deleteProductCart
  })

  const { mutate: deleteAllItems } = useMutation({
    mutationKey: ['cart'],
    mutationFn: () => deleteAllCartItems()
  })

  const { mutate: updateItem } = useMutation({
    mutationKey: ['cart'],
    mutationFn: ({ id, credentials }: { id: number; credentials: AddProductToCartReq }) => 
      updateProductCart({id, ...credentials}),
  });

  const deleteCartItem = (id: number) => {
    deleteItem(id)
    refetch()
  }

  const increment = (cartId: number, id: number, quantity: number) => {
    updateItem({
      id: Number(cartId),
      credentials: {
        product: id,
        quantity: quantity + 1
      }
    })
    
    refetch()
  }

  const decrement = (cartId: number, id: number, quantity: number) => {
    if(quantity < 1) {
      deleteCartItem(Number(cartId))
    }
    updateItem({
      id: Number(cartId),
      credentials: {
        product: id,
        quantity: quantity - 1
      }
    })
    refetch()
  }

  return (
    <Flex direction='column' gap={32} pt={44} className="wrapper">
      <Flex justify='space-between'>
      <Text w={500} size="xl" className="cart__title">
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
        <CartItems 
          refetch={refetch}
          items={items} 
          increment={increment} 
          decrement={decrement} 
          deleteCartItem={deleteCartItem}
        />
        <CartTotal total={Number(total)}/>
      </Flex>
    </Flex>
  )
}
