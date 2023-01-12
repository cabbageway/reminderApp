import React, {Component} from "react";

export default class Counter extends React.Component <{}, { text: string }> {
    constructor() {
        super(0);
        // state initialisiert mit Leerstring
        this.state = {
        text:""
    };  // Objekt 
    }
    render() {
        const {text} = this.state;
        console.log(text);
       
        return (
            <div>
            <h1>Textinhalt: {text}</h1>
            <hr />
            </div>
        )

    }
}