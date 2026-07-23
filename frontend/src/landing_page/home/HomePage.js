import React from 'react';
import Awards from './Awards';
import Hero from './Hero';
import Stats from './Stats';
import React from './Pricing';
import Education from './Education';
import openAccount from '../openAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
  return ( 
    <>
    <Navbar/>
    <Hero/>
    <Awards/>
    <Stats/>
    <Pricing/>
    <Education/>
    <openAccount/>
    <Footer/>
    </>
   );
}

export default HomePage;