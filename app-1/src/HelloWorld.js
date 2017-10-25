import React, { Component }  from 'react';
import './HelloWorld.css';

class HelloWorld extends Component{

    constructor(props){
        super(props); // constructor for parent
        this.state = {greeting: 'Hello'};
        this.frenchify = this.frenchify.bind(this);// bind the event to an instance This tells Javascript “Hey, any time you see a reference to this inside of the frenchify function, I want you specifically to refer to ME.” 
        this.removeGreeting = this.removeGreeting.bind(this);
    }

    frenchify(){
        this.setState({greeting: 'Bonjour'});
    }

    removeGreeting(){
        this.props.removeGreeting(this.props.name);
    }

    render(){
        return (
        <div className="HelloWorld">
            {this.state.greeting} { this.props.name }
            <br/>
            <button className="frenchify" onClick={ this.frenchify }>Frenchify!</button>
            <button className="remove" onClick={this.removeGreeting}>Remove Me!</button>
            </div>
        );
    }
}

export default HelloWorld;