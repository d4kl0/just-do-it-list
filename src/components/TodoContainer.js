import React, { Component } from 'react'
import TodoItem from "./TodoItem.js"



export class TodoContainer extends Component {
    render() {
        return this.props.todos.map(x => <TodoItem key={x.id }todos={x}/>);
    }
}

export default TodoContainer
