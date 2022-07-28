import React from 'react';
import './Product.css';

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">
          "Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag,
          Water Repellent Fabric for Men and Women (Blue)"
        </p>
        <div className="product__price">
          <small>$</small>
          <strong>30</strong>
        </div>
        <div className="product__rating">⭐⭐⭐</div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
        alt="product_image"
        className="product__image"
      />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
