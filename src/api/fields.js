import { path } from "./path"
import { checkToken } from "../features/chaekToken"
export const getFieldApi = async(level) =>{
    if(!checkToken()) return false
    try{
        const res = await fetch(`${path}/api/fields?level=${level}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JSON.parse(sessionStorage.getItem("token"))}`
            }
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