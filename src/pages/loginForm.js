import {Div1, Header1 , Para,  Input1, Label, Button} from '../components/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const navigate = useNavigate();
  const initialData = Object.freeze({
    email:"",
    userName:"",
    password:""
  });

  const [formData, updateFormData] = useState(initialData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
    
      [e.target.name]:e.target.value.trim()
    });
  
  }
  let data = formData
  const handleSubmit = (e) => {
      e.preventDefault()
      navigate('/render',{state:{data}})
  }
     return(
        <>
    
      <Div1>
        <Header1>Welcome!</Header1>
        <Para>Sign in to your Account</Para>
        <Label for="email">Email</Label>
        <Input1 type="email" name="email" placeholder="email" id="email" onChange={handleChange}/>
        <Label for="password">User Name</Label>
        <Input1 type="text" name="userName" placeholder="user name" onChange={handleChange}/>
        <Label for="password">Password</Label>
        <Input1 type="password" name="password" placeholder="password" id="password" onChange={handleChange}/>
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
      </Div1>
    
        </>
    )
}

export default Login;