import { Button } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
  var [val, setval] = useState(0)
  const add=()=>{
    setval(val+1)
  }
  const sub=()=>{
    setval(val-1)
  }
  return (
    <div>
<h1>Counter{val}</h1>
<Button variant="contained" onClick={add}>Add</Button><br></br><br></br>
<Button variant="contained" onClick={sub}>Sub</Button>

    </div>
  )
}

export default Counter