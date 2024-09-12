import { useRef, useState } from 'react'
import './App.css'

function App() {

 const [text, setText] = useState('')

 function changed(event){
  setText(event.target.value);
 }

 const invalid = isNaN(text) && text.length > 0 ? 'invalid' : '';

  return (
    <>
      <input className={invalid} value={text} onChange={changed} />
    </>
  )
}

export default App
