import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrQuant, decrQuant } from "../redux/actions/productsActions.js";

export const Counter = (props) => {
  const cartArr = useSelector((state) => state.allProducts.cartArr);
  console.log(cartArr);

  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid grey",
        borderRadius: "37px",
        width: "95px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5px",
        marginLeft: "15px",
        marginRight: "15px",
      }}
    >
      <div style={{ width: "60%" }}>
        <h3>{props.quant.quantity}</h3>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ paddingTop: "10px", cursor: "pointer" }}>
          <h3
            onClick={() => {
              {
                dispatch(incrQuant(props.quant));
              }
            }}
          >
            ▲
          </h3>
        </div>
        <div style={{ paddingBottom: "10px", cursor: "pointer" }}>
          <h3
            onClick={() => {
              dispatch(decrQuant(props.quant));
            }}
          >
            ▼
          </h3>
        </div>
      </div>
    </div>
  );
};
