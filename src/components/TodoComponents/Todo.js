import React from "react";

const Todo = props => {
  console.log(props);

  const handleClick = e => {
    props.toggleCompleted(props.id);
  };

  return (
    <div
      onClick={handleClick}
      className={`todos${props.completed ? " completed" : ""}`}
    >
      <p>{props.task}</p>
    </div>
  );
};

export default Todo;
