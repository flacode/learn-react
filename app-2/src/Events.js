/*
 * 1. Events named using camelCase eg  onClick, className
 * 2. Can not return false to prevent default behavior, must call preventDefault() explicitly.
 *  ---------eg
 *    function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked.');
       }
 * In ES6 class, its a common pattern for an even handler to be a method in a class
 * Toggle the value of a button when clicked
 */
import React, { Component } from 'react';

class Toggle extends Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
        this.updateToggle = this.updateToggle.bind(this);
    }

    updateToggle(){
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn // get the property state you want to change, get the prevState property
        })
        );
    }

    render(){
        return(
            <button onClick={this.updateToggle}>
                { this.state.isToggleOn ? 'On': 'Off'}
            </button> // the use of this in javascript is undefined. So we have to bind it in line 18.
        );
    }
}

export default Toggle;