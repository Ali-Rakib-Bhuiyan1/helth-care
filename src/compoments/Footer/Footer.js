import React from 'react';
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <div className='footer container-fluid'>
         <div className="row d-flex pt-5">
            <div className="col-md-4">
              <h1>  HelthCare Service</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis dolore, inventore distinctio sequi ex veniam eaque blanditiis veritatis nulla culpa molestias neque sapiente quaerat sint voluptatum harum porro voluptatibus! Facilis.</p>
            </div>
            <div className="col-md-4 best-selling">
                <h4 className='ml-4 pb-2'>Best Services</h4>
                <p>Eye Care Solutions</p>
                <p>Dental Surgery</p>
                <p>Blood Tests And X-Rays</p>
              
            </div>
            <div className="col-md-4">
                <h4 className='pb-3'>Contact Details</h4>
                <p><FontAwesomeIcon icon={faPhone} /><strong> Phone : </strong>088-0195863</p>
                <p><FontAwesomeIcon icon={faEnvelope} /><strong> Email : </strong><em>smartServices@gmail.com</em></p>

                
            </div>
        </div>
        <div className="copyright">
            <p>All rights reserved by Helth Care || &copy; 2021</p>
        </div>
    </div>
    );
};

export default Footer;