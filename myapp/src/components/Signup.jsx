import { Button, TextField, } from '@mui/material'
import React from 'react'

const Signup = () => {
    return (
        <div><br></br>
            <h1>Signup page</h1>
            <TextField label="username" variant="outlined" /><br></br><br></br>
            <TextField id="outlined-password-input" label="password" type="password"
                autoComplete="current-password" /><br></br><br></br>
            <Button variant="contained">Submit</Button>
        </div >
    )
}

export default Signup