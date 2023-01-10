import { useState } from "react";
import React from "react";

function Textform(props) {
  const [text, setText] = useState('');
 const handleUpClick=()=>{
    console.log("clicked")
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase" ,"success")
  }
  function handleLoClick(){
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase" ,"success")
  }
  const handleCapitalCaseClick=()=>{
    let newtext=text.slice(0,1).toUpperCase();
    let res=text.slice(1);
    setText(newtext+res);
    props.showAlert("Converted to Capitalcase" ,"success")

  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text); 
    props.showAlert("Copied to Clipboard!", "success");
    
}
const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
}
  const handleClearClick=()=>{
    setText('');
  }
  const handleOnChange=(event)=>{
       setText(event.target.value)
  }
  return (
    <>


    <div className="container" style={{color:props.mode==='dark' ?'white' : '#042743'}}>
      <h1 className="mb-4">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text} onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleCapitalCaseClick}>Convert to CapitalCase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{
          return element.length!==0
        }).length} words and {text.length} characters</p>
        <p>{0.008*text.split(/\s+/).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
    
  );
}

export default Textform;
