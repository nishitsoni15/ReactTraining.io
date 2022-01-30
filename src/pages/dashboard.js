import { Header ,CountAuto } from "../modules/index";
import { ButtonComponent, Counter } from "../components/index";
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


class Dashboard extends react.Component{
    // navigate = useNavigate()
    constructor(props){
        super(props)
        this.state={
            text:"count",
            count:0,
            show:false,
            id:'',
            username:'',
            place:'',
            contact:''
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
  
    // noDisplay(){

    //     let count = localStorage.getItem("count")==null?1:localStorage.getItem("count");
    //     count=Number(count)+1;
    //     localStorage.setItem("count", count);
    //     document.getElementById('no').innerHTML = count;
    //   }
    // componentDidMount(){
    //     window.addEventListener('load',this.noDisplay())
    // }
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
         [e.target.place]:e.target.value,
         [e.target.contact]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
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

    render(){
        return(
            <>
            <Header/>
            <h1>Welcome to Dashboard!</h1>
            <div>{this.state.text}</div>
            <Counter Text="Hello I am Nishit Soni"/>
            <button onClick={() =>  this.IncrementFunc()}>Increment</button>
            <button onClick={() => this.DecrementFunc()}>Decrement</button>
            <button onClick={() => this.Reset()}>Reset</button>
            <span>{this.state.count}</span>

            <br/><br/>
             <ButtonComponent  buttonText = "My Button" buttonClass = "green" textColor = "white"/>
             <ButtonComponent  buttonText = "My Primary" buttonClass = "blue" textColor = "white"/>
             <ButtonComponent  buttonText = "My Secondary" buttonClass = "red" textColor = "white"/>
            <ButtonComponent  buttonText = "My Ternary" buttonClass = "black" textColor = "white"/>
            
            <br/><br />
            {/* <CountAuto/> */}
            <br></br>
            <Button variant="contained" onClick={this.createProfile}>Create Profile</Button>
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
           <TextField
            autoFocus
            margin="dense"
            id="place"
            label="Place"
            type="text"
            fullWidth
            variant="standard"
            value={this.state.place}
            onChange={this.handleChange}
          />
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
   

 

  