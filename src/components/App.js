import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  const [num,setTime] = useState(0)
  const [start,setStart] = useState(false)
//  countdown()=>{
//    if(time>0){
//            const id = setInterval(()=>{
//              time = time-1;
//              setTime(time);
//            },1000)
//           }
//  }

function countdown(event){
  let num = parseInt(event.target.value);
  setStart(true);
 num =  Math.floor(num)
  document.getElementById("current-time").innerText=num;
  if(num>0){
                const id = setInterval(()=>{
                num = num-1;
                  setTime(num);
                },1000)
               }
}
  

    
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={countdown} /> sec.
        </h1>
      </div>
    { start?
      <div id="current-time">{num}</div>
      :null
    }
    </div>
  )
}


export default App;
