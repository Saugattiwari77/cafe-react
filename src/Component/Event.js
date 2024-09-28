import React, { useState } from "react";
import "../Styles/Event.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Event = () => {
  const items = [
    {
      image: "images/birthday cele.jpg",
      content: "Celebrating Birthday",
    },
    {
      image: "images/weeding.jpeg",
      content: "Weeding Ceremony",
    },
    {
      image: "images/leoclub.jpg",
      content: "Leo club annual program",
    },
    {
      image: "images/pubg tournament.avif",
      content: "PMGC pubg Tournament",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    if (currentIndex >= items.length - 1) {
      setCurrentIndex(0);
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
    if (currentIndex <= 0) {
      setCurrentIndex(items.length - 1);
    }
  };
  return (
    <>
      <div className="m-div" id="events">
        <h1>Recent Events</h1>
        <div className="s-div">
          <img
            src={items[currentIndex].image}
            //alt={items[currentIndex].content}
            className="m-image"
          />
          <p>{items[currentIndex].content}</p>
          <div className="t-btn">
            <button onClick={handlePrevious} className="hp">
              {" "}
              <FaArrowLeft />
            </button>
            <button onClick={handleNext} className="hn">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Event;
