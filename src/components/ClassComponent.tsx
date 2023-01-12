import React, { Component } from 'react'
interface Props {
    
}
 
interface State {
    
}
 
class ClassComponent extends React.Component<Props, State> {
    state = {   }
    constructor(props:Props) {
        super(props);
        console.log("Constructor durchlaufen");
    }
    componentDidMount(): void {
       console.log("ClassComponent mounted");
    }
    render() { 
        console.log ("Componente rendered");
        return (
            <div>
            <h1> all done</h1>
            </div>
          );
    }
}
 
export default ClassComponent;