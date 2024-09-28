import React, { useEffect, useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set the scroll threshold (e.g., 100px) after which the navbar will appear
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`navbar-container ${showNavbar ? "visible" : "hidden"}`} >
        <div className="nav-wrap">
          <div className="lefts-part">
            <a href="/">
              <h1>Tipsy Testy</h1>
            </a>
            </div>
          <div className="navbar-component">
            <ul>
            <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#events">Events</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><Link to="/menu">Menu</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
