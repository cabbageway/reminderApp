import React from 'react';

interface IProps {
    name: string,
    nr : number
}
/* Inline Definition */
function TestEinfacheDatentypen2(test:{name:string, nr:number}) {
    return (
        <div>
           {test.name} {test.nr} 
        </div>
    );
}

/* Datentyp mit Interface */
function TestEinfacheDatentypen(test:IProps){
    return (
        <div>
           {test.name} {test.nr} 
        </div>
    );
}

export default TestEinfacheDatentypen;