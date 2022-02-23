import React, { useState } from "react";
import ToDoList from "./Component/ToDoList";

const App = () => {
  const [todoList, setTodolist] = useState("");
  const [todo, setTodo] = useState([]);

  const [textValid, setTextValid] = useState(true);

  const inputEvent = (e) => {
    if (e.target.value.trim()) {
      setTextValid(false);
      setTodolist(e.target.value);
    }
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

    setTodo((preValue) => {
      return preValue.filter((arrElements, index) => {
        console.log(index, "!==", id, " -> ", index !== id);
        return index !== id;
      });
    });
  };

  // Update Part
  const editItems = (id, newName) => {
    setTodo((allItems) => {
      return allItems.map((todoName, index) => {
        console.log(index, id);
        if (index === id) {
          return newName;
        } else {
          return todoName;
        }
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
          <button onClick={listOfItems} disabled={textValid}></button>

          <ol>
            {/* <li> {todo} </li> */}
            {todo.map((itemval, index) => {
              // Rendering every array values in list
              console.log("[", index, "] => ", itemval);
              return (
                <ToDoList
                  key={index}
                  id={index}
                  item={itemval}
                  onSelect={deleteItems}
                  onEdit={editItems}
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
