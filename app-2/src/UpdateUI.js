/*
 * 
 * --------------Method 1--------------
 * function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );

    ReactDOM.render(
        element,
        document.getElementById('root')
    );
    }

    setInterval(tick, 1000);
 * 
 * -------------Method 2---------------
 * Using state of a component.
 * 1. If you don’t use something in render(), it shouldn’t be in the state.
 * 2. You can only modify the state directly in the constructor, elsewhere use this.setState()
 * 3. this.props and this.state may be updated asynchronously, you should never rely on their values to determine/set the next state.
 * 4. for no.3 use a second form of state that accepts a function, rather than the object
 * 4. eg this.setState((prevState, props) => ({ counter: prevState.counter + props.increment}));
 * 5. state is local to a component, only accessible form the component that owns and sets it.
 * 6. state can pass down to children as props or content for element from child to parent
*/
import React, { Component } from 'react';

class Clock extends Component{
    constructor(props){// always calls its constructor with props
        super(props);
        this.state = {date: new Date()};
        this.tick = this.tick.bind(this);
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render(){
        return(
            <div>
                <h1>Time clock</h1>
                <h2> It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;