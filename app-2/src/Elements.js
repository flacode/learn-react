/*
 * Once an element has been rendered, its immutable...
 * React only updates what is necessary 
 * only the text node whose contents has changed gets updated by React DOM. however, componets are reusable
*/
import React, {Component} from 'react';

class Welcome extends Component {
    render() {
      return (
            <h1>Hello, {this.props.name}</h1>
      );
    }
}

class WelcomePeople extends Component{
    render(){
        return(
            <div>
                <Welcome name="Flavia" />
                <Welcome name="Mary" />
            </div>
        );
    }
}

export default WelcomePeople;