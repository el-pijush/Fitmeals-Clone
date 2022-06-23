import React from "react"
import Place from "./Place"
import Plan from "./Plan"
import Right from "./Right"
import './weight.css'

const Maintenance = () => {
    return (
        <> 
        <div id="top">
  
        <div id='background'>
            {/* <img src="https://www.fitmeals.co.in/wp-content/uploads/2018/02/inner-page.jpg" alt="" /> */}
        </div>
            <h1 className="img_over" style={{top:"38%",left:"32%"}}>Maintenance Meal Plan</h1>
        </div>
         <br />
         <div id="Cont">
            <div id="left_cont">
                <div id="left_cont1">
                    <h3>Just looking for healthy food to help you maintain your weight and lead a healthy lifestyle? This is the plan for you! The meals are well balanced and consist of complex carbohydrates, lean protein, healthy fats and generous portions of fruits and vegetables which add all the essential vitamins, minerals and fibre to your diet.</h3>
                    <br />
                    <h3>Losing weight is hard but maintaining your weight and just eating healthy in general can be a challenge for a lot of people which is why you can trust us to take care of that for you.</h3>
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
         <div id="grid">
             <div>
                 <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/keto.jpg" alt="" />
             </div>
             <div>
                 <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/maintenance.jpg" alt="" />
             </div>
             <div>
                 <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/weight.jpg" alt="" />
             </div>
             <div>
                 <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/athletic.jpg" alt="" />
             </div>
             <div>
                 <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/DSC02782-1-1024x684.jpg" alt="" />
             </div>
             <div>
                 <img src="https://www.fitmeals.co.in/wp-content/uploads/2021/05/11.jpg" alt="" />
             </div>
         </div>
        </>    
    )
  }


export default Maintenance
