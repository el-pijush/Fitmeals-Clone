import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const sortProducts = (payload) => ({
  type: payload,
});

export const filterProducts = (payload) => ({
  type: ActionTypes.FILTER_PRODUCT,
  payload,
});

export const incrQuant = (payload) => ({
  type: ActionTypes.INCR_QUANT,
  payload,
});

export const decrQuant = (payload) => ({
  type: ActionTypes.DECR_QUANT,
  payload,
});

export const addProduct = (payload) => ({
  type: ActionTypes.ADD_PRODUCT,
  payload,
});

export const findTotal = (payload) => ({
  type: ActionTypes.SUBTOTAL,
  payload,
});

export const deleteProduct = (payload) => ({
  type: ActionTypes.DELETE_PRODUCT,
  payload,
});
