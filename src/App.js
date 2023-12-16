import { useEffect, useState } from 'react';
import './assets/css/base.css';
import { Login } from './components/Login';
import { useSessionStorage } from './hooks/useSessionStorage';
import { Welcome } from './components/Welcome';
import { Game } from './components/Game';
import { Profile } from './components/Profile';
import { Result } from './components/Result';
import { userApi } from './api/user';

function App() {
  const [token, setToken, removeToken] = useSessionStorage("token", null)
  const [mode, setMode] = useState("")
  const isAuthed = !!token
  const [level, setLevel] = useState(0)
  
  const [user, setUser] = useState({})
  useEffect(() => {
    const getUser = async () => {
        const data = await userApi()
        if (data) {
            setUser(data)
        }
    }
    getUser()

}, [])
  
  useEffect(()=>{
    if(isAuthed){
      setMode("welcome")
    }
  }, [])
  return (
    
    <main className="main">
      <div className="wrap">
        {!isAuthed ? <Login setToken={setToken} setMode={setMode}/> : (
          <div>
            {mode == "welcome" && <Welcome user={user} setLevel={setLevel} setMode={setMode} removeToken={removeToken}/>}
            {mode == "profile" && <Profile user={user} setMode={setMode} />}
            {mode == "game" && <Game level={level} setMode={setMode}/>}
            {mode == "result" && <Result level={level} user={user} setMode={setMode}/>}
          </div>

        )}
        
      </div>
    </main>
  );
}

export default App;
