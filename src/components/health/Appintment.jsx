import React from 'react'

function Appintment() {
  return (
    <>
        
        <div className="appointment">
            <div className="content">
                <p>Book an appointment with <br/>
                your <span style={{fontSize:"40px",color: "#8ec038", fontFamily: "sans-serif", fontWeight: "bold"}}> personal nutritionist</span></p>
            <p> <span style={{color:"#292d35", fontFamily:"Open Sans" , fontSize: "15px"}}>Book a consultation session on the app with one  of our nutritionists to discuss your health <br/>concerns and goals.</span></p>
                   

                <div className="time">
                    <div className="clock">
                        <i className="fa-regular fa-clock fa-2x" style={{color: "#8ec038",marginLeft:  "30px"}}></i>
                    </div>

                    <div className="call">
                      <p style={{fontSize:"16px"}}> Every day from 12:00 PM to 10:00 PM </p>
                    </div>
                </div>

                
                <div className="time">
                    <div className="clock">
                        <i className="fa-regular fa-clock fa-2x" style={{color: "#8ec038",marginLeft:"30px"}}></i>

                    </div>

                    <div className="call">
                      <p  style={{fontSize:"16px"}}> +91 9100347489</p>
                    </div>
                </div>
             
               
                
    
            </div>
            <div className="contentimg">
                <img src="	https://www.fitmeals.co.in/wp-content/uploads/2021/09/businesswoman-2817567_640.jpg" alt=""/>
            </div>
    
        </div>

    </>
  )
}

export default Appintment