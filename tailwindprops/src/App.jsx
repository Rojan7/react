import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  
  let myObj ={
    username : "rojan",
    age : 21
  }

  return (
    <>
     <h1 className='bg-green-300 text-black p-4 rounded-2xl mb-4'>Employee </h1>
    <Card username = "Ammy"  btnText = "Click Me" paraText="Ammy wants grammy"/>
    <Card username = "Grammy" btnText="Text Me" paraText ="Grammy wants granny" />

   
     
    </>
  )
}

export default App
