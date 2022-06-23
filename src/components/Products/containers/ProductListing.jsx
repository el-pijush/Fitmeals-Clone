import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortProducts } from "../redux/actions/productsActions";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./AllProd.css";
import { addProduct, deleteProduct } from "../redux/actions/productsActions.js";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const cartArr = useSelector((state) => state.allProducts.cartArr);
  const subTotal = useSelector((state) => state.allProducts.cartTotal);

  const handleSort = (e) => {
    dispatch(sortProducts(e.target.value));
  };

  const handleCart = (product) => {
    dispatch(addProduct(product));
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <>
      <Header title="Products" />

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
            <p>Showing {products.length} results</p>

            <select onChange={handleSort}>
              <option>Default sorting</option>
              <option value="asc">Sort by Price: Low to High</option>
              <option value="desc">Sort by Price: High to Low</option>
            </select>
          </div>

          <div className="prodContainer">
            {products.map((product) => {
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
