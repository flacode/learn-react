/* To specify attributes for JSX
 * use curly braces for js expressions
 * use quotes for string values
 * use camelCase property naming
 * class is reserved word in js, so use className for attributes
 * it is safe to embed user input in JSX. It prevents injection attacks 
*/
import React, {Component} from 'react';

const user = {
    firstName: 'Flavia',
    lastName: 'Nsheme'
};

function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user){
    if (user){
        return (<div><h1>Hello, {formatName(user)}</h1><h2>Good to see you here.</h2></div>);// div tag is very important. Can also have many child JSX
    }
    return (<div><h1>Hello, Stranger</h1><h2>Good to see you here.</h2></div>);
}

class JSXIntro extends Component{
    render(){
        return(
            getGreeting(user)
        );
    }
}

export default JSXIntro;
