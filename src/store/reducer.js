import { filterObj, productObj } from "./object";

const filterState = (state = filterObj, { type, payload }) => {
  switch (type) {
    case "inStock":
      return { ...state, filterInclude: !state.filterInclude };
    case "fastDelivery":
      return { ...state, filterFreeDelivery: !state.filterFreeDelivery };
    case "sort":
      return { ...state, filterSort: payload };
    case "clearAll":
      return {
        ...state,
        filterSort: "featured",
        filterInclude: false,
        filterFreeDelivery: false,
        filterRating: 0,
        filtersearch: "",
      };
    case "rating":
      state.filterRating = payload;
      return { ...state };
    case "search":
      return { ...state, filtersearch: payload };
    default:
      return { ...state };
  }
};

const productState = (state = productObj, { type, payload: object }) => {
  switch (type) {
    case "updateCart":
      state.cart = object.cart;
      return { ...state, cart: [...state.cart] };
    case "addToCart":
      let index = state.cart.findIndex((obj) => {
        if (obj.id == object.val.id) {
          return true;
        }
      });
      if (index == -1) {
        // not present
        object.val.qty = 1;
        state.cart = [...state.cart, object.val];
        return {
          ...state,
        };
      } else {
        // present
        state.cart[index].qty = state.cart[index].qty + 1;
        return {
          ...state,
          cart: [...state.cart],
        };
      }

    case "decreaseQty":
      if (state.cart[object.id].qty > 1) {
        state.cart[object.id].qty = state.cart[object.id].qty - 1;
      }
      return {
        ...state,
        cart: [...state.cart],
      };
    case "remove":
      const newCart = state.cart.filter((x, idnum) => {
        if (idnum !== object.id) {
          return 1;
        }
      });
      return {
        ...state,
        cart: newCart,
      };
    default:
      return { ...state };
  }
};

export { filterState, productState };
