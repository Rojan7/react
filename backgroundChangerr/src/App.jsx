import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
     <div className="justify-center w-full h-screen duration-200 flex items-end" style={{backgroundColor:color }}>
     <div className="bg-slate-500 fixed flex justify-center gap-3  px-3 py-3 rounded-3xl">
      \
    
           <button style={{backgroundColor:"red"}} className="rounded-xl px-2 py-1 text-white gap-3" onClick={()=>setColor("red")}>Red</button>
           <button style={{backgroundColor:"green"}} className="rounded-xl px-2 py-1 text-white " onClick={()=>setColor("green")}>Green</button>
           <button style={{backgroundColor:"Black"}} className="rounded-xl px-2 py-1 text-white " onClick={()=>setColor("Black")}>Black</button>
           <button style={{backgroundColor:"Blue"}} className="rounded-xl px-2 py-1 text-white " onClick={()=>setColor("Blue")}>Blue</button>
           
      </div>
      </div>
    </>
  );
}

export default App;
  