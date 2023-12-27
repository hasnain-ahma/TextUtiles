
import React,{useState} from 'react'

export default function Textform(props) {
const [text, setText] = useState("Enter Text Here 2") 
   const HandleUpClick =()=>{
    console.log('Upper clicked');
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Convert Upper Case Successfully",'Success');
   }
   const HandleLowerClick =()=>{
    console.log('Lower clicked');
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Convert Lower Case Successfully",'Success');
   }
   const HandleCopy=()=>{
    var text =document.getElementById('MyText');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied Successfully",'Success');

   }
   const HandleClearClick =()=>{
    console.log('clear');
    let newText='';
    setText(newText);
    props.showAlert("Cleared Successfully",'Success');
   }
   const HandleExtraSpaces=()=>{
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "))
   props.showAlert("Remove Extra Spaces Successfully",'Success');
   }
   const HandleOnChange =(event)=>{
    console.log('OnChange clicked');
    let newText=event.target.value;
    setText(newText);
   }
   
  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}} >
     
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
  <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}} value={text} id="MyText"  onChange={HandleOnChange}  rows="10"></textarea>
</div>
<button type="button" class="btn btn-primary mx-2" onClick={HandleUpClick}>Convert Upper case</button>
<button type="button" class="btn btn-primary mx-2" onClick={HandleLowerClick}>Convert Lower case</button>
<button type="button" class="btn btn-primary mx-2" onClick={HandleClearClick}>Clear</button>
<button type="button" class="btn btn-primary mx-2" onClick={HandleCopy}>Copy</button>
<button type="button" class="btn btn-primary mx-2" onClick={HandleExtraSpaces}>R space</button>



    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Sumarry;</h2>
        <p>{text.split(" ") .length} words and {text.length} characters..</p>
       <p>{0.008*text.split(" ") .length}  Minutes Read.. </p>
       <h2>
        Prewiew
       </h2>
       <p>{text.length>0? text:"Enter Some Text Here to Preview"}</p>
    </div>
    </>
  )
}

