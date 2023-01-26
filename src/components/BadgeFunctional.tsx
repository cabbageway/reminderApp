import React from 'react';


/* mit rsf einleiten */


function BadgeFunctional(test:{name:string, nr:number}) {
    return (
        
        <div>
            <p>Ausgabe aus der KomponenteBadgeFunctional</p>
            <h1>{test.name} is {test.nr} </h1>
            <hr/>
        </div>
    );
}

export default BadgeFunctional;