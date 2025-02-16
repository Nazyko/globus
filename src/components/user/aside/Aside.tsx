import { Button, Group, Modal } from "@mantine/core"
import { useAuth } from "../../../hooks/useAuth"
import "./Aside.css"
import { NavLink, useNavigate } from "react-router-dom"
import { useDisclosure } from "@mantine/hooks"


export const Aside = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { logout, refetch } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    refetch()
    navigate("/")
  }

  return (
    <div className="user-aside">
      <NavLink 
        to='/user'
        end
        className={({ isActive }) => isActive ? "user-aside-link active" : "user-aside-link"}>
          Личные данные
      </NavLink>
      <NavLink 
        to='/user/orders' 
        end
        className={({ isActive }) => isActive ? "user-aside-link active" : "user-aside-link"}>
          Мои заказы
      </NavLink>
      <NavLink 
        to='/user/cash'
        end
        className={({ isActive }) => isActive ? "user-aside-link active" : "user-aside-link"}>
          Мой кэшбэк
      </NavLink>
      <NavLink 
        to='/user/change-password' 
        end
        className={({ isActive }) => isActive ? "user-aside-link active" : "user-aside-link"}>
          Изменить пароль
      </NavLink>
      <button onClick={open}>Выйти</button>
      <Modal opened={opened} onClose={close} title="Вы хотите выйти из аккаунта?">
        <Group mt="lg" justify="flex-end">
          <Button onClick={close} variant="default">
            Закрыть
          </Button>
          <Button onClick={handleLogout} color="red">
            Выйти
          </Button>
        </Group>
      </Modal>
    </div>
  )
}
