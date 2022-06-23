import React from "react";
import "./health.css";
import Features from "./Features";
import Appintment from "./Appintment";
import Services from "./Services";
import Works from "./Works";
import Customer from "./Customer";
import Mobile from "./Mobile";

function Health() {
  return (
    <>
      <div className="prathmeshcontainer">
        {/* <div className="nav">
          <div className="logo">
            <img
              src="https://www.fitmeals.co.in/wp-content/uploads/2019/06/logo-white.png"
              alt=""
              style={{ height: "50px" }}
            />
          </div>
          <div className="others">
            <div className="search">
              <i
                className="fa-solid fa-magnifying-glass fa-2x"
                style={{ color: "rgb(238, 239, 240)" }}
              ></i>
            </div>
            <div className="sign">
              <i
                className="fa-solid fa-circle-user fa-2x"
                style={{ color: "rgb(238, 239, 240)" }}
              ></i>
            </div>
            <div className="cart">
              <i
                className="fa-solid fa-cart-arrow-down fa-2x"
                style={{ color: "rgb(238, 239, 240)" }}
              ></i>
            </div>
          </div>
        </div> */}

        <div className="image"></div>
      </div>
      <Features />
      <Appintment />
      <Services />
      <Works />
      <Customer />
      <Mobile />
    </>
  );
}

export default Health;
