import React from "react";
import Header from "./Header";
import { Counter } from "./Counter";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { deleteProduct } from "../redux/actions/productsActions.js";
import { Link } from "react-router-dom";

export const Cart = () => {
  const cartArr = useSelector((state) => state.allProducts.cartArr);
  console.log(cartArr);
  const subTotal = useSelector((state) => state.allProducts.cartTotal);

  let dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div>
      <Header
        title="Cart"
        url="https://www.fitmeals.co.in/wp-content/uploads/2018/02/inner-page.jpg"
      />
      {cartArr.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <h1>Cart is empty!</h1>
        </div>
      ) : (
        <>
          <table className="cartTable">
            <thead>
              <tr className="headerTr">
                <td style={{ width: "79px" }}>&nbsp;</td>
                <td>&nbsp;</td>
                <td>Product</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Subtotal</td>
              </tr>
            </thead>

            <tbody>
              {cartArr.map((elem) => {
                return (
                  <tr key={elem.id} className="cartDiv1">
                    <td>
                      <p
                        className="deleteIcon1"
                        onClick={() => {
                          handleDelete(elem.id);
                        }}
                      >
                        X
                      </p>
                    </td>
                    <td className="cartimgdiv">
                      <img
                        className="cartImg1"
                        src={elem.image}
                        alt={elem.name}
                        style={{ width: "54px", height: "54px" }}
                      />
                    </td>
                    <td>
                      <p className="cartName1">{elem.name}</p>
                    </td>
                    <td>
                      <p className="cartPrice1">₹{elem.price}</p>
                    </td>
                    <td className="counter">
                      <Counter quant={elem} />
                    </td>
                    <td>
                      <p className="cartTotal">₹{elem.price * elem.quantity}</p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="totaldiv">
            <h3>Total</h3>
            <h3>₹{subTotal}</h3>
          </div>
          <div className="totaldiv">
            <Link to={`/checkout`} style={{ textDecoration: "none" }}>
              <button className="checkoutbutton">Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
