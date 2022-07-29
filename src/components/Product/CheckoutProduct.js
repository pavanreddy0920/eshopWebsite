import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct() {
  return (
    <div>
      <div className="checkoutProduct">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          alt="product image"
          className="checkoutProduct__image"
        />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">
            "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra
            Wide Dual WQHD 5120 x 1440"
          </p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{1094.98}</strong>
          </p>
          <div className="checkoutProduct__rating">
            <p>⭐</p>
          </div>
          <button>Remove from Basket</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
