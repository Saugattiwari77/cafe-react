import React from "react";
import "../Styles/Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="m-d" id="contact">
      <h1>Contact Us</h1>
      <div className="both-div">
        <div className="top-side">
        
          <form>
            <p>Get With Us.......</p>
            <div className="name">
              <label htmlfor="name">Full Name</label>
              <input id="name" type="text" placeholder="john sena" />
            </div>
            <div className="email">
              <label htmlfor="email">Email</label>
              <input id="email" type="email" placeholder="johnsen@gmail.com" />
            </div>
            <div className="phone">
              <label htmlfor="phone">Phone Number</label>
              <input id="phone" type="tel" placeholder="1234567890" />
            </div>
            <div className="message">
              <label htmlfor="message">Message</label>
              <textarea id="message" placeholder="type your message here" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>



        <div className="top-side">
        <h1></h1>
        <div class="map-container"  data-aos="fade-up">
            <p class="title"  data-aos="zoom-in">Locate Us.......</p>
            
					
					
						<iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.6390871503577!2d-118.24623734797835!3d34.10438511862319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x88ba5b96cffd3459!2zMzTCsDA2JzE0LjYiTiAxMTjCsDE0JzM1LjciVw!5e0!3m2!1sen!2snp!4v1674040142338!5m2!1sen!2snp" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					
				</div>
            
          </div>
        </div>
        </div>
        
      
    </>
  );
};
export default Contact;
