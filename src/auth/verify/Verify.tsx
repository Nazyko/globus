import { useMutation } from "@tanstack/react-query"
import "./Verify.css"
import { Center } from "@mantine/core"
import { verification } from "../../service/AutthService"
import { useState } from "react"


export const Verify = () => {
    const [value, setValue] = useState<string>("")
    const {mutate: verify} = useMutation({
        mutationKey: ['auth'],
        mutationFn: verification
    })
    
    const code = Number(value)

    const sendCodeVerify = async () => {
        if(code) {
            verify(code)
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
        </div>
        <button className="verify-btn" onClick={sendCodeVerify}>Подтвердить</button>
      </div>
    </Center>
  )
}