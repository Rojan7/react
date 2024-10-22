import { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/Theme";
import ThemeBtn from "./Component/Theme_Btn";
import Card from "./Component/Card";

function App() {
  const [thememode, setthememode] = useState("light")

  const light_theme = ()=>{
    setthememode("light")
  }
  const dark_theme = ()=>{
    setthememode("dark")
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add (thememode)
    
  }, [thememode])

  return (
    <>
  <ThemeProvider value={{thememode,light_theme,dark_theme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto"><Card/></div>
        </div>
      </div>
      </ThemeProvider>
    </>
  );
}

export default App;
