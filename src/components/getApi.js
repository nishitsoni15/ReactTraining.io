import axios from 'axios';
import { useEffect, useState } from 'react';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const GetApi = () => {
    const[newData,setNewData] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:3001/Profiles')
        .then((response)=>{
        setNewData(response.data)
    })
    .catch(error => {
    console.log(error);
    })
    },[])
    console.log('resp value',newData)

    function createData(id,name,place,contact) {
        return { id, name, place, contact};
      }
      
      const rows = [
        // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        // createData('Eclair', 262, 16.0, 24, 6.0),
        // createData('Cupcake', 305, 3.7, 67, 4.3),
        // createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
      
    return(
        <>
      <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">id</TableCell>
                  <TableCell align="center">name</TableCell>
                  <TableCell align="center">place</TableCell>
                  <TableCell align="center">contact</TableCell>
                  <TableCell align="center">actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {newData.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    {/* <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell> */}
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.place}</TableCell>
                    <TableCell align="center">{row.contact}</TableCell>
                    <TableCell align="center">{<Button variant="contained">Contained</Button> }{<Button variant="outlined">Outlined</Button>}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
    )
}

export default GetApi;


