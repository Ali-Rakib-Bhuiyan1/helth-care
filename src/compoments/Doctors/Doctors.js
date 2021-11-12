import React from 'react';
import Doctor from './../Doctor/Doctor';
import { useState, useEffect } from 'react';

const Doctors = () => {

    const [doctors, setDoctors] = useState([])
    useEffect(()=>{
fetch('doctor.json')
.then(res =>res.json())
.then(data =>setDoctors(data));


    },[])


    return (
      
<div className = "doctors">

<h2 className ="text-primary text-center mt"> Our Doctors</h2>
<div className ="doctors-continers">
           {


doctors.map(service =><Doctor
    key ={service.id}
    service={service} 


></Doctor>)
           }
            
        </div>


    </div>

    );
};

export default Doctors;