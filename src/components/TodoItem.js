import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {



//prop.todos recieved from TodoContainer as array
    render() {
        return (
            <div>
              <p>{this.props.todos}</p>
            </div>
        )
    }
}

export default TodoItem

TodoItem.propTypes = {
    todos: PropTypes.array
}