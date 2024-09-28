import { useEffect } from 'react';
import React from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import About from './About';
import Contact from './Contact';
import Event from './Event';
import { Link } from "react-router-dom";

const Landing = () => {

    useEffect (()=>{
        new Typewriter('#big-h1', {
            // strings: ['Hello', 'World'],
            strings: [`A flavor you won't forget.`],
            autoStart: true,
            loop: true,
          });
    },
    []
)
  return (
    <>
    <div className="navbar" id="home">
            <div className="nav-bgimg">
           <img src="/images/cafebg.avif" alt="Cafe Background" className="nav-bg"/>
           </div>
            <div className="nav-part">
<div className="left-part">
    <h1>Tipsy Testy</h1>
</div>
<div className ="navbar-component">
<ul>
    
<li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#events">Events</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><Link to="/menu">Menu</Link></li>

</ul>
</div>
<div>

</div>
            </div>

            <div className="middle-part">
<h1 id="big-h1">A flavor you won't forget.</h1>
<p>Savor our delightful dishes and fuel your day with lasting energy. Experience it once, and you'll surely return for more. <br></br>Tipsy Testy.</p>
 <div className="btn">
    <button className="btn" id="bn">Buy Now</button>
    <button className="btn" id="ex">Explore</button>

    </div>           
            </div>
        </div>
        <About/>
        <Event/>
        <Contact/>
       

    </>
  )
}

export default Landing