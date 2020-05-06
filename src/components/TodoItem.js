import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        return (
            <div style={itemStyle}>
                <p><input type="checkbox"/>{" "}{this.props.todos.title}</p>
            </div>
        )
    }
}

const itemStyle = {
    backgroundColor: "#fff9e8",
    borderBottom: "darkgray dotted 1px",
    padding: "8px"
}

export default TodoItem
