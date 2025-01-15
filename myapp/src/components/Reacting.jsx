import { Button } from '@mui/material'
import React, { useState } from 'react'

const Reacting = () => {
    var[name, setname]=useState()
    const input1=()=>{
 setname("angular")
    }
    const input2=()=>{
        setname("machambi")
    }
    const input3=()=>{
        setname("react")
    }
  return (
    <div><h1>reacting names</h1>
    <h1>melow {name}</h1>
    <Button variant="contained" onClick={input1}>angular</Button>&nbsp;&nbsp;
    <Button variant="contained" onClick={input2}>machambi</Button>&nbsp;&nbsp;
    <Button variant="contained" onClick={input3}>react</Button>&nbsp;&nbsp;

    
    
    
    </div>
  )
}

export default Reacting