import { useRef, useState } from "react"
import { loginApi } from "../api/login"

export const Login = ({setToken, setMode}) => {
    
    const [message, setMessage] = useState("")
    const [username, setUsername] = useState("gorin")
    const [password, setPassword] = useState("2023")

    const handleLogin = () => {
        const login = async () => {
            console.log(username, password)
            const data = await loginApi(username, password)
            if(!data){
                setMessage("The username or password is incorrect.")
                alert("ログインに失敗しました")
            }
            
            try{
                sessionStorage.setItem("token", data.token)
                console.log(setToken(data.token))
                setToken(data.token)
                setMode("welcome")
            }catch(e){
                console.error(e)
            }
        }
        login()
    }
    
    return (
        <div className="login" style={{display: "block"}}>
          <dl className="input-list">
            <div className="input-group">
              <dt>Username</dt>
              <dd>
                <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username} required />
              </dd>
            </div>

            <div className="input-group">
              <dt>Password</dt>
              <dd>
                <input type="password"  onChange={(e)=>setPassword(e.target.value)} value={password} required />
              </dd>
            </div>
            <div>{message}</div>
            <div className="input-group">
              <button className="button" type="button" onClick={handleLogin}>Login</button>
            </div>
          </dl>
        </div>
    )
}