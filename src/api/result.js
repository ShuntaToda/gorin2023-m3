import { path } from "./path"
import { checkToken } from "../features/chaekToken"
export const getResultsApi = async(level) =>{
    if(!checkToken()) return false
    try{
        const res = await fetch(`${path}/api/results?level=${level}`, {
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
export const storeResultsApi = async(level, time) =>{
    if(!checkToken()) return false
    try{
        const res = await fetch(`${path}/api/results`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${JSON.parse(sessionStorage.getItem("token"))}`
            },
            body: JSON.stringify({
                level: level,
                time: time
              })
        })
        return  res.json()

    }catch(e){
        console.error(e)
    }

    return false
}