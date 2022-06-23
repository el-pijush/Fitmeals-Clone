import React from "react";
import "./weight.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Right = () => {
  const slideImages = [
    {
      url: "https://www.fitmeals.co.in/wp-content/uploads/2021/05/DSC02782-1-300x201.jpg",
      //   caption: 'Slide 1'
    },
    {
      url: "https://www.fitmeals.co.in/wp-content/uploads/2019/10/DSC02724-300x201.jpg",
      //   caption: 'Slide 2'
    },
    {
      url: "https://www.fitmeals.co.in/wp-content/uploads/2021/05/keto-360x244.jpg",
      //   caption: 'Slide 3'
    },
    {
      url: "https://www.fitmeals.co.in/wp-content/uploads/2021/05/maintenance-360x244.jpg",
    },
  ];

  return (
    <>
      <div id="right_cont1">
        <h6>
          What our meals look <br />
          <span>like:</span>{" "}
        </h6>
      </div>
      <div id="right_cont2">
        <div className="slide-container">
          <Slide style={{marginTop:"-150px"}}>
            {slideImages.map((slideImage, index) => (
              <div className="each-slide" key={index}>
                <div
                  id="slide_img"
                  style={{ backgroundImage: `url(${slideImage.url})` }}
                >
                  <span>{slideImage.caption}</span>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </>
  );
};

export default Right;

/*
https://www.fitmeals.co.in/wp-content/uploads/2021/05/DSC02782-1-1024x684.jpg
https://www.fitmeals.co.in/wp-content/uploads/2019/10/DSC02724-300x201.jpg
https://www.fitmeals.co.in/wp-content/uploads/2021/05/keto-360x244.jpg
https://www.fitmeals.co.in/wp-content/uploads/2021/05/maintenance-360x244.jpg
*/
