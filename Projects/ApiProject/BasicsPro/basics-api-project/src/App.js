import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    console.log("Updated Data:", data);
  }, [data]);

  return (
    <div className="App">
      <h2>API</h2>
      <div className="DataClass">
        {data.map((item) => (
          <div key={item.id}>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
