import { link } from 'fs';
import React from 'react';
import { Reminder, ReminderListProps } from '../models/Reminder';


/* interface Reminder {
    id: number;
    title: string;
} */

// Interface um den Shape of props zu definieren

/* interface ReminderListProps {
    items: Reminder[];
} */
//function ReminderList( props : ReminderListProps) {
// mit object destructuring erhalten wir

function ReminderList({items, onRemoveReminder} : ReminderListProps)  {
    return (
    // Template String 

    <div>
        <p></p>
        <h1 className="text-secondary bg-light">Meine Aufgaben</h1>
    <ul className='list-group'>

        {items.map(item => 
             <li key={item.id}><span className='badge bg-secondary'>
                {item.id} {item.title} 
                </span>
        <button onClick={() =>onRemoveReminder(item.id)} 
        className='btn btn-outline-danger mx-2 rounded-pill'>Delete</button></li>) }
    </ul>
    </div>
    
    );
}

export default ReminderList;