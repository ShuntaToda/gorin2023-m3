import { useEffect, useRef, useState } from "react"
import { updateUserApi, userApi } from "../api/user"

export const Profile = ({setMode, user}) => {

    const [username, setUsername] = useState("")
    const [nickname, setNickname] = useState("")

    const [isSubmit, setIsSubmit] = useState(false)

    useEffect(()=>{
        if(user){
            setNickname(user.nickname)
            setUsername(user.username)
        }
    }, [user])

    const handleUpdate = (e) => {
        const updateUser = async () => {
            console.log(username, nickname)
            const data = await updateUserApi(username, nickname)
            if(data.status == 409){
                alert("The username is already token.")
                return 
            }
            
            setMode("welcome")
        }
        
        updateUser()
        
    }
   

    useEffect(()=>{
        const reg = /\^[a-zA-Z0-9]+$/
        // if(username){
        //     console.log(reg.test(username) , username.length >= 5 , nickname.length >= 4)

        // }
        if(!reg.test(username) && username.length >= 5 && nickname.length >= 4){
            setIsSubmit(true)
        } else{
            setIsSubmit(false)
        }
        
    }, [username, nickname])
    return (

        <div className="profile" >
            <h2 className="title">Profile Settings</h2>
            {user && (
                <dl className="input-list">

                    <div className="input-group">
                        <dt>Username</dt>
                        <dd>
                            <input onChange={(e)=> setUsername(e.target.value)} type="text" value={username} required />
                        </dd>
                    </div>

                    <div className="input-group">
                        <dt>Nickname</dt>
                        <dd>
                            <input type="text" onChange={(e)=>setNickname(e.target.value)} value={nickname} required />
                        </dd>
                    </div>
                    <div className="input-group">
                        <button className="button" type="button" onClick={handleUpdate} style={{opacity: `${isSubmit ? "1" : ".2"}`}}>Update</button>
                    </div>
                </dl>
            )}
        </div>
    )
}