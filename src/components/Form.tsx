import React, {useState} from "react";
import Button from "./Button";
import Input from "./Input";


function Form ()  {
// bei der Eingabe wird der Inhalt des Textfeldes zugewiesen
//const [input, setInput] = React.useState("");
    return (
    <div>
        <hr />
    <Input></Input>
    <Input></Input>
    <button className="btn btn-danger m-2" onClick ={add}>Add Input</button>
    </div>
    
    );
}

const add = () => {
    
}
 
export default Form;