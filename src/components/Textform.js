
import React,{useState} from 'react'

export default function Textform(props){

    const handleRepalce=()=>{
        let newText5=text.replaceAll('samar','Here');
        setText(newText5);
    }
    const handleExtraSpeace=()=>{
        let newText4=text.split(/[ ]+/);
        setText(newText4.join(" "));
    }
    const handleCopy=()=>{
        let text=document.getElementById('myBox');
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Copied ","Success");
    }

const handleClearclick=()=>{
    setText(" ");
}
    const handleLwrclick=()=>{
        let newText2=text.toLowerCase();
        setText(newText2)
        props.showAlert(" Converted To Lowercase","Success");
    }
    const handleUprclick=()=>{
        // console.log("Uppeer Case Was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted To Uppercase","Success");

    }

    const handleOnChange=(event)=>{
        // console.log('on CHnage')
        setText(event.target.value);
    }
  const [text,setText]=useState(' ');
  

  return(
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
  <textarea className="form-control"  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} placeholder='Enter Your Text' value={text} id="myBox" rows="8"></textarea>
   </div>
   <button className="btn btn-primary " onClick={handleUprclick}>Convert To UpperCase</button>
   <button className="btn btn-primary mx-2" onClick={handleLwrclick}>Convert To LowerCase</button>
   <button className="btn btn-warning mx-2" onClick={handleClearclick}>Clear Text</button>
   <button className="btn btn-success mx-2" onClick={handleCopy}>Copy Text</button>
   <buton className="btn btn-secondary mx-2" onClick={handleExtraSpeace}>Remove Extra Speaces</buton>
   <buton className="btn btn-secondary mx-2" onClick={handleRepalce}>Replace</buton>
   </div>
   <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
   <h2>Your Text Summary</h2>
   <p>{text.split(" ").length-1} Words and {text.length} Characters</p>
   <p>{0.008* text.split(" ").length} Minites reading</p>
   <h3><strong>{text.length>0?text:"Enter Something Here"}</strong></h3>
   </div>
   
</>
    );
}
