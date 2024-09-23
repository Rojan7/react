import { useCallback, useEffect, useState,useRef } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [character_allowed, setcharacter_allowed] = useState(false);
  const [number_allowed, setnumber_allowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number_allowed) str += "0123456789";
    if (character_allowed) str += "!@#$%^&*()";
    for (let i = 1; i <= length; i++) {
      let character = Math.floor(Math.random() * str.length);
      pass += str.charAt(character);
    }
    setpassword(pass);
  }, [length, character_allowed, number_allowed, setpassword]);

  useEffect(() => {
    passwordgenerator();
  }, [length, character_allowed, number_allowed]);

  const PasswordRef = useRef (null)
   
  const PasswordTipneFunction = useCallback(()=>{
    PasswordRef.current?.select()
    window.navigator.clipboard.writeText(password)

  },[password])


  return (
    <>
      <div className="bg-slate-500 w-full h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-white mb-6">Password Generator</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          {/* Password Display */}
          <input
            type="text"
            value={password}
            placeholder="Generated Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-inner text-center text-lg font-medium"
            readOnly
            ref = {PasswordRef}
          />

          {/* Copy Button */}
          <button onClick={PasswordTipneFunction} className="mb-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 shadow-lg">
            Copy
          </button>

          {/* Range Input */}
          <div className="flex flex-col mb-6">
            <label htmlFor="range" className="text-gray-700 font-medium mb-2">
              Password Length: {length}
            </label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setlength(Number(e.target.value))}
              className="w-full h-2 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Checkboxes */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="numberinput"
                defaultChecked={number_allowed}
                onChange={() => setnumber_allowed((prev) => !prev)}
                className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="numberinput" className="text-gray-700">Include Numbers</label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="charinput"
                defaultChecked={character_allowed}
                onChange={() => setcharacter_allowed((prev) => !prev)}
                className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="charinput" className="text-gray-700">Include Special Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
