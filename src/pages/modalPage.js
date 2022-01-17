import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';

const ModalPage = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

const [username,setUsername] = React.useState('');
const [email,setEmail] = React.useState('');
const [employeeRole, setEmployeeRole] = React.useState('');  
const [allentry,setAllentry] = React.useState([]);

const handleSubmit = (event) => {
   event.preventDefault();
   const newEntry = {username:username,email:email,employeeRole:employeeRole}
   setAllentry([...allentry,newEntry])
   setOpen(false);
}
    return(
        <>
           <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Form</DialogTitle>
        <DialogContent>
     
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="User Name"
            type="text"
            fullWidth
            variant="standard"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </DialogContent>
        <DialogContent>
     
     <TextField
       autoFocus
       margin="dense"
       id="email"
       label="Email Address"
       type="email"
       fullWidth
       variant="standard"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
     />
   </DialogContent>
   <InputLabel id="demo-simple-select-helper-label">Employee Role</InputLabel>
   <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={employeeRole}
          label="Role"
          onChange={(e) => setEmployeeRole(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Trainee</MenuItem>
          <MenuItem value={20}>Trainer</MenuItem>
          <MenuItem value={30}>Expert</MenuItem>
        </Select>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Subscribe</Button>
        </DialogActions>
      </Dialog>
      <h1>
          Form Data 
      </h1>
      <div>
          {allentry.map((currEle) => {
                  return(
                    <div>
                      <p>{currEle.username}</p>
                      <p>{currEle.email}</p>
                      <p>{currEle.employeeRole}</p>
                    </div>
                  )
          })}
      </div>
      
        </>
    )
}

export default ModalPage;