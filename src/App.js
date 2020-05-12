import React, { Component } from 'react'
import './App.css';
import Header from "./components/Header.js"
import TodoContainer from "./components/TodoContainer.js"
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

/*
Should search for help on this one!

onChangeHandler = (event) => {
  if (this.state.todos.isChecked === true) {
   return this.setState({todos: isChecked = false})
  } else (this.state.todos.isChecked === false) ()
  return this.setState({todos: isChecked = true})
  }
  }
*/

//We send the states as props to the TodoContainer
  render() {
    return (
      <div className="App">
      <Header />
      <TodoContainer todos={this.state.todos} /*onChangeHandler={this.onChangeHandler}*/ />
      <AddTodo />
    </div>
    )
  }

}
export default App;
