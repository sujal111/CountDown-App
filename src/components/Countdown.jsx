import { useState } from 'react';
import './Countdown.css'

function Countdown(){
const[target,setTarget]=useState(null)
    return(
    <>
    <h1>CountDown Timer App</h1>
    <div id="input">
        <input type="datetime-local" id="datetime"
        onChange={(e)=>{
            setTarget(e.target.value)
        }}
        
        />
        <button id="Submit">Start</button>
    </div>
    </>
    )
}

export default Countdown;