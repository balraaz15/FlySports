import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase-utils";

import "./header.styles.scss";

const Header = ({ currentUser }) => {
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
      </div>
    </div>
  );
};

export default Header;
