import { useDisclosure } from "@mantine/hooks";
import { IUser } from "../../types/interface/IUser";
import "./CheckInfo.css"
import { Button, Flex, Modal, Radio } from "@mantine/core";
import { useEffect, useState } from "react";
import { createPaymeCard, getVerifyCode } from "../../service/PaymentService";
import { useMutation } from "@tanstack/react-query";
import { VerifyModal } from "./VerifyModal";
import { socket } from "../../socket";
import { CreditCard } from "../creditCard/CreditCard";

export const CheckInfo: React.FC = () => {
  const userdata = localStorage.getItem("user");
  const user: IUser = userdata && JSON.parse(userdata)  
  const [cardNumber, setCardNumber] = useState<string>("")
  const [expireCard, setExpireCard] = useState<string>("")
  const [opened, {open, close}] = useDisclosure(false);
  const [isOpen, setOpen] = useState<boolean>(false)

  // const [paymentTypes, setPaymentTypes] = useState("")

  const { data: paymeData, mutate: createCard} = useMutation({
      mutationKey: ['payment'],
      mutationFn: createPaymeCard
  })

  const handleCreateCard = () => {
    createCard({
      card_number: cardNumber,
      expire: expireCard
    })
    if(paymeData) {
      localStorage.setItem('token', paymeData?.data.card.token) 
      
      getVerifyCode()
    } 
    close()
    setOpen(true)
    console.log("hello");
    
  }

  return (
    <div className="check">
      <div className="check-info">
        <h2 className="check-info__title">Контактная информация:</h2>
        <div className="check-info__box">
          <div className="check-info__txt">
            <span>Имя:</span>
            <div>{user.first_name}</div>
          </div>
          <div className="check-info__txt">
            <span>Фамилия:</span>
            <div>{user.last_name}</div>
          </div>
          <div className="check-info__txt">
            <span>Телефон:</span>
            <div>+{user.phone}</div>
          </div>
          <div>
            <Radio
              name="payment" 
              value="1"
              label="Картой онлайн"
              color="#000000"
              variant="outline"
            />
            <Radio
              name="payment" 
              value="2"
              label="Наличными или картой при получении"
              color="#000000"
              variant="outline"
            />
          </div>
          <div>
            <Radio
              name="delivery" 
              value="1"
              label="Самовывоз"
              color="#000000"
              variant="outline"
            />
            <Radio
              name="delivery" 
              value="2"
              label="Курьерская доставка"
              color="#000000"
              variant="outline"
            />
          </div>
        </div>
      </div>

      <button className="check-btn" onClick={open}>Перейти к оплате</button>

      <Modal opened={opened} onClose={close} title="Оплата" centered>
        <Flex direction='column' gap={15}>
          <CreditCard />
        </Flex>
        <Button mt={40} color='black' onClick={handleCreateCard}>Оплатить</Button>
      </Modal>

      <VerifyModal open={isOpen}/>

    </div>
  )
}
