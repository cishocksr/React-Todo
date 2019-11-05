import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Todo = props => {
  console.log(props);

  const handleClick = e => {
    props.toggleCompleted(props.id);
  };

  return (
    <List
      onClick={handleClick}
      className={`todos${props.completed ? " completed" : ""}`}
    >
      <ListItem center className="todo">
        <ListItemText primary={props.task} />
      </ListItem>
    </List>
  );
};

export default Todo;
