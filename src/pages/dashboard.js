import { Header } from "../modules/index";
import react from "react";
import { useNavigate } from 'react-router-dom';
import { GetApi } from '../components/index';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import { validContact,validEmail,validUsername } from "../components/Regex";


class Dashboard extends react.Component{
    constructor(props){
        super(props)
        this.state={
            text:"count",
            count:0,
            show:false,
            id:'',
            username:'',
            email:'',
            contact:'',
            usernameError:false,
            emailError:false,
            contactError:false
        };
    }

    IncrementFunc(){
        setInterval(() => {
            this.setState({count:this.state.count+1})
        },1000)
    }

    // Note - I have displayed increment process automaticlly. we can decrement and reset no by clicking particular button.

    DecrementFunc(){
     this.setState({
         count:this.state.count-1
     })
    }
  
   
    Reset(){
       this.setState({
           count:0
       })
    }

    createProfile = () => {
        this.setState(
            {
                show:true
            }
        )
    }
    handleClose = () => {
        this.setState({
            show:false
        })
    }

    handleChange = (e) => {
        this.setState({
         [e.target.id]:e.target.value,
         [e.target.username]:e.target.value,
         [e.target.email]:e.target.value,
         [e.target.contact]:e.target.value
        })
    }

    componentDidUpdate(){
       this.getData = () => {
            axios.post('http://localhost:3001/Profiles',this.state)
            .then((response)=>{
            console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
        this.setState({
            show:false
        })
    }
    }
   
   handleSubmit = () => {
        if(!validUsername.test(this.state.username)){
            this.setState({
                usernameError:true
            });
        }
        if(!validEmail.test(this.state.email)){
            this.setState({
                emailError:true
            });
        }
        if(!validContact.test(this.state.contact)){
            this.setState({
                contactError:true
            });
        }
        if(this.state.usernameError == true && this.state.emailError == true && this.state.contactError == true){   
          this.getData();
        }
        this.setState({
            id:'',
            username:'',
            email:'',
            contact:'',
        })
    }
    
    

    render(){
        return(
            <>
            <Header/>
            {/* <h1>Welcome to Dashboard!</h1>
            <div>{this.state.text}</div>
            <button onClick={() =>  this.IncrementFunc()}>Increment</button>
            <button onClick={() => this.DecrementFunc()}>Decrement</button>
            <button onClick={() => this.Reset()}>Reset</button>
            <span>{this.state.count}</span> */}
            <br></br>
            <Button variant="contained" onClick={this.createProfile} style={{textAlign:"right"}} ml={5}>Create Profile</Button>
            <br/><br />
            <Dialog open={this.state.show} onClose={this.handleClose}>
        <DialogTitle>Add Profile</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="id"
            label="Id"
            type="number"
            fullWidth
            variant="standard"
            value={this.state.id}
            onChange={this.handleChange}
          />
           <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
            value={this.state.username}
            onChange={this.handleChange}
          />
           {this.state.usernameError && <p>usename is invalid!</p>}
           <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            value={this.state.email}
            onChange={this.handleChange}
          />
           {this.state.emailError && <p>Email is invalid!</p>}
           <TextField
            autoFocus
            margin="dense"
            id="contact"
            label="Contact"
            type="number"
            fullWidth
            variant="standard"
            value={this.state.contact}
            onChange={this.handleChange}
          />
           {this.state.contactError && <p>contact is invalid!</p>}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.handleClose()}>Cancel</Button>
          <Button onClick={this.handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
      <br/><br/>
            <GetApi />
            </>
        )
    }
}

export default Dashboard;
   

 

  