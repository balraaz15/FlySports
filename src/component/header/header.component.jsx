import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase-utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./header.styles.scss";

const Header = ({ currentUser, hideCart }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src="logo.png" alt="Logo" className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            {currentUser.displayName} | Sign Out
          </div>
        ) : (
          <Link className="option" to="/entry">
            Signin | Signup
          </Link>
        )}
        <CartIcon />
      </div>
      {!hideCart ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hideCart: state.cart.hidden,
});

export default connect(mapStateToProps)(Header);
