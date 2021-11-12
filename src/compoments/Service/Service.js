import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
 

const Service = ({service}) => {
    const {name,description,img,id } = service;
    return (
        <div className ="service mb-10">
               <img src={img} alt="" />
            <h3>{name}</h3>
         
           
            <p className ="px-3">{description}</p>
            <Link to ={`/service/${id}`}>
            
            <button className ="btn btn-warning style-btn"> More Read {name}</button>
            </Link>
        </div>
    );
};

export default Service; 