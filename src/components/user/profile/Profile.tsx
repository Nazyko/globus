import "./Profile.css"
import { useAuth } from "../../../hooks/useAuth"
import { useEffect, useState } from "react"
import { IUser } from "../../../types/interface/IUser"
import { useMutation } from "@tanstack/react-query"
import { updateUserData } from "../../../service/AuthService"
import { UpdateRequest } from "../../../types/request/Request"

export const Profile = () => {
  const { isAuth, refetch } = useAuth();
  const userdata = localStorage.getItem("user");
  const user: IUser = userdata && JSON.parse(userdata)

  const [newFirstName, setFirstName] = useState<string>(user.first_name || "");
  const [newLastName, setLastName] = useState<string>(user.last_name || "");
  const [newDateOfBirth, setDateOfBirth] = useState<string>(user.date_of_birth || "");
  const [newPhone, setPhone] = useState<string>(user.phone || "");
  const [newGender, setGender] = useState<string>(user.gender || "");
  const [isNew, setNew] = useState<boolean>(false);

  const id = user?.id;
  
  const { mutate: update } = useMutation({
    mutationKey: ["auth"],
    mutationFn: ({ id, credentials }: { id: number; credentials: UpdateRequest }) => 
      updateUserData({id, ...credentials}),
  });

  const updateUser = async () => {
    if (!id) {
      console.error("Ошибка: ID пользователя не найден!");
      return;
    }

    if (newFirstName && newLastName && newDateOfBirth && newPhone && newGender) {
      update({
        id,
        credentials: {
          first_name: newFirstName,
          last_name: newLastName,
          phone: newPhone,
          date_of_birth: newDateOfBirth,
          gender: newGender,
        },
      });
    }
    refetch()
  };

  useEffect(() => {
    if(isAuth) {
      refetch()
    }
  }, [isAuth, refetch])

  useEffect(() => {
    refetch()
    setNew(
      newFirstName !== user.first_name ||
      newLastName !== user.last_name ||
      newDateOfBirth !== user.date_of_birth ||
      newPhone !== user.phone ||
      newGender !== user.gender
    );
  }, [isNew, newFirstName, newLastName, newDateOfBirth, newPhone, newGender, user, refetch]);

  return (
    <div className="profile">
      <h1 className="profile__title">Личные данные</h1>
      <p>Заполните поля, чтобы облегчить повторный ввод при оформлении заказа.</p>
      <div className="profile__form">

        <div className="profile__input">
          <label>Имя:</label>
          <input 
            value={newFirstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text" />
        </div>

        <div className="profile__input">
          <label>Фамилия:</label>
          <input
            value={newLastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text" />
        </div>

        <div className="profile__input">
          <label>Дата рождения:</label>
          <input 
            value={newDateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            type="date" />
        </div>

        <div className="profile__input">
          <label>Телефон:</label>
          <input 
            value={newPhone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel" />
        </div>

        <div className="profile__input-radio">
          <label className="gender-box__label">
            <input 
              type="radio" 
              name="gender" 
              value='male' 
              checked={newGender === "male"} 
              onChange={(e) => setGender(e.target.value)}
              />
                Мужчина
          </label>
          <label className="gender-box__label">
            <input 
              type="radio" 
              name="gender" 
              value='female' 
              checked={newGender === "female"}
              onChange={(e) => setGender(e.target.value)}
              />
                Женщина
          </label>
        </div>
      </div>
      <button
        onClick={updateUser} 
        className={isNew ? "profile-btn" : "none"}>Сохранить данные</button>
    </div>
  )
}
