import React from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <StorefrontIcon className="header__logoImage" fontSize="large" />
        <h2 className="header__logoTitle">eSHOP</h2>
      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineone">Hello Guest</span>
          <span className="nav__itemLinetwo">Sign in</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineone">Your</span>
          <span className="nav__itemLinetwo">Shop</span>
        </div>
        <div className="nav__item nav__itemBasket">
          <ShoppingBasketIcon />
          <span className="nav__itemLinetwo nav__itemCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
