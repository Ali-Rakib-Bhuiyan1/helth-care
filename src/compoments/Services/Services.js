import React, { useEffect, useState } from 'react';

import './Services.css'
import Service from './../Service/Service';



const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
fetch('services.json')
.then(res =>res.json())
.then(data =>setServices(data));


    },[])



    return (
    <div id = "services">

<h2 className ="text-primary text-center mt"> Our services</h2>
<div className ="services-continers">
           {


services.map(service =><Service
    key ={service.id}
    service={service} 


></Service>)
           }
            
        </div>


    </div>
    );
};

export default Services;