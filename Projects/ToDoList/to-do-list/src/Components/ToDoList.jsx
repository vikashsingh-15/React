import React from "react";
import { useState } from "react";
import "./toDoList.css";

const ToDoList = () => {
  const [toDoText, setToDoText] = useState("");
  const [toDoItems, settoDoItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);

  function handleAddTodo() {
    settoDoItems([...toDoItems, toDoText]);
    setToDoText("");
    // toDoItems.push(toDoText);// this is wrong, we cannt directly push the value in state changes ,we have to call setToDoItems and then do spread opeartor
  }

  function deleteToDoItem(index) {
    // setDoneItems([...doneItems, toDoItems[index]]);
    // toDoItems.splice(index, 1);

    setDoneItems([...doneItems, toDoItems[index]]);
    const newToDoItems = [...toDoItems];
    newToDoItems.splice(index, 1);
    settoDoItems(newToDoItems);
  }

  return (
    <>
      <h5> Enter Your Task</h5>
      <input
        type="text"
        value={toDoText}
        onChange={(e) => setToDoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      {toDoItems.length > 0 && <h2> To DO Items</h2>}

      <ul style={{ listStyleType: "none", width: "20vw" }}>
        {toDoItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteToDoItem(index)}>Done</button>
          </li>
        ))}
      </ul>

      {doneItems.length > 0 && <h2> Done Items</h2>}
      <ul style={{ listStyleType: "none", width: "20vw" }}>
        {doneItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
//javaScript function should start with capital letter
//toDoList is wrong name, it should be ToDoList
