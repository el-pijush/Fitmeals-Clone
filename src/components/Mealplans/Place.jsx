import React from 'react'
import './weight.css'
const Place = () => {
  return (
    <div id='place_order'>
      <div className='choose_div'>
        <h1>
        Choose your ideal program & <span> get started! </span> 
        </h1>
      </div>
      <div className='place_orderdiv'>
        <div className='plan_red'>
          <h4> <span>1 Week</span> Plan</h4>
        </div>
        <ul className='list'>
          <li>
          <i className="fa-solid fa-check fa-1x"></i>
           <span>Freshly prepared meals</span> </li>
          <li>
          <i className="fa-solid fa-check fa-1x"></i>
           <span> Home delivery</span></li>
          <li>
          <i className="fa-solid fa-check fa-1x"></i>
            <span>No refined sugars</span></li>
          <li>
          <i className="fa-solid fa-check fa-1x"></i>
           <span> Planned by nutritionists</span></li>
          <li><i className="fa-solid fa-check fa-1x"></i>
            <span>Plan flexibility</span></li>
        </ul>
        <div className='order_btn'>
        <button>Order Now</button>
        </div>
      </div>
      <div className='place_orderdiv'>
      <div className='plan_red'>
          <h4> <span>2 Weeks</span> Plan</h4>
        </div>
        <ul className='list'>
          <li>
          <i className="fa-solid fa-check fa-1x"></i>
           <span>Freshly prepared meals</span> </li>
          <li>
          <i className="fa-solid fa-check fa-1x"></i>
           <span> Home delivery</span></li>
          <li>
          <i className="fa-solid fa-check fa-1x"></i>
            <span>No refined sugars</span></li>
          <li>
          <i className="fa-solid fa-check fa-1x"></i>
           <span> Planned by nutritionists</span></li>
          <li><i className="fa-solid fa-check fa-1x"></i>
            <span>Plan flexibility</span></li>
        </ul>
        <div className='order_btn'>
        <button>Order Now</button>
        </div>
      </div>
      <div className='place_orderdiv'>
      <div className='plan_red'>
          <h4> <span>4 Weeks</span> Plan</h4>
        </div>
        <ul className='list'>
          <li>
          <i className="fa-solid fa-check fa-1x"></i>
           <span>Freshly prepared meals</span> </li>
          <li>
          <i className="fa-solid fa-check fa-1x"></i>
           <span> Home delivery</span></li>
          <li>
          <i className="fa-solid fa-check fa-1x"></i>
            <span>Plan flexibility</span></li>
          <li>
          <i className="fa-solid fa-check fa-1x"></i>
           <span> 2 Free consultations</span></li>
          <li><i className="fa-solid fa-check fa-1x"></i>
            <span>Discounted prices</span></li>
        </ul>
        <div className='order_btn'>
        <button>Order Now</button>
        </div>
      </div>
     
    </div>
  )
}

export default Place
