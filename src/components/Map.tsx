import React from 'react';
import { PlaneList, PlaneObject, ReminderListProps } from '../models/Reminder';
import BadgeFunctional from './BadgeFunctional';
import Plane from './Plane';

// Was sind Props
// Was ist ein State
function Map( {planes, onRemovePlanes}:PlaneList) {
    return (
        <div>
         <p>aus map</p>
         {planes.map(item => 
             <li key={item.id}><span className='badge bg-secondary'>
                {item.id} - {item.start} - {item.end} 
                </span>
                <button onClick={() =>onRemovePlanes(item.id)} 
        className='btn btn-outline-danger mx-2 rounded-pill'>Delete</button></li>) }
            
        </div>
    );
}

export default Map;