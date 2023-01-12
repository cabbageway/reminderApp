import React from 'react';
import { TestFunktions } from '../models/Reminder';
interface IString {
    text: string,
    text2:string
}
// zwei Schreibweisen
//function TestComponent({text}:IString, {text2}:IString) {
function TestComponent({text, text2, }:IString, {onChangeText}:TestFunktions) {
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
             <button id="btn" className='btn btn-danger m-2' onClick={onChangeText}>in APP definiert</button>
            
            
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