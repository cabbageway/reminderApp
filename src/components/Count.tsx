import { format } from 'path';
import React, { Component } from 'react'

interface Props {
    
}
 

interface State {
    

}


 
class Count extends React.Component<Props, State> {
    state = { count  : 0,
    imageUrl : "https://picsum.photos/200"}

    
    handleIncrement = () => {

        this.setState({count: this.state.count + 1  })
        console.log (this, this.state.count);
    }
    render() { 
        return ( 
            <div>
                <img src={this.state.imageUrl} alt="" />
                <span className='btn btn-primary m-2'> {this.state.count}</span>
                <h2> Count ist zu Beginn {this.formatCount()}</h2>
                <button className="btn btn-primary" onClick={this.handleIncrement}>Inc</button>
            </div>
         );
    }
    formatCount = () => {
        const {count} = this.state;
        return count === 0 ? "Zero" : count; 
    }
}
 
export default Count;