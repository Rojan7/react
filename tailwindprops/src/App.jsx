import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username : "rojan",
    age : 21
  }

  return (
    <>
     <h1 className='bg-green-300 text-black p-4 rounded-2xl mb-4'>Tailwind Css</h1>
    <Card username = "Ammy"  btnText = "Click Me"/>
    <Card username = "Grammy" btnText="Text Me" />

   
     
    </>
  )
}

export default App
