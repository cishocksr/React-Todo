// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <Todo
          id={todo.id}
          key={todo.id}
          task={todo.task}
          completed={todo.completed}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoList;
