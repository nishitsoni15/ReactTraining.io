import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router';
import { validUsername, validEmail, validPassword} from '../components/Regex';


const RegisterFormPage = () => {
  const navigate = useNavigate();
  const [values,setValues] = useState({
    username : "",
    email : "",
    password : ""
  });
  const [nameErr,setNameErr] = useState(false);
  const [emailErr,setEmailErr] = useState(false);
  const [passwordErr,setPasswordErr] = useState(false);
  const getData = "data passed successfully!"
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name] : e.target.value,
    })
  }
  const handleUsernameFocus = () => {
    setNameErr(false)
  }

  const handleEmailFocus = () => {
    setEmailErr(false)
  }

  const handlePasswordFocus = () => {
    setPasswordErr(false)
  }
  const handleSubmit = (e) => {
    e.preventDefault();  

    if(!validUsername.test(values.username)){
        setNameErr(true);
    }
    if(!validEmail.test(values.email)){
      setEmailErr(true);
    }
    if(!validPassword.test(values.password)){
      setPasswordErr(true);
    }
    if (nameErr == true && emailErr == true && passwordErr == true){
      navigate('/loginPrivate',{state:{getData}});
    }
    let newVal = localStorage.getItem('list')
    if(newVal == null){
      newVal = []
      console.log('newval type',typeof(newVal))
      newVal.push(values);
      localStorage.setItem('list',JSON.stringify(newVal));
    }else{
      let existVal =  JSON.parse(newVal);
      console.log('exist val',typeof(existVal));
      existVal.push(values);
      console.log('exist val push',existVal)
      localStorage.setItem('list',JSON.stringify(existVal));
    }
   
  }
  const login = (e) => {
    e.preventDefault()
    navigate('/loginPrivate');
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
      <TextField type="text" label={'Name="username"'} onFocus={handleUsernameFocus} id="margin-normal" name="username" margin="normal" value={values.username}  onChange={handleChange}/>
      {nameErr ? <p>usename is invalid!</p> : <p></p>}
      <TextField type="email" label={'Email="email"'} onFocus={handleEmailFocus}  id="margin-normal" name="email" margin="normal"  value={values.email} onChange={handleChange}/>
      {emailErr ? <p>email is invalid!</p> : <p></p>}
      <TextField type="password" label={'Password="password"'} onFocus={handlePasswordFocus}  id="margin-normal" name="password" margin="normal" value={values.password} onChange={handleChange}/>
      {passwordErr ? <p>password is invalid!</p> : <p></p>}
      <Button variant="contained" onClick={handleSubmit}>Register</Button>
      <h2>OR</h2>
      <Button variant="contained" onClick={(e) => login(e)}>Log In</Button>
    </Box>
        </>
    )
}

export default RegisterFormPage;


