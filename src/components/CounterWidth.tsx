import React, {Component} from "react";
import TextAusgabeH1 from "./TextAusgabeH1";



export default class Counter extends React.Component <{}, { count: number, width:number }> {
    constructor() {
        super(0);
        // state initialisiert mit 0
        this.state = {
        count: 0,
        width : 0
       
        }  // Objekt 

    const handleResize = () => {
        this.setState({width: window.innerWidth});
    }
/* 
    this.componentDidMount?() => {
        handleResize();
        window.addEventListener("resize", handleResize);
    } 
*/
  
}
    render() {
        const {count} = this.state;
        console.log(count);
        // const btnText = enabled ? "enabled" : "disabled";
        return (
            <div>
            <p>Komponente CounterWidth: State Current Count wird mit  Button verändert</p>
            <div className="btn btn-primary m-2" onClick={() => {
                this.setState({count: count+1});
            
         }}>
               Plus
            </div>
            <div className="btn btn-primary m-2" onClick={() => this.setState({count: count-1} )}>
               Minus
            </div>
            <h1>Current Count {count}</h1>
            
            <hr />
            </div>
        )

    }
}