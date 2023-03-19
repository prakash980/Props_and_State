import React, { Component } from "react";

class UpdateState extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    handleIncrement=()=>{
        this.setState({count: this.state.count + 1});
    }

    handleDecrement=()=>{
        this.setState({count: this.state.count - 1});
    }

    render()
    {
        return (
            <div>
            <h1>{this.state.count}</h1>
            <button onClick={()=>{this.setState({count:this.state.count + 1})}}>Increment</button>
            <button onClick={()=>{this.setState({count: this.state.count - 1})}}>Decrement</button>
            <br></br>
            <button onClick={this.handleIncrement}>Increment</button>
            <button onClick={this.handleDecrement}>Increment</button>
            </div>
        );
    }
}

export default UpdateState;