import { useEffect, useState } from "react"
import "./Register.css"
import { Link, useNavigate } from 'react-router-dom'
import { registration } from "../../service/AuthService"
import { useMutation } from "@tanstack/react-query"

export const Register = () => {
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [dateOfBirth, setDateOfBirth] = useState<string>("")
    const [gender, setGender] = useState<string>("")
    const navigate = useNavigate()

    const { mutate: register, data } = useMutation({
        mutationKey: ['auth'],
        mutationFn: registration,
    })

    useEffect(() => {
        if(data?.success === true && data.errMessage === null) {
            localStorage.setItem("phone", data.data.user.phone)
            navigate("/verify")
        }
        
    }, [data, navigate])

    const handleSubmit = async () => {
        if(firstName && lastName && password && phone && dateOfBirth && gender) {
            await register({
                first_name: firstName,
                last_name: lastName,
                password: password,
                phone: phone,
                date_of_birth: dateOfBirth,
                gender: gender
            })
            setFirstName("")
            setLastName("")
            setPassword("")
            setPhone("")
            setDateOfBirth("")
            setGender("")
        }
    }
    

  return (
    <div className="register">
        <div className="register__inner">
            <h3 className="register__title">Регистрация</h3>

            <div className="register__container">

                <div className="register__input-box">
                    <label className="input-box__label">Фамилия:</label>
                    <input 
                        type="text" 
                        placeholder="Введите Фамилию" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)}/>
                </div>

                <div className="register__input-box">
                    <label className="input-box__label">Имя:</label>
                    <input 
                        type="text" 
                        placeholder="Введите Имя" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)}/>
                </div>

                <div className="register__input-box">
                    <label className="input-box__label">Дата рождения:</label>
                    <input 
                        type="date" 
                        value={dateOfBirth} 
                        onChange={(e) => setDateOfBirth(e.target.value)}/>
                </div>
                <div className="register__input-box">
                    <label className="input-box__label">Телефон:</label>
                    <label>
                        
                    <input 
                        type="tel"
                        placeholder="998 90 123 45 67"
                        minLength={9}
                        maxLength={9} 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)}/>
                    </label>
                </div>
                <div className="register__input-box">
                    <label className="input-box__label">Пароль:</label>
                    <input 
                        type="text" 
                        placeholder="Пароль" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
                
                <div className="register__gender-box">
                    <label className="gender-box__label">
                        <input 
                            type="radio" 
                            name="gender" 
                            value='male' 
                            checked={gender === "male"} 
                            onChange={(e) => setGender(e.target.value)}/>
                        Мужчина
                    </label>
                    <label className="gender-box__label">
                        <input 
                            type="radio" 
                            name="gender" 
                            value='female' 
                            checked={gender === "female"} 
                            onChange={(e) => setGender(e.target.value)}/>
                        Женщина
                    </label>
                </div>
            </div>
            
            <button className="register__btn" onClick={handleSubmit}>Регистрация</button>
            <label>Уже есть аккаунт? <Link to="/login">Авторизация</Link></label>
            <p className="privacy-text">
                Нажав на кнопку "Подписаться", Вы соглашаетесь с <Link to=''>политикой конфиденциальности</Link>
            </p>
        </div>
    </div>
  )
}
