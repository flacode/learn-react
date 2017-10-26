/**
 * form elements maintain their own state and update it based on userinput
 * In react, components state can only be changed via setState()
 * to combine the 2, react state is the "single source of truth"
 * the react component that renders a form controls what happens in that form on subsequent user input( the input form element is called a controlled form element.)
 * for a controlled component, everyState mutation will have an associated handler function, makes event handler straightforward
 * To handle multiple controlled input elements, add a aname attribute for each element and let handler function choose what to do based on event.target.name
 */

import React, { Component } from 'react';


class ReservationForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState(
            {[name]: value}
        );
    }

    handleSubmit(event){
        const status = this.state.isGoing ? 'Going' : 'Not Going';
        alert('Status: '+ status + "\nNo of Guests: " + this.state.numberOfGuests);
        event.preventDefault();
        /* Reset value of input field after submit */
        this.setState(
            {isGoing: true, numberOfGuests: 2}
        );
    }

    /* this.state.value will always be the displayed value making react state the source of truth*/
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> 
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={ this.state.isGoing }
                        onChange={ this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Number of Guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={ this.state.numberOfGuests }
                        onChange={this.handleInputChange }
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default ReservationForm;