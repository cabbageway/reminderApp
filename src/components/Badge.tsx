import React from 'react';
import { IString } from '../models/Reminder';

class Badge extends React.Component <{}, { text: IString }>{
    render() {
        return <h1 className='badge bg-primary'> Hello, my name is Emma </h1>
    }
}

export default Badge;