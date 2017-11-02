/*
    Practice conditional rendering using the state of isLoggedIn in 2 components
*/
import React, { Component } from 'react';
import Greeting from './Greeting';

class LoginControl extends Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: true};
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false})
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if(isLoggedIn){
            button = <button onClick={ this.handleLogoutClick }>Logout</button>
        } else {
            button = <button onClick={ this.handleLoginClick }>Login</button>
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                { button }
            </div>
        );
    }
}

export default LoginControl;