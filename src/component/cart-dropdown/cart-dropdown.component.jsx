import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { toggleCartHidden } from "../../redux/cart/cart-actions";

import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart-selectors";

const CartDropdown = ({ toggleCartHidden, cartItems, history }) => (
  <div className="cart-dropdown" onMouseLeave={toggleCartHidden}>
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <h5 className="empty-cart">Your Cart is Empty!</h5>
      )}
    </div>
    <CustomButton>My Cart</CustomButton>
    <CustomButton onClick={() => history.push("/checkout")}>
      Checkout
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
