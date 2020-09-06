import React from "react";

import { withRouter } from "react-router-dom";

import "./menuItem.styles.scss";

const menuItem = ({ title, imageUrl, size, history }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`/${title.toLowerCase()}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <div className="title">{title.toUpperCase()}</div>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(menuItem);
