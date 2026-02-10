import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [com,setCom] = useState("");
  const [userChoice,setUserChoice] = useState("");
  const [res,setRes] = useState("");
  

  const choice = ["stone","paper","sissor"];


  function play(user){
    const computerChoice = choice[Math.floor(Math.random() * 3)];

    setUserChoice(user);
    setCom(computerChoice);
    console.log(user);
    console.log(computerChoice);

    if(user === computerChoice){
        setRes("draw");
    }
    else if(user === "stone"){
      if(computerChoice === "paper"){
        setRes("COM WINS");
      }
      else if(computerChoice === "sissor"){
        setRes("YOU WINS");
      }
    }
    else if(user === "paper"){
      if(computerChoice === "stone"){
        setRes("YOU WINS");
      }
      else if(computerChoice === "sissor"){
        setRes("COM WINS");
      }
    }
    else{
      if(computerChoice === "stone"){
        setRes("COM WINS");
      }
      else if(computerChoice === "paper"){
        setRes("YOU WINS");
      }
    }
  }

  return (
    <>
      <button onClick={() => play("stone")} >Stone</button>
      <button onClick={() => play("paper")}>Paper</button>
      <button onClick={() => play("sissor")}>Sissor</button>
      

      <p>USER : {userChoice}</p>
      <p>COM : {com}</p>

      <p>RESULT : {res}</p>
      
    </>
  )
}

export default App
