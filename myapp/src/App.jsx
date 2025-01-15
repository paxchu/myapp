import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import State from './State'
import Reacting from './components/Reacting'
import Counter from './Counter'
import Api from './components/Api'
import Home from './components/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>DARK WEB</h1>
      <h4>Sell Your Kidneys In Its Oirginal Worth</h4>
      <h6>(100% riyal)</h6>
 
      <Navbar></Navbar>

      
     
        
        
      <Routes>
        <Route path="/log" element={<Login />} />
        <Route path="/s" element={<Signup />} />
        <Route path="/st" element={<State />} />
        <Route path="/add" element={<Counter />} />
        <Route path="/rec" element={<Reacting />} />
        <Route path="/hom" element={<Home />} />
        <Route path="/cp" element={<Api />} />
      </Routes >


  
    </>
  )

}

export default App
