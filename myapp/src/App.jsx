import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import State from './State'



function App() {
  const [count, setCount] = useState(0)

  return (
    <><body bgcolor="lightyellow">
      <h1>DARK WEB</h1>
      <h4>Sell Your Kidneys In Its Oirginal Worth</h4>
      <h6>(100% riyal)</h6>



      <Navbar></Navbar>

      <Routes>
        <Route path="/log" element={<Login />} />
        <Route path="/s" element={<Signup />} />
        <Route path="/st" element={<State />} />
      </Routes >


    </body >
    </>
  )

}

export default App
