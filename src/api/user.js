import { path } from "./path"
import { checkToken } from "../features/chaekToken"
export const userApi = async() =>{
    if(!checkToken()) return false
    try{
        const res = await fetch(`${path}/api/users/profile`, {
            method: "get",
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
export const updateUserApi = async(username, nickname) =>{
    if(!checkToken()) return false
    try{
        const res = await fetch(`${path}/api/users/profile`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${JSON.parse(sessionStorage.getItem("token"))}`
            },
            body: JSON.stringify({
                    username: username,
                    nickname: nickname
                  })
        })
        return  res

    }catch(e){
        console.error(e)
    }

    return false
}