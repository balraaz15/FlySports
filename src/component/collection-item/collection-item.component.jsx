import React from "react";
import { connect } from "react-redux";
import { FaCartPlus } from "react-icons/fa";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart-actions";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { product_name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="product-name">{product_name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        <FaCartPlus style={{ fontSize: "18px", margin: "0 8px -4px 0" }} />
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
