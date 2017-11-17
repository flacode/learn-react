import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
            name: ''
        }
        this.addItem = this.addItem.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }
    /* Update items in state */
    addItem(){
        if (!this.state.name.length){
            return;
        }
        const newItem = {
            name: this.state.name,
            id: Date.now()
        }
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            name: ''
        }));
    }

    /* Update name state  using value from AddTodo */
    handleTextChange(name){
        this.setState({
            name: name
        });
    }

    /* pass and change the state to child components thru props */
    render(){
        return(
        <div>
            <TodoList items={this.state.items} />
            <AddTodo addItem={this.addItem} handleTextChange={this.handleTextChange} value={this.state.name} />
        </div>);
    }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));