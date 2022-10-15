import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const [text, setText] = useState("Enter text here");
    // text = "new text"; //wrong way of changing state 
    // setText("New Text");
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
                <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p> <b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Your Text To Preview Here"}</p>
            </div>
        </>
  )
}
