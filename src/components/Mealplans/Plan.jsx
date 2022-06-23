import React from 'react'
import './weight.css'
const Plan = () => {
  return (
    // <i class="fa-regular fa-calendar-days"></i>
      <div id="flex_4">
           <div className='flex_4child'>
             <div className='flex_4child1'>
             <i className="fa-regular fa-calendar-days fa-6x" style={{color: "aliceblue"}}></i>
             </div>
             <div className='flex_4child2'>
               <h3>Select your plan</h3>
             </div>
             <div className='flex_4child3'>
               <p>Choose the meal plan you want based on your preferences.</p>
             </div>
           </div>
           <div className='flex_4child'>
             <div className='flex_4child1'>
             <i className="fa-solid fa-user-check fa-6x" style={{color: "aliceblue"}}></i>
             {/* <i className="fa-solid fa-user-check"></i> */}
             </div>
             <div className='flex_4child2'>
               <h3>Nutrition Support</h3>
             </div>
             <div className='flex_4child3'>
               <p>Our nutritionists will design your meals & will be available for further consultations.</p>
             </div>
           </div>
           <div className='flex_4child'>
             <div className='flex_4child1'>
             <div><i className="fa-solid fa-motorcycle fa-6x" style={{color: "aliceblue"}}></i></div>
             </div>
             <div className='flex_4child2'>
               <h3>Home delivery</h3>
             </div>
             <div className='flex_4child3'>
             <p>Freshly prepared, hot meals will be delivered right at your doorstep.</p>
             </div>
           </div>
           <div className='flex_4child'>
             <div className='flex_4child1'>
             <div> <i className="fa-solid fa-box-open fa-6x" style={{color: "aliceblue"}}></i></div>
             </div>
             <div className='flex_4child2'>
               <h3>Enjoy your meal</h3>
             </div>
             <div className='flex_4child3'>
             <p> 
             Microwave the food if needed then dig in!</p>
             </div>
           </div>
       </div>
    
  )
}

export default Plan
