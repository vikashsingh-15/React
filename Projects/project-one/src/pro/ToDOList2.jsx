import React, { useState } from "react";
// import "./toDoList2.css";

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

  function handleAddTodo() {
    if (toDoText.trim() === "") return; // Prevent empty tasks
    settoDoItems([...toDoItems, { name: toDoText, status: "TODO" }]);
    setToDoText("");
    localStorage.setItem("todos", JSON.stringify(toDoItems));
  }

  function deleteToDoItem(index) {
    const newToDoItems = [...toDoItems];
    newToDoItems[index].status = "DONE";
    settoDoItems(newToDoItems);
    localStorage.setItem("todos", JSON.stringify(toDoItems));
  }

  function setBackToToDo(index) {
    const newToDoItems = [...toDoItems];
    newToDoItems[index].status = "TODO";
    settoDoItems(newToDoItems);
    localStorage.setItem("todos", JSON.stringify(toDoItems));
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
              <>
                <span style={{ color: "red", textDecoration: "line-through" }}>
                  {item.name}
                </span>
                <button onClick={() => setBackToToDo(index)}>
                  Move again to ToDo
                </button>
              </>
            )}

            {item.status === "TODO" && (
              <button onClick={() => deleteToDoItem(index)}>Done</button>
            )}
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
