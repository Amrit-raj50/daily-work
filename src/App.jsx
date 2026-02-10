import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [res,showRes] = useState(false);
  const [inp,setInp] = useState(0);
  const [arr,setArr] = useState([23,4,5,72,167,21,77,89,20,2,4,333,890]);

  const checkNumber = () => {
    const exixts = arr.includes(Number(inp));
    showRes(exixts);
  }

  return (
    <>
      <p>Check number is present in the array or not</p>
      <input type="number" placeholder='enter the number' value={inp} onChange={(e) => setInp(e.target.value)} />
      <button onClick={checkNumber}>CHECK</button>
      <p>res : {res ? "Number Found" : "Number not found"}</p>
    </>
  )
}

export default App
