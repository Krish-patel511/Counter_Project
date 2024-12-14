import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [count,setCount] = useState(1)
 // let count = 15;

  
  
  
  return (
    <>
      <h1>Counter Programme</h1>
      <h2>Counter Value:{count}</h2>
      <br></br>
      <button onClick={() => {setCount(count+1)}}>Add Value</button>
      <br></br>
      <button onClick={() => {setCount(count-1)}}>Delete Value</button>
    </>
  )
}

export default App
