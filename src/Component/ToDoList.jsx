import React, { useState } from "react";

const ToDoList = (props) => {
  const [newItem, setNewItem] = useState("");

  const editValue = (e) => {
    setNewItem(e.target.value);
  };

  return (
    <>
      <div className="todo_style">
        <div className="todo_style">
          <i
            className="fa_times"
            aria-hidden="true"
            onClick={() => {
              props.onSelect(props.id);
            }}
          />

          <li> {props.item} </li>
        </div>

        <div className="todo_style" style={{ justifyContent: "right" }}>
          <input
            type="text"
            placeholder="update a Item"
            value={newItem}
            onChange={editValue}
          />
          <i
            className="fa_edit"
            onClick={() => {
              props.onEdit(props.id, newItem);
            }}
          ></i>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
