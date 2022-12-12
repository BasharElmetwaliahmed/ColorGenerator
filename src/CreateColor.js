import React, { useState ,useEffect} from 'react'

function CreateColor({rgb,weight,hex,index}) {
    const [copied,setCopy]=useState(false);
    const rgbColor=rgb.join(',')
    
    let determineFontColor;
    if(index>7){
        determineFontColor='light-color'
    }
    else{
        determineFontColor=null
    }
   const copyHandler=()=>{
    setCopy(true);
    navigator.clipboard.writeText(hex)
   }
   useEffect(()=>{
   const timeset=setTimeout(()=>{
    setCopy(false)
   },3000)
  return () => clearTimeout(timeset) 
},[copied])


  return (
    <div style={{backgroundColor:`rgb(${rgbColor})` }} className = {determineFontColor} onClick={copyHandler}  >
        <p>{weight}%</p>
        <p>{hex}</p>
        <p>{copied?"Copied":""}</p>
    </div>
  )
}

export default CreateColor