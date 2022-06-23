import React, { useEffect } from "react";
import Styles from "./Homepage.module.css";
import { slideImageData } from "./SliderData";
import { useState } from "react";

const SliderBox = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = slideImageData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 2000;

  const autoSlide = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      autoSlide();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div>
      <div>
        <button className={Styles.prev} onClick={prevSlide}>
          <div className={Styles.prevBox}>
            <i className="fas fa-arrow-left"></i>
          </div>
        </button>
        <button className={Styles.next} onClick={nextSlide}>
          <div className={Styles.prevBox}>
            <i className="fas fa-arrow-right"></i>
          </div>
        </button>
      </div>

      <div>
        {slideImageData.map((slide, index) => {
          // console.log(slideImageData)
          return (
            <div
              className={index == currentSlide ? "slide current" : "slide"}
              key={index}
            >
              <div className={Styles.testimonialinfo}>
                {index === currentSlide && <p>{slide.para}</p>}
                {index === currentSlide && <img src={slide.img} />}
                {index === currentSlide && <h4>{slide.name}</h4>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SliderBox;
