/* Compose a component from a list 
 * “key” is a special string attribute you need to include when creating lists of elements.
 * keys help react identify which items have been added or removed ie give element stable identity
 * best to use a string for a key, you can use ids from your data also, index when items do not have stable IDS
 * 1. const todoItems = todos.map((todo) =>
        <li key={todo.id}>
            {todo.text}
        </li>
      );
 * 2. const todoItems = todos.map((todo, index) =>
        // Only do this if items have no stable IDs
        <li key={index}>
            {todo.text}
        </li>
       );
 * not recomended to use indexes for keys if items can reorder, would slow app
 * keys only make sense in the context of the surrounding array
 * RULE: Items inside map() calll need keys
 * keys must be only unique among siblings, do not need to be globally unique
 * keys only serve as a hint. They do not get passed to components.
 * If you need the value in your component, pass it explicitly as a prop with a different name
 * 
 * const content = posts.map((post) =>
    <Post
        key={post.id}
        id={post.id}
        title={post.title} />
    );
 * Component can only read props.id, not props.key

*/

import React, { Component } from 'react';

class ListItems extends Component {
    render(){
        const numbers = this.props.numbers;
        const listItems = numbers.map((number) =>
            <li key={ number.toString() }>{ number }</li>
        );

        return(
            <ul>{ listItems }</ul>
        );
    }
}

export default ListItems;