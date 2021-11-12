import React from 'react';
import { Image } from 'react-bootstrap';
import './doctor.css'

const Doctor = ({service}) => {
    const {name, img, mobile} = service;
    return (
        <div className ="doctor">
             <div  className="text-center">
            <Image className="mb-3" src={img} alt="" fluid />
            <h5>{name}</h5>
            <h6>{mobile}</h6>
          
        </div>
        </div>
    );
};

export default Doctor;