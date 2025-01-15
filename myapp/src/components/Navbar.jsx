import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <div>
            <AppBar>
            <Toolbar>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA2AqG2qqkADyBRtbBgtULq29ftc_-6lx6cw&s" height="40px"/>&nbsp;
                <h2>darkweb</h2>
                &nbsp;&nbsp;
                <Link to='/hom'>
                    <Button variant="contained">HOME</Button>
                </Link>
                <Link to='/st'>
                    <Button variant='contained'>state</Button>
                </Link>
                &nbsp;
                <Link to='/s'>
                    <Button variant='contained'>signup</Button>
                </Link>

                <Link to='/Log'>
                    <Button variant="contained">Login</Button>
                </Link>
                <Link to='/add'>
                    <Button variant="contained">count</Button>
                </Link>
                <Link to='/rec'>
                    <Button variant="contained">react</Button>
                </Link>
              
                <Link to='/cp'>
                    <Button variant="contained">Table</Button>
                </Link>
            </Toolbar>
        </AppBar>
        </div >
    )
}

export default navbar