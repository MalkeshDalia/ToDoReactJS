import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <i
          className="fa fa_times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <li> {props.item} </li>
      </div>
    </>
  );
};

export default ToDoList;
