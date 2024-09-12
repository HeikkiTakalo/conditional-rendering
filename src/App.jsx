import { useState } from 'react'

function App() {

  const [login, setLogin] = useState(false)

  const buttonText = login ? 'logout' : 'login'

  function loginPressed(){
    setLogin(true)
  }

  return (
    <>
      <button onClick={loginPressed}>{buttonText}</button>
    </>
  )
}

export default App
