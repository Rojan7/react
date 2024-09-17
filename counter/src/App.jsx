import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  
let [counter,setCounter]=useState(0) ;

 const addValue =  () =>{
  if (counter <20)
  {
    setCounter(counter +1);
  }
 }
 const removeValue = ()=>{
  if (counter >0)
  {
    setCounter (counter-1)
  }
 }
 const resetValue = ()=>{
  setCounter (counter -counter);
 }

  return (
    <>
      <h1>Counter {counter}</h1>
      <button onClick={addValue} > Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
      <br />
      <br />
      <button onClick={resetValue}>Reset Value</button>

    </>
  );
}

export default App;
