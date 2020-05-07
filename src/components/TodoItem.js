import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
    const items = this.props.todos.map(i => <li>{i.title}</li>);
        return (
            <div style={itemStyle}>
                <ul>
                    {items}
                </ul>
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
