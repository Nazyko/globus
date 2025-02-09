import "./Register.css"
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <div className="register">
        <div className="register__inner">
            <h3 className="register__title">Регистрация</h3>
            <div className="register__container">
                <div className="register__input-box">
                    <label className="input-box__label">Фамилия:</label>
                    <input type="text" placeholder="Введите Фамилию"/>
                </div>
                <div className="register__input-box">
                    <label className="input-box__label">Имя:</label>
                    <input type="text" placeholder="Введите Имя"/>
                </div>
                <div className="register__input-box">
                    <label className="input-box__label">Телефон:</label>
                    <input type="text" placeholder="Введите Телефон"/>
                </div>
                <div className="register__input-box">
                    <label className="input-box__label">Пароль:</label>
                    <input type="text" placeholder="Пароль"/>
                </div>
                <div className="register__date-box">
                    <label className="input-box__label">Введите день рождения:</label>
                    <input type="date" />
                </div>
                <div className="register__gender-box">
                    <label>
                        <input type="radio" name="gender" value='male'/>
                        Male
                    </label>
                    <label>
                        <input type="radio" name="gender" value='female'/>
                        Female
                    </label>
                </div>
            </div>
            
            <button className="register__btn">Регистрация</button>
            <label>Уже есть аккаунт? <Link to="/login">Авторизация</Link></label>
            <p>
                Нажав на кнопку "Подписаться", Вы соглашаетесь с 
                <Link to=''>политикой конфиденциальности</Link>
            </p>
        </div>
    </div>
  )
}
