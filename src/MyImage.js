
import React, { useState, useEffect, useCallback } from 'react'
import { cleanup } from '@testing-library/react'


export default function MyImage() {
const[length,setLength]=useState(250)
useEffect(()=>
    { if(length>500)
       {
         var a=setInterval(()=>{document.getElementById('pic').style.border="solid red 10px"},100)
         var b=setInterval(()=>{document.getElementById('pic').style.border="solid white 10px"},250) 
       } 
return()=>{
    document.getElementById('pic').style.border="solid 0px"
    clearInterval(a);
    clearInterval(b);
}
      }
,[length])
  return (
      <div id="main" style={{margin:"100px"}}> 
      <h1>UseState,UseEffect H.W.</h1>
          <input id='in' placeholder="Enter the length" style={{display:"block"}} type="number" min="250" onChange={(e)=>setLength(e.target.value)}></input>
          <br/>
    <img id='pic'src="./images/Rachelies.JPG" style={{width:`${length}px`},{ height:`${length}px`}}></img>
    </div>
  );
}