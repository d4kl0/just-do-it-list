import React, { Component } from 'react'
import TodoItem from "./TodoItem.js"
import PropTypes from 'prop-types';


//Array with states recieved as props

/*We map out the array and send it as props to AddTodo
* The title goes to the middle of the <li>'s for display
* The id goes inside the <li> as key to make react stop bitching
* Checkbox added next to title.
        * It should contain the same ID as the key
          so react understands which box is for what <- we do this later
* 
*/

export class TodoContainer extends Component {
    render() {

    //The style recieves a boolean from todos.isChecked
    const itemStyle = (isChecked) => {
        return {
            backgroundColor: "#fff9e8",
            borderBottom: "darkgray dotted 1px",
            padding: "8px",
            textDecoration: isChecked ? "line-through" : "none"
        }
    }

        return (
            <TodoItem todos={this.props.todos.map(todos => 
            <li style={itemStyle(todos.isChecked)} 
            key={todos.id}>
            {/*Checkbox is not functional yet. Should be linked to state.isChecked*/}
            <input type="checkbox"/>{" "}{todos.title}
            </li>)} />
        )
    }
}

export default TodoContainer

TodoContainer.propTypes = {
    todos: PropTypes.array
}