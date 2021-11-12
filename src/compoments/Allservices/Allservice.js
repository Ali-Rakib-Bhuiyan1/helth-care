import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Allservice = () => {
  let {id} = useParams()
  const [servicesDetails, setServiceDetails] = useState([])
  const [singleService, setSingleService] = useState({})
useEffect(()=>{
fetch('/allservice.json')
.then(res =>res.json())
.then(data =>setServiceDetails(data))

},[])
useEffect(()=>{
 const foundService = servicesDetails.find(service =>service.id== id)
 setSingleService(foundService)




},[servicesDetails])
  
  return (
    <div>
      <img src={singleService?.img} alt="" />
     <h1 className ="text-danger fw-bold"> WellCome {singleService?.name}</h1>
     <br />
     <p className="fs-5" >{singleService?.description}</p>
  
    </div>
  );
};

export default Allservice;