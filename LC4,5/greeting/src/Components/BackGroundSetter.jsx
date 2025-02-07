import React from "react";
import { useState } from "react";


const BackGroundSetter = () => {
    const [color,setColor]=useState(localStorage.getItem("color")||"white");
    const style={
       height:"100vh",
        width:"100vw",
        backgroundColor:color, 
    };
    const handleColourChange=(color)=>{
        setColor(color);
        localStorage.setItem("color",color);
    }

    return (
        <div style={style}>
            {/* <button onClick={()=>{setColor("blue");localStorage.setItem("color","blue");}}>Local blue</button> */}
            <button onClick={handleColourChange("blue")}>blue</button>
            {/* //tip: this will not work as it will call the function immediately */}
            <button onClick={()=>handleColourChange("yellow")} >yellow</button>
            <button onClick={()=>handleColourChange("pink")}>pink</button>
            <button onClick={()=>handleColourChange("red")}>red</button>
        </div>);
}

export default BackGroundSetter;