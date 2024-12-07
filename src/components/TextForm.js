import React from "react";

import { useState } from 'react';


export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Button is clicked "+ text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>{
        // console.log("Button is clicked "+ text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleToClear = ()=>{
        let newText = "";
        setText(newText);
    }

    const handleOnChange = (event)=>{
        // console.log("On Chnage");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter your text")
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="container my-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Covert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Covert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleToClear}>Clear</button>

    </div>

    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes is taken to read the text</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
