import { useState } from "react"

export const useSessionStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(()=>{
        try{
            const item =  JSON.parse(sessionStorage.getItem(key))
            return item ? item : initialValue
        }catch(e){
            console.error(e)
        }
        return initialValue
    })
    
    const setValue = (value) => {
        const valueToStore = value instanceof Function ? value(storedValue) : value
        try{
            sessionStorage.setItem(key, JSON.stringify(valueToStore))
            setStoredValue(valueToStore)
        }catch(e){
            console.error(e)
        }
    }
    
    const removeValue = () => {
        try{
            sessionStorage.removeItem(key)
            setStoredValue(null)
        }catch(e){
            console.error(e)
        }

    }

    return [storedValue, setValue, removeValue]

}