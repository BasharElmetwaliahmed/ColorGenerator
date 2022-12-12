import React, { useRef, useState } from 'react'
import './App.css'
import Values from 'values.js'
import CreateColor from './CreateColor';
function App() {
  const [listColors,setList]=useState([]);
  const [error,setError]=useState(false);
 const ColorRef=useRef();


const SubmitHandler=(e)=>{
  e.preventDefault();
  try{
    const colors=new Values(ColorRef.current.value).all(12);
    setList(colors)
    console.log(colors)
  }
  catch(error){
    setError(true);
  }
}  

  return (
    <div className='app-container'>
   <h1>Color Generator</h1>
   <form className='form-generator' onSubmit={SubmitHandler}>
    <h2>Genrate Color</h2>
    <input type='input' placeholder='#222' ref={ColorRef} className={error?'errorColor':null}></input>
    <button type='submit'>Genrate</button>

   </form>

   <div className='colors-container'>
    
   {listColors.map((color,index)=> <CreateColor {...color} index={index} hex={`#${color.hex}`}  key={index}></CreateColor>)}
   
   </div>


    </div>
  )

  }
export default App
