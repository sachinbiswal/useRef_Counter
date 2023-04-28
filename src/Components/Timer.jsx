import React, { useRef } from 'react'
import { useState } from 'react'
const Timer = () => {
    const [timer,setTimer]=useState(0);
    let timerId=useRef();
    const startTimer=()=>{
        timerId.current = setInterval(()=>{
            setTimer((prev)=> prev+1)
        },1000)
    }
    const stopTimer=()=>{
        clearInterval(timerId.current);
    }
  return (
    <div>
        <h2>The Timer is :{timer}</h2>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
    </div>
  )
}

export default Timer