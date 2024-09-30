import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../Context/UserContext'

 function Login() {
    const [username, setusername] = useState("")
    const  [password, setpassword] = useState("")
    const {setuser} = useContext(UserContext)
    const handleSubmit = (e) =>{
        e.preventDefault();
        setuser({username,password})
    };

    return (
        <>
        <div>Simplest Login</div>
        <input type="text" value = {username} placeholder='username' onChange={(e)=>setusername(e.target.value)} />
        <input type="text" value = {password} placeholder='password' onChange={(e)=>setpassword(e.target.value)} />
        <button onClick={handleSubmit} >Submit</button>

            
        </>
    )
}
export default Login