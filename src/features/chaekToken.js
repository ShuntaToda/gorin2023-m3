export const checkToken = () => {
    if(sessionStorage.getItem("token")){
        return true
    }
    return false

}