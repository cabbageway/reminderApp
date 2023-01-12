import React, { Fragment } from 'react';
import { PlaneObject, Reminder } from '../models/Reminder';

//function Plane(item : Reminder) {
function Plane(item : PlaneObject) {
    return (
        <React.Fragment>
            <div className="card" >

                <div className="card-body">
                    <h5 className="card-title">Plane {item.id}</h5>
                    <p className="card-text">Startdate: {item.id} </p>
                    <a href="#" className="btn btn-primary">Go to somewhere</a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Plane;