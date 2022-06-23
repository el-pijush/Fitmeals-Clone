import React from 'react'
import "./features.css";

function Works() {
  return (
    <>
            
{/* <div id="container2">
    <h6>How It Works</h6>

    <div id="container2_parent">
        <div>
            <i className="fa-solid fa-mobile-screen-button icon"></i>
            <h3>Download the app</h3>
            <p>Click on the link and get on board our Fitmeals app</p>
        </div>
        <hr/>
        <div>
            <i className="fa-solid fa-user-check icon icon2"></i>
            <h3>Book an appointment</h3>
            <p>Our nutritionists will help find the right plan for you</p>
        </div>
        <hr />
        <div>
            <i className="fa-solid fa-calculator icon"></i>
            <h3>Place an order</h3>
            <p>Choose the plan the fits you well and place an order</p>
        </div>
        <hr/>
        <div>
            <i className="fa-solid fa-check icon"></i>
            <h3>Get started</h3>
            <p>Follow the diet and workout plans sent to you and begin your journey.</p>
        </div>
    </div>    
</div> */}

<div id="container2">
<h6>How It Works</h6>
<div className="logosDiv" style={{marginTop:"30px"}}>
          <div>
            <i className="fas fa-box"></i>
          </div>

          <div>
            <i className="fas fa-star"></i>
          </div>
          <div>
            <i className="fas fa-truck"></i>
          </div>
          <div>
            <i className="fas fa-check"></i>
          </div>
        </div>
        <div className="desc">
          <div>
            <h2 className="descH2">Fresh ingredients</h2>
            <p className="descp">
              Procuring fresh and fundamental ingredients required for a
              wholesome meal.
            </p>
          </div>
          <div>
            <h2 className="descH2">Finest quality</h2>
            <p className="descp">
              All the meals are designed by our nutrition experts using only the
              best quality ingredients.
            </p>
          </div>
          <div>
            <h2 className="descH2">On time delivery</h2>
            <p className="descp">
              {" "}
              Helping you stay ahead of your diet plans.
            </p>
          </div>
          <div>
            <h2 className="descH2">Preservative-free</h2>
            <p className="descp">
              Your ultimate plan for eating clean without added preservatives.
            </p>
          </div>
        </div>
</div>
    
       
    </>
  )
}

export default Works