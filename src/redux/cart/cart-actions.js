export const toggleCartHidden = () => ({
  type: "TOGGLE_CART_HIDDEN",
});

export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const removeCartItem = (item) => ({
  type: "REMOVE_CART_ITEM",
  payload: item,
});

export const reduceCartItem = (item) => ({
  type: "REDUCE_CART_ITEM",
  payload: item,
});
