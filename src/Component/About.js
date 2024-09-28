import React from "react";
import "../Styles/About.css";
import { Link } from "react-router-dom";

const About = () =>{

    return(
        <>
        <div className="main-div" id="about">
            <h1>Tipsy Testy</h1>
            <div className="multiple-div">
<div className="oh" id="f-oh">
    <h2>Opening and Closing hour</h2>
    <p>We are always open for your service from 6:00 am to 10:00 pm</p>
   <div>
    <p>Our Peak times are:</p>
    <ul>
        <li>9:00 am to 11:00 am
        </li>
        <li>3:00 pm to 5:00 pm
        </li>
        <li>9:00 pm to 12:00 am
        </li>

    </ul>
    </div>
    <p>Our Cafe is closed from 12:00 am to 6:00 am. In this time our online services are also closed. </p>

</div>
<div className="oh" id="s-oh">
    <h2>Online Services</h2>
    <p>We provide easy online ordering and payment options. Just choose what you need, place your order, and we'll ensure swift delivery right to your door. </p>

<p>With our service, you can enjoy the convenience of having everything you want brought to you in no time.</p><a href="/#contact" className="abtn">Order Now</a>
</div>
<div className="oh" id="t-oh">
    <h2>Reservations</h2>
    <p>Different events can be organized or host here. Pre reservations should be done with some advance.</p>
    <p>Our event management teams are as seamless as a well-oiled machine.</p>
    <a href="/#contact"  className="abtn">Reserve Now</a>
</div>
<div className="oh" id="f-oh">
    <h2>Famous for</h2> 
    <div> 
    <p>We are famous for:</p>  
    <ul>
        <li>Good Hospitality.</li>
        <li>Quality Food.</li>
        <li>Peaceful environment</li>
    </ul>
    </div>
    <p>Especially, it is best for couples.</p>
</div>
            </div>
        </div>
        </>
    )
}
export default About;