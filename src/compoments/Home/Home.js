import React from 'react';
import Banner from './../Banner/Banner';
import Naver from './../Header/Navber/Naver';
import AboutCare from './../AboutCare/AboutCare';
import Services from '../Services/Services';
import Contrac from '../contrac/Contrac';
import Doctors from './../Doctors/Doctors';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
             <Naver></Naver>
      <Banner></Banner>
      <AboutCare></AboutCare>
      <Services></Services>
      <br /><br />
      <Contrac></Contrac>

      <Doctors></Doctors>
      <br />

     
      <br />\

      <Footer></Footer>
 
        </div>
    );
};

export default Home;