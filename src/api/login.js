import { path } from "./path"
import { checkToken } from "../features/chaekToken"

export const loginApi = async(username, password) =>{
    try{
        const res = await fetch(`${path}/api/auth/login`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify( {
                username: username,
                password: password
              })
        })

        if(res.status !== 200) return false
        const data = await res.json()
        return data

    }catch(e){
        console.error(e)
    }

    return false
}
export const logoutApi = async() =>{
    if(!checkToken()) return false
    try{
        const res = await fetch(`${path}/api/auth/logout`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${JSON.parse(sessionStorage.getItem("token"))}`
            },
        })
        if(res.status !== 200) return false
        const data = await res.json()
        console.log(data)
        return data

    }catch(e){
        console.error(e)
    }

    return false
}