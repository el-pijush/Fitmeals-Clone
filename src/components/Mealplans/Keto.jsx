import React from "react"
import Place from "./Place"
import Plan from "./Plan"
import Right from "./Right"
import './weight.css'

const Keto = () => {
    return (
        <> 
        <div id="top">
  
        <div id='background'>
            {/* <img src="https://www.fitmeals.co.in/wp-content/uploads/2018/02/inner-page.jpg" alt="" /> */}
        </div>
            <h1 className="img_over1"  style={{top:"38%",left:"40%"}}>Keto Meal Plan</h1>
        </div>
         <br />
         <div id="Cont">
            <div id="left_cont">
                <div id="left_cont11">
                    <h3>
The keto diet is all about eating meals that are high in fat, consist moderate portions of protein and very low in carbs. The reduction of carbohydrates results in a metabolic process called ketosis where your body fat is then used to generate energy in the body.
</h3>
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

export default Keto
