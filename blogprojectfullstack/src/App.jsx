import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authservice from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authservice.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return (
    <div className="App">
      {loading ? <div>Loading...</div> : <Header />}
      <main>
       <h1 className="text-3xl bg-red-500">Namo Narayana</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
