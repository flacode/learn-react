import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoList extends Component{
    render(){
        const items = this.props.items;
        return(items.length ?
            <div>
                <h2> Todo items </h2>
                <ol>
                    {this.props.items.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ol>
            </div> : <p>Todo list is empty, please add more items.</p>
        );
    }
}

TodoList.propTypes = {
    items: PropTypes.array.isRequired
}