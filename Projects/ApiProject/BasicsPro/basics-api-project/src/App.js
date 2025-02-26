import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [postData, setPostData] = useState({});

  // Fetch user data (GET request)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error("Fetch Error:", error));
  }, []);

  // Function to send POST request
  const handlePostRequest = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Bret",
        email: "bret@mail.com",
        phone: "1-770-736-8031",
        id: data.length + 1, // Simulating a unique ID
      }),
    };

    fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
      .then((response) => response.json())
      .then((newUser) => {
        setPostData(newUser); // Store the new user
        setData((prevData) => [...prevData, newUser]); // Append to existing data
      })
      .catch((error) => console.error("Post Error:", error));
  };

  return (
    <div className="App">
      <h2>Fetched API Data</h2>
      {data.map((item) => (
        <table key={item.id}>
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        </table>
      ))}

      <h2>Post Request Response</h2>
      {postData && (
        <table>
          <tr>
            <td>{postData.id}</td>
            <td>{postData.name}</td>
            <td>{postData.username}</td>
            <td>{postData.email}</td>
            <td>{postData.phone}</td>
          </tr>
        </table>
      )}

      <button onClick={handlePostRequest}>Add New User</button>
    </div>
  );
}

export default App;
