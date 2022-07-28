import React from 'react';
import Product from '../components/Product/Product';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <img
        src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
        alt="home page"
        className="home__image"
      />
      <div className="home__row">
        <Product />
        <Product />
      </div>
      <div className="home__row">
        <Product />
        <Product />
        <Product />
      </div>
      <div className="home__row">
        <Product />
      </div>
    </div>
  );
}

export default Home;
