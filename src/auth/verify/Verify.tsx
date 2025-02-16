import { useMutation } from "@tanstack/react-query"
import "./Verify.css"
import { Button, Center, Text } from "@mantine/core"
import { askCodeAgain, verification } from "../../service/AuthService"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export const Verify = () => {
  const [value, setValue] = useState<string>("")
  const [timer, setTimer] = useState(60);

  const {mutate: verify, data } = useMutation({
    mutationKey: ['register'],
    mutationFn: verification
  })

  const navigate = useNavigate()

  useEffect(()=> {
    if(data?.success === true) {
      localStorage.setItem("access", data.data.token.access)
      localStorage.setItem("refresh", data.data.token.access)
      navigate("/")
    }
  }, [data, navigate])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    if (timer <= 0) return;
    return () => clearInterval(timer);
  }, [timer]);
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const code = Number(value)
  const sendCodeVerify = async () => {
    if(code) {
      await verify(code)
    }
  }

  const phone = localStorage.getItem("phone")
  const sendPhone = async () => {
    if(phone) {
      askCodeAgain(phone)
    }
  }

  return (
    <Center h={500}>
      <div className="verify">
        <div className="verify__title">Подтверждение</div>
        <div className="verify__input-box">
            <label>Код из смс:</label>
            <input 
                type="text" 
                className="verify__input" 
                value={value}
                onChange={(e) => setValue(e.target.value)}/>
            <Text>Отправить код повторно через: <span>{formatTime(timer)}</span></Text>
            <Button onClick={sendPhone}>Повторно отправить</Button>
        </div>
        <button className="verify-btn" onClick={sendCodeVerify}>Подтвердить</button>

      </div>
    </Center>
  )
}