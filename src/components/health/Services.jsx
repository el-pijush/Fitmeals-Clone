import React from 'react'
import "./health.css"

function Services() {
  return (
    <>
                <div id="container">
        <h6>Our services</h6>
        <h2>Let's change your life</h2>
        <div id="list_of_times">

            

            <div>
               
                <img className="food_image" src="https://www.fitmeals.co.in/wp-content/uploads/2019/10/food-2569257_640-275x275.jpg" alt="" />
         	
                <div className="description">
                   <h2 className="header">Nutrition Programs</h2> 
                    <p style={{fontSize:"14px",fontFamily:"Open Sans"}}>Diet charts designed to help you reach your goals in a sustainable manner without using any crash diet approach.</p>
                    
                    <a  target="_blank" style={{color:"white"}}>Read More</a>
                </div>
 
            </div>

            
            <div>
                <img className="food_image" src="https://www.fitmeals.co.in/wp-content/uploads/2019/10/adult-1850925_640-1-275x275.jpg" alt=""/>
                <div className="description">
                    <h2 className="header">Workout Programs</h2>
                    <p style={{fontSize:"14px",fontFamily:"Open Sans"}}> Easy workout routines designed according to your fitness levels with constant motivation to push yourself.</p>
                    <a href="workout.html" target="_blank" >Read More</a>
                </div>
            </div>
           
            
            <div>
                <img className="food_image" src="https://www.fitmeals.co.in/wp-content/uploads/2019/10/doctor-5710152_640-275x275.jpg" alt=""/>
                <div className="description">
                    <h2 className="header">Health Councelling</h2>
                    <p style={{fontSize:"14px",fontFamily:"Open Sans"}}>30 minute consultations with any of our nutritionists every week to discuss your progress and problems.</p>
                    <a href="health.html" target="_blank">Read More</a>
                </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Services