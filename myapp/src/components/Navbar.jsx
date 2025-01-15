import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <div><AppBar>
            <Toolbar>
                <h2>darkweb</h2>
                &nbsp;&nbsp;
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

            </Toolbar>
        </AppBar>
        </div >
    )
}

export default navbar