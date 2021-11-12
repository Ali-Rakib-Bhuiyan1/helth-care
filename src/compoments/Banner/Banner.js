import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <>
<Carousel>
  <Carousel.Item>
 <div>
 <img
      className="d-block banner-img"
      src="https://thumbs.dreamstime.com/b/doctor-banner-young-handsome-holding-white-blank-place-your-text-48602276.jpg/800x400?text=Best Treat"
      alt="First slide"
    />

    <div className = "centered">
    <h1 className ="text-danger">The best Hospital & doctors</h1>
      <p className ="text-dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </div>

 </div>


 
  </Carousel.Item>
  <Carousel.Item>
  <div>

  <img
      className="d-block  banner-img"
      src="https://thumbs.dreamstime.com/b/nurse-doctor-training-young-woman-as-140360423.jpg"
      alt="Second slide"
      
    />
 <div className="centered"> 
 <h1 className ="text-danger ">Best  Treatment & happy life</h1>
   <p  className ="text-dark "> Lorem ipsum dolor sit amet consectetur adipisicing elit. At, beatae.
       </p> 
   
 </div>
     



  </div>

   
  </Carousel.Item>
  <Carousel.Item>
  <div>
  <img
      className="d-block  banner-img"
      src="https://i.pinimg.com/736x/6b/49/59/6b495988df108235cfd31bac305d8cf1.jpg"
      alt="Third slide"
    />

<div className ="centered">
<h1 className ="text-danger">Healthy tablets and medicine</h1>
      <p className ="text-dark">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>

</div>

  </div>
  
  </Carousel.Item>
</Carousel>


            
        </>
    );
};

export default Banner;