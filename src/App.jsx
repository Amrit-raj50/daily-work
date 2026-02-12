import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './components/child1'
import UserContext from './context/userContext'

function App() {
  const [count, setCount] = useState(0)
  
  const username = "amrit";
  return (
    <>
    <h1>HELLO</h1>
    <UserContext.Provider value = {username}>
      <h1>App</h1>
      <Child1/>
    </UserContext.Provider>
      {/* <Child1 name = {username}/> */}
    </>
  )
}

export default App
