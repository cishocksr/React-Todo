import React, { Component } from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const data = [
  {
    task: "Read the TK",
    id: 0,
    completed: false
  },
  {
    task: "Complete Todo Project",
    id: 1,
    completed: false
  },
  {
    task: "Refactor last Spring",
    id: 2,
    completed: false
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: data,
      otherState: "this other state"
    };
  }

  toggleCompleted(todoId) {
    this.setState({
      todos: this.state.todos(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  }

  clearCompleted = () => {
    console.log("clearCompleted");
    this.ListeningStateChangedEvent({
      todos: this.state.groceries.filter(todo => {
        return !todo.completed;
      })
    });
  };

  addTodo = newTodo => {
    console.log("add item: ", newTodo);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: newTodo,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log("...rendering");
    return (
      <div>
        <div className="header">
          <h2>Todo List</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
