import { Logout } from "./Logout"

export const Welcome = ({ setMode, removeToken, setLevel,user }) => {

    const handleEasy = () => {
        setMode("game")
        setLevel(1)
    }
    const handleNomal = () => {
        setMode("game")
        setLevel(2)
    }
    return (
        <div className="select" >
            <h2 className="title">Welcome, {user.username}!</h2>
            <div className="total-play-time">Your total play time is 10min.</div>
            <div className="buttons profile-buttons">
                <ul className="buttons-list">
                    <li className="buttons-item">
                        <button className="button" onClick={() => setMode("profile")} type="button">Profile Settings</button>
                    </li>
                    <li className="buttons-item">
                        <Logout removeToken={removeToken} />
                    </li>
                </ul>
            </div>
            <div className="buttons">
                <ul className="buttons-list">
                    <li className="buttons-item">
                        <button className="button" type="button" onClick={handleEasy}>Easy</button>
                    </li>
                    <li className="buttons-item">
                        <button className="button" type="button" onClick={handleNomal}>Normal</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}