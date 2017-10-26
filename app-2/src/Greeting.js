/* Conditional rendering of components */
import React, { Component } from 'react';

class Greeting extends Component{
    render(){
        const isLoggedIn = this.props.isLoggedIn; // constants in the constructor lead to errors
        if (isLoggedIn){
            return (<h1>Welcome back!</h1>);
        }
        return (<h1>Please sign up.</h1>);
    }
}

export default Greeting;