import React from 'react';
import CountItem from './CountItem';
interface ICount {
    id:number,
    value:number
}

interface CountProps {
    counters: ICount[];
}
function Counter3({counters}:CountProps) {
    if (!counters?.length) {
        return <div>
            <h1>no counters found</h1>
        </div>
    }
    return (
        <React.Fragment>
        {counters.map(({ id, value }) => (
            <CountItem
             id={id} 
             value={value} 
           /> 
          ))} 
        </React.Fragment>
    );
}

export default Counter3;