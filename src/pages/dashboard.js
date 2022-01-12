import { Header ,CountAuto } from "../modules/index";
import { Button, Counter } from "../components/index";
import react from "react";


// const Dashboard = () => {


//     return(
//         <div>
//             <Header/>
//             {/* <Counter Text="Counter Button"/> */}
//             {/* <Button  buttonText = "My Button" buttonClass = "varient"/>
//             <Button  buttonText = "My Primary" buttonClass = "varient1"/>
//             <Button  buttonText = "My Secondary" buttonClass = "varient2"/>
//             <Button  buttonText = "My Ternary" buttonClass = "varient3"/> */}
//             <h1>Welcome to Dashboard</h1>
//         </div>
//     )
// }

// export default Dashboard;

class Dashboard extends react.Component{
    constructor(){
        super()
        this.state={
            text:"count",
            count:0
        }
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
             <Button  buttonText = "My Button" buttonClass = "green" textColor = "white"/>
             <Button  buttonText = "My Primary" buttonClass = "blue" textColor = "white"/>
             <Button  buttonText = "My Secondary" buttonClass = "red" textColor = "white"/>
            <Button  buttonText = "My Ternary" buttonClass = "black" textColor = "white"/>
            
            <br/><br />
            <CountAuto/>
            </>
        )
    }
}

export default Dashboard;
   

 

  