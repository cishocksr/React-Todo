import React, { Component } from "react";

class TodoForm extends Component {
  render() {
    return (
      <form>
        <label>New Todo</label>
        <input
          type="text"
          placeholder="New Todo"
          id="task"
          name="task"
          //   value={this.state.task}
          //   onChange={this.handleChange}
        />
        <button>Add</button>
        <button>Clear</button>
      </form>
    );
  }
}

export default TodoForm;
