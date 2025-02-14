import { Flex, Text } from "@mantine/core"
import { Aside } from "../components/user/aside/Aside"
import { Route, Routes } from "react-router-dom"
import { Profile } from "../components/user/profile/Profile"
import { Orders } from "../components/user/orders/Orders"
import { Cashback } from "../components/user/cash/Cashback"
import { ChangePass } from "../components/user/change-password/ChangePass"


export const UserPage = () => {
  return (
    <Flex className="wrapper" mt={44} mb={56}>
      <Flex direction='column' gap={32} className="user-page">
        <Text fw={500} style={{fontSize: 23}}>Личный кабинет</Text>
        <Flex gap={40}>
          <Aside />
          <Routes>
            <Route index element={<Profile />}/>
            <Route path="orders" element={<Orders />}/>
            <Route path="cash" element={<Cashback />}/>
            <Route path="change-password" element={<ChangePass />}/>
          </Routes>
        </Flex>
      </Flex>
    </Flex>
  )
}


