import React from 'react';
import './Product.css';
import useStateValue from '../../state/stateProvider';

function Product({ id, title, price, rating, image }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };

  return (
    <div key={id} className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <div className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product_image" className="product__image" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
