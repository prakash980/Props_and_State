import React, { Component } from 'react';

class Mounting extends Component{
    componentWillMount(){
        console.log("component Will Mount!");
    }
    componentDidMount(){
        console.log("component did mount");
        this.getData();
    }
    getData =()=>{
        return "hello World!";
    }

    render(){
        return(
            <div><h1>Hello Mounting Methods!</h1></div>
        )
    }
}

export default Mounting;