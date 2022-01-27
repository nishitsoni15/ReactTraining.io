import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useLocation,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { validEmail, validPassword } from '../components/Regex';
const LoginPrivatePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const actualData = location.state.getData;
    const [userData,setUserData] = useState({email: "",password:""});
    const[emailErr,setEmailErr] = useState(false);
    const[passwordErr,setPasswordErr] = useState(false);
  const handleChange = (e) => {
    setUserData({
      ...userData,
    
      [e.target.name]:e.target.value,
    });
  }

    const handleSubmit = ()=> {
      if( !validEmail.test(userData.email)){
        setEmailErr(true);
      }
      if(!validPassword.test(userData.password)){
        setPasswordErr(true);
      }
      if(emailErr == true && passwordErr == true){
        const auth = localStorage.setItem('Auth','data');
        navigate("/welcomePage",{state:{userData}})
      }
        
    };

   
  const register = (e) => {
    e.preventDefault();
    navigate('/')
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
      <h1>Welcome to Log In Page:</h1>
      <div>{actualData}</div>
      <TextField type="email" label={'Email="email"'} id="margin-normal" margin="normal"  onChange={handleChange}/>
      {emailErr && <p>Your email is invalid</p>}
      <TextField type="password" label={'Password="password"'} id="margin-normal" margin="normal" onChange={handleChange}/>
      {passwordErr && <p>Your password is invalid</p>}
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      <h2>OR</h2>   
      <Button variant="contained" onClick={register}>Register</Button>
    </Box>
        </>
    )
}
export default LoginPrivatePage;