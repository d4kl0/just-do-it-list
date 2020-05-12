import React, { Component } from 'react'
//import PropTypes from 'prop-types';

export class AddTodo extends Component {
    render() {
        return (
            <form style={addTodoStyle}>
                <input style={{flex: 10}} type="text"/>
                <input style={{padding:3,marginLeft:"10px",flex: 1}} type="submit" value="Add Todo"/>
            </form>
        )
    }
}

const addTodoStyle = {
    backgroundColor: "#fff0c9",
    padding: "10px",
    display: "flex"
}

export default AddTodo
