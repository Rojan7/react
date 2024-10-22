import React, { createContext, useContext } from "react";
export const ThemeContext = 
createContext ({
    thememode : "light",
    dark_theme : ()=>{},
    light_theme : ()=>{} 
})
export const ThemeProvider = ThemeContext.Provider
export default function useTheme (){
    return useContext (ThemeContext)//custom hook only,
}