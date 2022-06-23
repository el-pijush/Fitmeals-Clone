import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import AMP from '../../AMP/AMP'
// import KMP from '../../KMP/KMP'
// import MMP from '../../MMP/MMP'
// import OneWeekAthleticMealPlan from '../1WeekAthleticMealPlan/OneWeekAthleticMealPlan'
// import OneWeekWeightLossPlan from '../1WeekWeightLossPlan/OneWeekWeightLossPlan'
// import TwoWeekWeightLossPlan from '../2WeekWeightLossPlan/TwoWeekWeightLossPlan'
// import ThreeWeekWeightLossPlan from '../3WeekWeightLossPlan/ThreeWeekWeightLossPlan'
// // import TwoWeekAthleticMealPla from '../TwoWeekAthleticMealPla/TwoWeekAthleticMealPla'
// import About_us from '../About_us/About_us'
// import Blogs from '../Blogs/Blogs'
// import Cart from '../Cart/Cart'
// import Mycart from '../Cart/Mycart'
// import Health from '../Health_Coaching/Health'
// import Home from '../Home/Home'
// import Nav from '../Layout/Nav'
// import WLMP from '../WLMP/WLMP'
import Login from "../Login/Login";
// import Meals from '../Meals/Meals'
// import OneWeekMMP from '../OneWeekMMP/OneWeekMMP'
// import OneWeekMMP from '../OneWeekMMP/OneWeekMMP'
// import Pnf from '../Pnf/Pnf'
// import Products from '../Products/Products'
// import ThreeWeekAthleticMealPlan from '../ThreeWeekAthleticMealPlan/ThreeWeeekAthleticMealPlan'
// import TwoWeekAthleticMealPlan from '../TwoWeekAthleticMealPlan/TwoWeekAthleticMealPlan'
// import TwoWeekMMP from '../TwoWeekMMP/TwoWeekMMP'
// import ThreeWeekMMP from '../ThreeWeekMMP/ThreeWeekMMP'
// import Keto_OneWeek from '../Keto_OneWeek/Keto_OneWeek'
// import Keto_TwoWeek from '../Keto_TwoWeek/Keto_TwoWeek'
// import Keto_FourWeek from '../Keto_FourWeek/Keto_FourWeek'
// import Protected from './Protected'
import Reg from "../Registration/Registration";
import Homepage from "../HomePage/Homepage";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import ProductListing from "../Products/containers/ProductListing";
import { CategoryCard } from "../Products/containers/CategoryCard";
import { Cart } from "../Products/containers/Cart";
import Health from "../health/Health";
import Athletic from "../Mealplans/Athletic";
import Maintenance from "../Mealplans/Maintenance";
import Keto from "../Mealplans/Keto";
import WeightMealPlans from "../Mealplans/WeightMealPlans";
import Checkout from "../health/Checkout";
import Pay from "../health/Pay";

export default function () {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="registration" element={<Reg />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:sweets" element={<CategoryCard />} />
          <Route path="/products/:sauces" element={<CategoryCard />} />
          <Route path="/products/:butter" element={<CategoryCard />} />
          <Route path="/health" element={<Health />} />
          <Route path="/weightmealplans" element={<WeightMealPlans />} />
          <Route path="/keto" element={<Keto />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/athletic" element={<Athletic />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Pay />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
