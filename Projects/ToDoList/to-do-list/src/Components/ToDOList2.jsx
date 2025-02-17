import React, { useState, useEffect } from "react";
import "./toDoList2.css";

const ToDoList = () => {
  const [toDoText, setToDoText] = useState("");
  // const [toDoItems, settoDoItems] = useState([]);//if we don't use local storage then we can use this

  const [toDoItems, settoDoItems] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  ); //if we use local storage then we can get the data from local storage

  ////something can be done like this also

  // const ititialToDoItems = localStorage.getItem("todos")
  //   ? JSON.parse(localStorage.getItem("todos"))
  //   : []; //localStorage.getItem("todos") retrieves the stored value associated with the key "todos".
  // const [toDoItems, settoDoItems] = useState(ititialToDoItems);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDoItems));
  }, [toDoItems]); // Runs whenever toDoItems changes the ther way to update local storage miss the last elemet of the array because it is not updated in the state yet.

  function handleAddTodo() {
    if (toDoText.trim() === "") return; // Prevent empty tasks
    settoDoItems([...toDoItems, { name: toDoText, status: "TODO" }]);
    setToDoText("");
    // localStorage.setItem("todos", JSON.stringify(toDoItems));
  }

  function deleteToDoItem(index) {
    const newToDoItems = [...toDoItems];
    newToDoItems[index].status = "DONE";
    settoDoItems(newToDoItems);
    // localStorage.setItem("todos", JSON.stringify(toDoItems));
  }

  function setBackToToDo(index) {
    const newToDoItems = [...toDoItems];
    newToDoItems[index].status = "TODO";
    settoDoItems(newToDoItems);
    // localStorage.setItem("todos", JSON.stringify(toDoItems));
  }

  function removeItem(index) {
    const newToDoItems = [...toDoItems]; // Copy the array
    newToDoItems.splice(index, 1); // Remove the item at the given index
    settoDoItems(newToDoItems); // Update state
  }

  return (
    <div className="container">
      <h5> Enter Your Task</h5>
      <div className="input-container">
        <input
          type="text"
          value={toDoText}
          onChange={(e) => setToDoText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      {toDoItems.length > 0 && <h2> To-Do Items</h2>}

      <ul>
        {toDoItems.map((item, index) => (
          <li>
            {item.status === "TODO" ? (
              item.name
            ) : (
              <span style={{ color: "red", textDecoration: "line-through" }}>
                {item.name}
              </span>
            )}

            <div className="btn-container">
              {item.status === "DONE" && (
                <button onClick={() => setBackToToDo(index)}>
                  Move to To-Do
                </button>
              )}

              {item.status === "TODO" && (
                <button onClick={() => deleteToDoItem(index)}>Done</button>
              )}

              <button onClick={() => removeItem(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;

//javaScript function should start with capital letter
//toDoList is wrong name, it should be ToDoList
//lc9 1:48
