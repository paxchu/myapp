import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'


const State = () => {
    var [name, setname] = useState("inkipinkiponki")
    var [val, setval] =  useState()

    const handleinput = (e) => {
        console.log(e.target.value)
        setname(e.target.value)
    }
    const subhandler = () => {
        console.log('hai'+name)
        setval(name)
    }
    return (
        <div><h1>OOOO BHAIII AAVOO AAVVOOOO</h1>
            <h3>YALLAH YALLAAH HABIBIITIII DANCE LIEK THEISSS</h3>
            <img src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2018/05/pjimage-1-1527156121.jpg"/>


<h2>welcome{val}</h2>
<TextField variant='outlined' onChange={handleinput} /><br></br><br></br>
<Button variant='contained'onClick={subhandler}>submit </Button>
        </div>
    )
}

export default State