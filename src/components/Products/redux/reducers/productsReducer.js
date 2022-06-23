import { ActionTypes } from "../constants/action-types.js";
import { allProductsData } from "../../containers/ProductsData.js";
import { loadData, saveData } from "../../containers/localStorage.js";

const intialState = {
  products: allProductsData,
  filterData: [],
  cartArr: loadData("products") || [],
  cartTotal: loadData("subtotal") || 0,
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case "asc": {
      return {
        ...state,
        products: [...state.products].sort((a, b) => +a.price - +b.price),
      };
    }
    case "desc": {
      return {
        ...state,
        products: [...state.products].sort((a, b) => +b.price - +a.price),
      };
    }
    case ActionTypes.FILTER_PRODUCT: {
      return {
        ...state,
        filterData: state.products.filter((el) => {
          return el.category === payload;
        }),
      };
    }
    case "ascProd": {
      return {
        ...state,
        filterData: [...state.filterData].sort((a, b) => +a.price - +b.price),
      };
    }
    case "descProd": {
      return {
        ...state,
        filterData: [...state.filterData].sort((a, b) => +b.price - +a.price),
      };
    }
    case ActionTypes.ADD_PRODUCT: {
      let cart = [...state.cartArr, payload];
      saveData("products", cart);
      let total = cart.reduce((acc, ele) => {
        return acc + ele.price * ele.quantity;
      }, 0);
      console.log(total);
      saveData("subtotal", total);
      return {
        ...state,
        cartArr: cart,
        cartTotal: total,
      };
    }
    case ActionTypes.INCR_QUANT: {
      let incr = state.cartArr.map((el) => {
        if (el == payload) {
          el.quantity = el.quantity + 1;
        }
        return el;
      });
      saveData("products", incr);
      let total = incr.reduce((acc, ele) => {
        return acc + ele.price * ele.quantity;
      }, 0);
      console.log(total);
      saveData("subtotal", total);
      return {
        ...state,
        cartArr: incr,
        cartTotal: total,
      };
    }
    case ActionTypes.DECR_QUANT: {
      let incr = state.cartArr.map((el) => {
        if (el == payload) {
          if (el.quantity > 1) {
            el.quantity = el.quantity - 1;
          }
        }
        return el;
      });
      saveData("products", incr);
      let total = incr.reduce((acc, ele) => {
        return acc + ele.price * ele.quantity;
      }, 0);
      console.log(total);
      saveData("subtotal", total);
      return {
        ...state,
        cartArr: incr,
        cartTotal: total,
      };
    }
    case ActionTypes.DELETE_PRODUCT: {
      let deleteProd = state.cartArr.filter((el) => {
        return el.id !== payload;
      });
      saveData("products", deleteProd);
      let total = deleteProd.reduce((acc, ele) => {
        return acc + ele.price * ele.quantity;
      }, 0);
      console.log(total);
      saveData("subtotal", total);
      return {
        ...state,
        cartArr: deleteProd,
        cartTotal: total,
      };
    }
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
