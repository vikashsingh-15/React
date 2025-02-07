import React,{useState} from "react";

export default function Input() {
    const [text,setText] = useState("");

    function handleChange(event) {
        setText(event.target.value);
    }
    return (
        <div>
        <input type="text" value={text} onChange={handleChange}/>
        {text}
        </div>
    );
}
