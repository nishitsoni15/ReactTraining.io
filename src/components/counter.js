import React, { Component } from "react";


class Counter extends React.Component{
    constructor(props){
        super()
        console.log(props,"class props")
        
    }
    render(){
        return(
            <>
                <button>{this.props.Text}</button>   
            </>
        )
    }
}

export default Counter;