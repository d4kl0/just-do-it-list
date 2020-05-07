import React, { Component } from 'react'

export class TodoItem extends Component {
    itemStyle = (i) => {
        return {
            backgroundColor: "#fff9e8",
            borderBottom: "darkgray dotted 1px",
            padding: "8px",
            textDecoration: i ? "line-through" : "none"
        }
    }

    render() {
    const items = this.props.todos.map(i => <li style={this.itemStyle(i.isChecked)} key={i.id}><input type="checkbox"  />{" "}{i.title}</li>);
        return (
            <div>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
}

export default TodoItem
