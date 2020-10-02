import { addItemToCart, reduceItem } from "./cart-utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  showArrow: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case "REDUCE_CART_ITEM":
      return {
        ...state,
        cartItems: reduceItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
