import React from "react"
import Place from "./Place"
import Plan from "./Plan"
import Right from "./Right"
import './weight.css'

const Athletic = () => {
    return (
        <> 
        <div id="top">
  
        <div id='background'>
            {/* <img src="https://www.fitmeals.co.in/wp-content/uploads/2018/02/inner-page.jpg" alt="" /> */}
        </div>
            <h1 className="img_over1">Athletic Plan</h1>
        </div>
         <br />
         <div id="Cont">
            <div id="left_cont">
                <div id="left_cont11">
                    <h3>A diet rich in protein is essential for promoting muscle growth and repair while simultaneously burning fat to ensure you stay in shape. This plan includes high protein meals for individuals who want to gain weight or build muscle. If you are a fitness enthusiast who’s looking for meals higher in calories and lean protein then we’ve got you covered.</h3>
                </div>
                <div id="left_cont2">
                    <button className="btn">View Sample Menu</button>
                </div>
            </div>
            <div id='right_cont'>
                <Right/>
            </div>
         </div>
         <div id="how_work">
             <h2>How Does It Work ?</h2>
         </div>
         <Plan/>
         <Place/>
         {/* <Weightloss/> */}
         {/* <GetFit/> */}
        </>    
    )
}

export default Athletic
