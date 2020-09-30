import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart-actions";

import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = ({ toggleCartHidden, cartItems }) => (
  <div className="cart-dropdown" onMouseLeave={toggleCartHidden}>
    <div className="cart-items">
      {cartItems.map((item) => (
        <p key={item.id}>
          {item.product_name} {item.price}
        </p>
      ))}
    </div>
    <CustomButton>My Cart</CustomButton>
    <CustomButton>Checkout</CustomButton>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
