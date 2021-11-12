import React from 'react';
const Contrac = () => {


    return (
       
            <div className="text-center bg-dark text-white">
             

                <br />
                <br /><br />
            
            <h3 className="p-3">Contact With Us</h3>
              
                    <input className="p-2 rounded w-50" type="text" name="name"  placeholder="Your Name" /> <br/> <br/>
                    <input className="p-2 rounded w-50" type="email" name="email"  placeholder="Your Email" /> <br/> <br/> 
                    <input className="p-2 rounded w-50" type="text" name="subject"  placeholder="subject" /> <br/> <br/> 
                    <textarea className="p-2 mb-4 rounded w-50" name="message" id="message" cols="40" rows="7" placeholder="Your Message"></textarea> <br/> 
                    <input className="btn btn-primary" type="submit" value="SEND" />
            <br />


        </div>
    );
};

export default Contrac;