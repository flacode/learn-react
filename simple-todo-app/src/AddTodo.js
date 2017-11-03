import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /* Update status by calling a parent method through props */
    handleChange(e){
        const name = e.target.value;
        this.props.handleTextChange(name);
    }

    /* let parent method update item list */
    handleSubmit(e){
        e.preventDefault();
        this.props.addItem();
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.props.value}
                    onChange={this.handleChange}
                />
                <button>
                    Add 
                </button>
            </form>
        );
    }
}

AddTodo.propTypes = {
    addItem: PropTypes.func.isRequired,
    handleTextChange: PropTypes.func.isRequired,
    value: PropTypes.string
}