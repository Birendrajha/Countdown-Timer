import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  const [time,setTime] = useState()
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
  
  //let tym = parseInt(event.target.value);
  let tym = event.target.value;
  //setTime(tym);
  if(tym ==0){
    setTime(0);
  }
 tym  =  Math.floor(tym);
     setTime(tym);
     setStart(true);
 
                const id = setInterval(()=>{
                  if(tym>0){
                tym = tym-1;
                  setTime(tym);
                  }
                },1000)
               }

  

    
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={countdown} /> sec.
        </h1>
      </div>
    { start?
      <div id="current-time">{time}</div>
      :null
    }
    </div>
  )
}


export default App;
