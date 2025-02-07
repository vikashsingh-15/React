import React, {useState} from "react";
const Counter=(props)=>{
    const [count,setCount]=useState(0);
    const[display,setDisplay]=useState(true);
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }
    function toggle(){
        setDisplay(!display);
    }
    return(
        <div>
            <button onClick={toggle}>Toggle Display</button>
            {display && <div>I am Displaying</div>}

            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    );
}
export default Counter;