import React, {useState} from "react";


function Input ()  {
// bei der Eingabe wird der Inhalt des Textfeldes zugewiesen
const [input, setInput] = React.useState("");
    return (
    <input className="form-control m-2" onChange={(e) => setInput(e.target.value)} value={input} 
    placeholder="type something"/>) ;
}
 
export default Input;