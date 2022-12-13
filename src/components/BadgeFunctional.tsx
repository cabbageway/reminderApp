import React from 'react';
import { Reminder, IString } from '../models/Reminder';

/* mit rsf einleiten */


function BadgeFunctional(text:IString) {
    return (
        <div>
            <h1>my name ist Emma {text.text} </h1>
        </div>
    );
}

export default BadgeFunctional;