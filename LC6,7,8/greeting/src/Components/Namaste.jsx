import React,{useEffect} from "react";



const Namaste = () => {

    const[count,setCount]=React.useState(0);
    const handleClick=()=>{
        setCount(count+1);
    };  
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  useEffect(() => {//if i want to call this useEffect only when count is updated then i will put count in dependencied array
    console.log("Component Updated");
  }, [count]);

  return (
    <div>
      <h1>Display Component</h1>
      <button onClick={handleClick}>Clicked {count} times</button>
    </div>
  );
};

export default Namaste;