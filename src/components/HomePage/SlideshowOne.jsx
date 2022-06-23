import React from "react";
import { Slide } from "react-slideshow-image";
import "./slideshowone.css";

const slideImages = [
  "https://www.fitmeals.co.in/wp-content/uploads/2018/02/SLIDE_01.jpg",
  "https://www.fitmeals.co.in/wp-content/uploads/2018/02/SLIDE_02.jpg",
  "https://www.fitmeals.co.in/wp-content/uploads/2018/02/SLIDE_03.jpg",
];

const properties = {
  duration: 3000,
  transitionDuration: 1000,
  infinite: true,
  indicators: false,
  arrows: false,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const SlideShow = () => {
  return (
    <>
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide full zoom">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
              <span>Who says eating healthy is boring?</span>
            </div>
          </div>
          <div className="each-slide full zoom">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
              <span>Meal plan subscriptions</span>
            </div>
          </div>
          <div className="each-slide full zoom">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
              <span>Get a customised diet plan</span>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
};

export default SlideShow;
