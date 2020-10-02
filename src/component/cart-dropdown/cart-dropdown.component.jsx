import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { AiOutlineFrown } from "react-icons/ai";

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
        <div className="empty-cart">
          <AiOutlineFrown
            style={{ display: "block", margin: "0 auto", fontSize: "60px" }}
          />
          <p>Your Cart is Empty!</p>
        </div>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        toggleCartHidden();
      }}
    >
      Checkout
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
