import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Api = () => {
    const [data,setdata]=useState([])
axios.get("https://jsonplaceholder.typicode.com/users")
.then((res) => {
    console.log(res.data)
    setdata(res.data)
})
  return (
    <div>
        &nbsp;
      <h1>table</h1>
      <TableContainer>
        <Table>
            <TableHead>
               
                <TableRow>
                    <TableCell>name</TableCell>
                    <TableCell>email</TableCell>
                    <TableCell>ph no.</TableCell> 
                </TableRow>
                </TableHead>
                <TableBody>
                {
                    data.map((val) => {
                        return(
                        <TableRow>
                            <TableCell>(val.name)</TableCell>
                            <TableCell>(val.email)</TableCell>
                            <TableCell>(val.address.city)</TableCell>
                        </TableRow>
                        )
                    })
                }
                </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Api
