import React from 'react';
interface IString {
    text: string,
    text2:string
}
function TestComponent({text}:IString, {text2}:IString) {
    return (
        <div>
            <hr />
            <p>Test component: Ausgabe vom statischen Text</p>
            <p>Test Component: Ausgabe von Text der der Komponente übergeben wird</p>
            <p>{text}</p>
            <p>{text2}</p>
            <hr />
            <p>Testkomponente: Button mit JS Funktion</p>
            <button className='btn btn-danger' onClick={()=>{
                alert("hi");
            }}>simpleJS</button>
             <button id="btn" className='btn btn-danger m-2' onClick={funki}>JS in der Komponent definiert</button>
            <hr />

        </div>
    );
}
const funki = () => {
    console.log("something");
    const btn = document.getElementById("btn");
    if (btn) {
    btn.style.backgroundColor ="blue";
    }
}
export default TestComponent;