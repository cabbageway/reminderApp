

import React, {Component} from "react";



export default class Button extends React.Component <{}, { enabled: boolean }> {
    constructor() {
        super(0);
        this.state = {enabled: false};  // Objekt 
    }
    render() {
        const {enabled} = this.state;
        console.log(enabled);
        const btnText = enabled ? "enabled" : "disabled";
        return (
            <div>
            <p>State der Komponente Button (über Class) wird immer wieder verändert</p>
            <div className="btn btn-primary" onClick={() => this.setState({enabled: !enabled})}>
                {btnText}
            </div>
            <hr />
            </div>
        )

    }
}