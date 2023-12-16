import { logoutApi } from "../api/login"

export const Logout = ({removeToken}) => {
    const handleLogout = () =>{
        const logout = async() => {
            const data = await logoutApi()
            if(data){
                removeToken()
            }
        }

        logout()

    }
    return (<button className="button" onClick={handleLogout} type="button">Logout</button>)
}