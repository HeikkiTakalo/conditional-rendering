import { useState } from 'react'

function App() {

  const [login, setLogin] = useState(false)
  const [username, setUsername] = useState('')

  const buttonText = login ? 'logout' : 'login'

  function loginPressed(){
    setLogin(!login)
  }

  function usernameChanged(event){
    setUsername(event.target.value)
  }

  return (
    <>
        <h3>Welcome {login ? username : ''}</h3>
      <input value={username} onChange={usernameChanged}/>
      <button onClick={loginPressed}>{buttonText}</button>
    </>
  )
}

export default App
