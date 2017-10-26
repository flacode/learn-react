/* Example for event handler that takes on an argument
 * Pass an argument to an event handler using any of these 2 methods
 * 1. <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
 * 2. <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
 */

import React, { Component } from 'react';

class Argument extends Component{
    constructor(props){
        super(props);
        this.state = {time: new Date()}
        this.updateTime = this.updateTime.bind(this);
    }

    updateTime(newTime){
        this.setState({time: newTime});
    }

    render(){
        return (
            <div>
                <h2>Time stamp for last button click</h2>
                <p>Last clicked at { this.state.time.toLocaleTimeString() }</p>
                <button onClick = {this.updateTime.bind(this, new Date())} >Click Me to update!</button>
            </div>
        );
    }
}
export default Argument;