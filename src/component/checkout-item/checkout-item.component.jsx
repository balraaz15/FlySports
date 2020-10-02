import React from "react";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";

import {
  removeCartItem,
  addItem,
  reduceCartItem,
} from "../../redux/cart/cart-actions";

const CheckoutItem = ({
  cartItem,
  removeCartItem,
  addItem,
  reduceCartItem,
}) => {
  const { product_name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{product_name}</span>
      <span className="quantity">
        <div
          className={`${cartItem.quantity <= 1 ? "unclickable" : ""} arrow`}
          onClick={() => {
            if (cartItem.quantity > 1) reduceCartItem(cartItem);
          }}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeCartItem: (item) => dispatch(removeCartItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  reduceCartItem: (item) => dispatch(reduceCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
