import React, { useState } from 'react';
import { ReminderListProps } from '../models/Reminder';

interface NewReminderProps {
    onAddReminder: (title:string) => void;
}

function NewReminderForm({onAddReminder} : NewReminderProps) {
    let [title, setTitle] = useState("Text einfügen");

  
    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("title", title);
        //setTitle=('');
    }

    return (
        <div>
            <hr />
            <form onSubmit={submitForm}>
            <label htmlFor='title'></label>
            <input placeholder={title} type ="text" 
            onChange={e => setTitle(e.target.value)}/> 
            <button type="submit" onClick={() =>onAddReminder(title)}  >add</button>
            <hr />
            </form>
        </div>
    );
}

export default NewReminderForm;