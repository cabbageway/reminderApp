import React from 'react';


/* Inline Definition */
function TestEinfacheDatentypen(test:{name:string, nr:number}) {

    return (
        <div>
             <hr />
            <p>Ausgabe aus Komponente einfache Datentypen <br />
           {test.name} {test.nr}  </p>
         
        </div>
    );
}

interface IProps {
    name: string,
    nr : number
}

/* Datentyp mit Interface */
function TestEinfacheDatentypen2(test:IProps){
    
    return (

        <div>
            <hr />
            <p>Ausgabe aus Komponente einfache Datentypen <br />
           Mein Name: {test.name} {test.nr} </p>
        </div>
    );
}

export default TestEinfacheDatentypen;