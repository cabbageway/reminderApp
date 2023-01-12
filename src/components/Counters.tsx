import React, { useState } from 'react';
import Counter3 from './Counter3';

interface ICount {
    id:number,
    value:number
}


//function Counters() {
    const Counters:React.FC = () => {
    
        const COUNTER : ICount[] = [
        {id:1, value:1},
        {id:2, value:2},
        {id:3, value:3},
        {id:4, value:4}
       ];
  

    return (
        <div>
      <Counter3 counters={COUNTER}></Counter3>   
 
        </div>
    );
}

export default Counters;