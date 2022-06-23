import React from "react";
import "./checkout.css";
import { Link } from "react-router-dom";
import { Pay } from "./Pay";

function Checkout() {
  return (
    <>
      <header className="page-header">
        <div
          id="container"
          style={{
            color: "#F6F6F6",
            backgroundColor: "#292D35",
            width: "100%",
            height: "360px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "-20px",
            marginTop: "150px",
          }}
        >
          <img
            src="https://www.fitmeals.co.in/wp-content/uploads/2018/02/inner-page.jpg"
            alt=""
            style={{
              height: "360px",
              width: "100%",
              position: "absolute",
              opacity: "50%",
              objectFit: "cover",
            }}
          />
          <h1
            style={{
              fontFamily: "Fira Sans",
              fontSize: "50px",
              position: "relative",
            }}
          >
            Checkout
          </h1>
        </div>
      </header>

      <div id="inner-container-checkout">
        <div className="box">
          Returning customer?&nbsp;
          <Link to={"/login"}>Click here to login</Link>
        </div>
        <div className="box">
          Have a coupon?&nbsp;<a href="">Click here to enter your code</a>
        </div>
        <div>
          <p
            style={{
              fontFamily: "Fira Sans",
              fontSize: "40px",
              fontWeight: "900",
              marginBottom: "50px",
            }}
          >
            Billing Details
          </p>
          <div id="checkout_form">
            <form
              action=""
              id="myForm"
              style={{ padding: "50px", paddingBottom: "30px" }}
            >
              <div id="name-checkout">
                <div>
                  {/* <label for="">First name <sup>*</sup></label>   */}
                  <div className="inner">
                    <label for="">
                      First name <sup>*</sup>
                    </label>
                    <input
                      type="text"
                      style={{
                        borderRadius: "30px",
                        padding: "18px",
                        border: "1px solid black",
                        width: "96%",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="inner">
                    <label for="">
                      Last name <sup>*</sup>
                    </label>
                    <input
                      type="text"
                      style={{
                        borderRadius: "30px",
                        padding: "18px",
                        border: "1px solid black",
                        width: "96%",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label for="">
                  Country / Region <sup>*</sup>
                </label>
                <select
                  name=""
                  id=""
                  style={{ width: "96%", border: "1px solid black" }}
                >
                  <option value="India">India</option>
                </select>
              </div>

              <div>
                <label for="">
                  Town / City <sup>*</sup>
                </label>
                <input
                  type="text"
                  style={{
                    borderRadius: "30px",
                    padding: "18px",
                    width: "96%",
                    border: "1px solid black",
                  }}
                />
              </div>

              <div>
                <label for="">
                  State <sup>*</sup>
                </label>
                <select
                  name=""
                  id="selectOption"
                  style={{ width: "96%", border: "1px solid black" }}
                >
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="West-bengal">West Bengal</option>
                </select>
              </div>
              <div>
                <label for="">
                  PIN <sup>*</sup>
                </label>
                <input
                  type="number"
                  style={{
                    borderRadius: "30px",
                    padding: "18px",
                    width: "96%",
                    border: "1px solid black",
                  }}
                />
              </div>
              <div>
                <label for="">
                  Phone <sup>*</sup>
                </label>
                <input
                  type="number"
                  style={{
                    borderRadius: "30px",
                    padding: "18px",
                    width: "96%",
                    border: "1px solid black",
                  }}
                />
              </div>
              <div>
                <label for="">
                  Email address <sup>*</sup>
                </label>
                <input
                  type="email"
                  style={{
                    borderRadius: "30px",
                    padding: "18px",
                    width: "96%",
                    border: "1px solid black",
                  }}
                />
              </div>

              <Link to="/registration" style={{ fontSize: "16px" }}>
                Create an account?
              </Link>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link to="/payment">
                  ​<button className="Chkbtn">Place Order</button>
                </Link>
              </div>
            </form>
          </div>
          {/* <a href="payment.html">​<button className="Chkbtn">Place Order</button></a> */}
        </div>
      </div>
    </>
  );
}

export default Checkout;
