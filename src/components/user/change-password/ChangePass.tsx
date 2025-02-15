import { Flex, Modal } from "@mantine/core"
import { useDisclosure } from '@mantine/hooks'
import "./ChangePass.css"
import { useMutation } from "@tanstack/react-query";
import { changePassVerify, changePassword } from "../../../service/AuthService";
import { useEffect, useState } from "react";
import { IUser } from "../../../types/interface/IUser";

export const ChangePass = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const userdata = localStorage.getItem("user")
  const user: IUser = userdata && JSON.parse(userdata)
  const phone = user.phone
  const [newPass, setNewPass] = useState<string>("")
  const [newPass2, setNewPass2] = useState<string>("")
  const [otp, setOtp] = useState<string>("")

  const {mutate: change, data: changePass} = useMutation({
    mutationKey: ['auth'],
    mutationFn: changePassword
  })

  const sendNewPass = () => {
    if(phone && newPass && newPass2) {
      change({phone, password: newPass, password2: newPass2})
      open()
    }
    open()
  }

  useEffect(() => {
    if(changePass) {
      open()
    }
  }, [changePass, open])
  

  const {mutate: verify} = useMutation({
    mutationKey: ["auth"],
    mutationFn: changePassVerify
  })

  const verificationPass = () => {
    if(phone && otp) {
      verify({phone, otp})
      close()
    }
  }


  return (
    <div className="change-pass">
      <h3 className="change-pass_title">Изменить пароль</h3>
      <div className="change-pass__container">
        <div className="change-pass__input">
          <label>Новый пароль:</label>
          <input 
            type="text"
            value={newPass} 
            onChange={(e) => setNewPass(e.target.value)}
            placeholder="Введите новый пароль"/>
        </div>
        <div className="change-pass__input">
          <label>Повторите новый пароль:</label>
          <input 
            type="text" 
            value={newPass2}
            onChange={(e) => setNewPass2(e.target.value)}
            placeholder="Введите пароль ещё раз"/>
        </div>
        <button className="change-pass-btn" onClick={sendNewPass}>Отправить пароль</button>
      </div>
      <Modal size='sm' opened={opened} onClose={verificationPass} centered>
        <Flex gap={30} direction='column' align='center' justify='center'>
          <Flex gap={5}>
            <input 
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)} 
              />
          </Flex>
          <button className="change-pass-btn" onClick={verificationPass}>Подтвердить</button>
        </Flex>
      </Modal>
    </div>
  )
}
