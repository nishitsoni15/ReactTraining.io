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
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { getByPlaceholderText } from '@testing-library/dom';
import { ListItem } from '@mui/material';

const GetApi = () => {
    const[newData,setNewData] = useState([]);
    const[open,setOpen] = useState(false);
    const[id,setId] = useState('');
    const[username,setUserName] = useState('');
    const[place,setPlace] = useState('');
    const[contact,setContact] = useState('');
    useEffect(() =>{
        getData();
    },[])
    console.log('resp value',newData)
    function getData(){
        axios.get('http://localhost:3001/Profiles')
        .then((response)=>{
        setNewData(response.data)
        // setId(response[0].id)
        // setUserName(response[0].username)
        // setPlace(response[0].place)
        // setContact(response[0].contact)     
    })
    .catch(error => {
    console.log(error);
    })
    }
    // function createData(id,name,place,contact) {
    //     return { id, name, place, contact};
    //   }
      
      const rows = [
        // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        // createData('Eclair', 262, 16.0, 24, 6.0),
        // createData('Cupcake', 305, 3.7, 67, 4.3),
        // createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
    

      const createModal = (id,e) => {
          e.preventDefault();
          setOpen(true)
        console.log('same value', newData[id-1])
          let item = newData[id-1]
          setId(item.id)
        setUserName(item.username)
        setPlace(item.place)
        setContact(item.contact)
      }

      const handleClose = () => {
          setOpen(false)
      }

      function deleteEntry(id,e) {
          e.preventDefault();
        axios.delete(`http://localhost:3001/Profiles/${id}`)
        .then((resp) => {
            console.log(resp)
        })
        .catch((error) => {
            console.log(error)
        })  
        getData();   
  }

    const editUSer = () => {
        let item1 = {id,username,place,contact}
        fetch(`http://localhost:3001/Profiles/${id}`,{
            method:'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item1)
        })
        .then((result) => {
            result.json().then((resp) => {
                console.log(resp.data)
            })
        })
        .catch((error) => {
            console.log(error)
        })  
        getData();  
        setOpen(false);
    }
      
    return(
        <>
      <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">id</TableCell>
                  <TableCell align="center">username</TableCell>
                  <TableCell align="center">place</TableCell>
                  <TableCell align="center">contact</TableCell>
                  <TableCell align="center">actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {newData.map((row) => (
                  <TableRow
                    key={row.username}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    {/* <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell> */}
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.username}</TableCell>
                    <TableCell align="center">{row.place}</TableCell>
                    <TableCell align="center">{row.contact}</TableCell>
                    <TableCell align="center">{<Button variant="contained" onClick={(e) => createModal(row.id,e)}>Edit</Button> } &nbsp;{<Button variant="outlined" onClick={(e) => deleteEntry(row.id,e)}>Delete</Button>}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="id"
            label="Id"
            type="number"
            fullWidth
            variant="standard"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Userame"
            type="text"
            fullWidth
            variant="standard"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="place"
            label="Place"
            type="text"
            fullWidth
            variant="standard"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="contact"
            label="Contact"
            type="number"
            fullWidth
            variant="standard"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={editUSer}>Edit</Button>
        </DialogActions>
      </Dialog>
        </>
    )
}

export default GetApi;


