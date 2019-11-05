import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: ""
    };
  }

  handleChanges = e => {
    this.setState({
      newTodo: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.newTodo !== "") {
      this.props.addTodo(this.state.newTodo);
      this.setState({
        newTodo: ""
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>New Todo</label>
        <input
          type="text"
          placeholder="New Todo"
          name="task"
          value={this.state.newTodo}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
