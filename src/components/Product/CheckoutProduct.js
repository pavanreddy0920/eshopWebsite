import React from 'react';
import './CheckoutProduct.css';
import useStateValue from '../../state/stateProvider';

function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromMasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <div>
      <div className="checkoutProduct">
        <img
          src={image}
          alt="product image"
          className="checkoutProduct__image"
        />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>⭐</p>
              ))}
          </div>
          <button onClick={removeFromMasket}>Remove from Basket</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
