import React, { useState } from "react";
import ToDoList from "./Component/ToDoList";

const App = () => {
  const [todoList, setTodolist] = useState("");
  const [todo, setTodo] = useState([]);

  const inputEvent = (e) => {
    setTodolist(e.target.value);
  };

  const listOfItems = () => {
    setTodo((oldItems) => {
      // By accessing old state we made it an Array to store old + new values
      return [...oldItems, todoList]; // Combination with old items with new items
    });
    setTodolist(""); // Emptying after getting new data
  };

  // Delete Part
  const deleteItems = (id) => {
    console.log("clicked");

    setTodo((oldItems) => {
      return oldItems.filter((arrElements, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> To Do List </h1>
          <br />
          <input
            type="text"
            placeholder="Add a Item"
            onChange={inputEvent}
            value={todoList}
          />
          <button onClick={listOfItems}> + </button>

          <ol>
            {/* <li> {todo} </li> */}
            {todo.map((itemval, index) => {
              // Rendering every array values in list
              return (
                <ToDoList
                  key={index}
                  id={index}
                  item={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
