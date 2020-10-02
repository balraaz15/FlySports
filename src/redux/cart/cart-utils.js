export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const reduceItem = (cartItems, itemToReduce) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToReduce.id
  );

  if (!existingItem) return;

  return cartItems.map((cartItem) =>
    cartItem.id === itemToReduce.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
