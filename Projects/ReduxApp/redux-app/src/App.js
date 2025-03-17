import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Increment, Decrement, loggedIn } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>REDUX</h1>
      <h1> The Count is : {counter} </h1>
      <br />
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>

      {isLogged ? <h3>Logged In</h3> : <h3>Logged Out</h3>}
      {isLogged ? (
        <button onClick={() => dispatch(loggedIn(false))}>Logged Out</button>
      ) : (
        <button onClick={() => dispatch(loggedIn(true))}>Logged In</button>
      )}
    </div>
  );
}

export default App;
