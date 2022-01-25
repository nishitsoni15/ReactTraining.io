import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router';


const RegisterFormPage = () => {
  const navigate = useNavigate();
  const[userName,setUserName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  // const[allData,setAllData] = React.useState([]);
  const getData = "data passed successfully!"

  const login = (e) => {
    e.preventDefault()
    navigate('/loginPrivate');
  }

  const registerData = (e) => {
    e.preventDefault();
    const newData = {username:userName,email:email,password:password}
    // setAllData([...allData,newData])
    console.log(newData)
    let newVal = localStorage.getItem('list')
    if(newVal == null){
      newVal = []
      console.log('newval type',typeof(newVal))
      newVal.push(newData);
      localStorage.setItem('list',JSON.stringify(newVal));
    }else{
      let existVal =  JSON.parse(newVal);
      console.log('exist val',typeof(existVal));
      existVal.push(newData);
      console.log('exist val push',existVal)
      localStorage.setItem('list',JSON.stringify(existVal));
    }
    navigate('/loginPrivate',{state:{getData}});
  }

    return(
        <>
         <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        '& .MuiTextField-root': { width: '25ch' },
      }}
    >
      <h1>Welcome to Sign up Page:</h1>
      <TextField type="text" label={'Name="username"'} id="margin-normal" margin="normal" value={userName}  onChange={(e) => setUserName(e.target.value)}/>
      <TextField type="email" label={'Email="email"'} id="margin-normal" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <TextField type="password" label={'Password="password"'} id="margin-normal" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <Button variant="contained" onClick={registerData}>Register</Button>
      <h2>OR</h2>
      <Button variant="contained" onClick={(e) => login(e)}>Log In</Button>
    </Box>
        </>
    )
}

export default RegisterFormPage;


