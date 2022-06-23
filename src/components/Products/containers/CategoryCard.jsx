import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProducts,
  sortProducts,
} from "../redux/actions/productsActions.js";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./AllProd.css";
import { addProduct, deleteProduct } from "../redux/actions/productsActions.js";

export const CategoryCard = () => {
  const fildata = useSelector((state) => state.allProducts.filterData);
  const subTotal = useSelector((state) => state.allProducts.cartTotal);
  const cartArr = useSelector((state) => state.allProducts.cartArr);

  let { sweets } = useParams();
  let dispatch = useDispatch();

  if (sweets === "sweets") {
    var prodCat = "Vegan Sweets";
  } else if (sweets == "sauces") {
    var prodCat = "Low Calorie Sauces";
  } else if (sweets == "butter") {
    var prodCat = "Nut Butter";
  }

  useEffect(() => {
    dispatch(filterProducts(sweets));
  }, [sweets]);

  const handleSort = (e) => {
    console.log(e.target.value);
    dispatch(sortProducts(e.target.value));
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleCart = (product) => {
    dispatch(addProduct(product));
  };

  return (
    <>
      <Header title={prodCat} />

      <div className="mainProdDiv">
        <div className="productleftDiv">
          {cartArr.length === 0 ? (
            <div>
              <h1>Cart is empty!</h1>
              <hr className="cartHr" />
            </div>
          ) : (
            <>
              <h1>Cart</h1>
              <hr className="cartHr" />
              <div className="cartContainer">
                {cartArr.map((elem, index) => {
                  return (
                    <div key={elem.id} className="cartDiv">
                      <div className="cartImg">
                        <p
                          className="deleteIcon"
                          onClick={() => {
                            handleDelete(elem.id);
                          }}
                        >
                          X
                        </p>
                        <img src={elem.image} alt={elem.name} />
                      </div>
                      <div className="cartContent">
                        <p className="cartName">{elem.name}</p>
                        <div className="cartPrice" style={{ display: "flex" }}>
                          {elem.quantity}
                          <p
                            style={{
                              color: "black",
                              marginLeft: "10px",
                              marginRight: "10px",
                            }}
                          >
                            x
                          </p>
                          ₹{elem.price}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="subtotaldiv">
                <h3>Subtotal:&nbsp;</h3>
                <h3 style={{ color: "#92c038" }}>₹{subTotal}</h3>
              </div>
              <Link to={`/cart`} style={{ textDecoration: "none" }}>
                <button className="viewcartbtn">View Cart</button>
              </Link>
              <Link to={`/checkout`} style={{ textDecoration: "none" }}>
                <button className="checkoutbtn">Checkout</button>
              </Link>
            </>
          )}
        </div>

        <div className="productrightDiv">
          <div className="productsortDiv">
            <p>Showing {fildata.length} results</p>

            <select onChange={handleSort}>
              <option>Default sorting</option>
              <option value="ascProd">Sort by Price: Low to High</option>
              <option value="descProd">Sort by Price: High to Low</option>
            </select>
          </div>

          <div className="prodContainer">
            {fildata.map((product) => {
              const { name, image, price, description, id } = product;
              return (
                <div key={id}>
                  <div className="parentCard">
                    <div className="productcard">
                      <div className="productimageDiv">
                        <img src={image} alt={name} />
                      </div>
                      <div className="productcontentDiv">
                        <p className="productname">{name}</p>
                        <p className="productdescription">{description}</p>
                        <p className="productprice">₹{price}</p>
                      </div>
                      <button
                        className="cartBtn"
                        onClick={() => {
                          handleCart(product);
                        }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            ;
          </div>
        </div>
      </div>
    </>
  );
};
