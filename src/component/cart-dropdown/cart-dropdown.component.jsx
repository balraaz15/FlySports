import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart-actions";

import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = ({ toggleCartHidden }) => (
  <div className="cart-dropdown" onMouseLeave={toggleCartHidden}>
    <div className="cart-items"></div>
    <CustomButton>My Cart</CustomButton>
    <CustomButton>Checkout</CustomButton>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartDropdown);
