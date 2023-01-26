import React, { useState, useEffect } from 'react';
import { ITest } from '../models/Reminder';
/* interface IString {
    text: string,
    text2:string
}*/
// zwei Schreibweisen
//function TestComponent({text}:IString, {text2}:IString) {
function TestComponent() {
    let [number, setNumber] = useState(0);
    const [count,setCount] = useState(0);
    // Similar to componentDidMount and componentDidUpdate:  // Update the document title using the browser API
    useEffect(() => { document.title = `clicks ${count} times`;  });
    return (
        <div>
            <hr />
            <p><b>"Test component":</b><br />
            Ausgabe von Text, der der Komponente übergeben wird (Interface) 
            und Buttons</p>
           
            
            <p>Button lokal in Komponente mit JS Funktion</p>
            <button className='btn btn-danger' onClick={()=>{
                alert("hi");
            }}>simpleJS</button>
             <button id="btn" className='btn btn-danger m-2' onClick={funki}>JS lokal in der  Komponente</button>
          
             <br />
             <input type="number" onChange={e => {setNumber(parseInt(e.target.value)); 
             console.log(number);
            
             setCount(number);
            }}/>
             <input type="number" />
             <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button> und schau auf den Tab im Browser
           

        </div>
    );
}
let toggle=true;


const funki = () => {
    console.log("something");
    const btn = document.getElementById("btn");
    if (btn && toggle) {
    btn.style.backgroundColor ="blue";
    toggle = !toggle;
    }
    else if (btn && !toggle) {
        btn.style.backgroundColor ="red";
        toggle = !toggle;
        }
}
export default TestComponent;