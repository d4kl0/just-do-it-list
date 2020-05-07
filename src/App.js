import React, { Component } from 'react'
import './App.css';
import Header from "./components/Header.js"
import TodoItem from "./components/TodoItem.js"
import AddTodo from "./components/AddTodo.js"


export class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    todos: [
    {
      title: "Chop trees",
      id: 1,
      isChecked: false
    },
    {
      title: "Get a snack",
      id: 2,
      isChecked: true
    },
    {
      title: "Code some!",
      id: 3,
      isChecked: false
    }
  ]
  };
}

  render() {
    return (
      <div className="App">
      <Header />
      <TodoItem todos={this.state.todos} />
      <AddTodo />
    </div>
    )
  }
}

export default App;
