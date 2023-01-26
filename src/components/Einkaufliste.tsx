import React, { useState, useEffect } from 'react';
import { ITest } from '../models/Reminder';



function Einkaufsliste({ onChangeNumber} : ITest) {
    
    
    let [title, setTitle] = useState("Text einfügen");
    let [number, setNumber] = useState(0);

 
   
    return (
        <div>
            <hr />
            <p>Komponente Einkaufsliste </p>
            <label>Obst</label>
            <input className='form-control' type="number" onChange={e => {setNumber(parseInt(e.target.value)); 
              onChangeNumber(number);
             
           
            }}/>
            <br/>
             <label>Gemüse</label>
             <input className='form-control' type="number" />
            <hr/>
        </div>
    );
}

export default Einkaufsliste;