import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import useStateValue from '../../state/stateProvider';

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <div className="header">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="header__logo">
            <StorefrontIcon className="header__logoImage" fontSize="large" />
            <h2 className="header__logoTitle">eSHOP</h2>
          </div>
        </Link>
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
          <Link to="/checkout" style={{ textDecoration: 'none' }}>
            <div className="nav__item nav__itemBasket">
              <ShoppingBasketIcon />
              <span className="nav__itemLinetwo nav__itemCount">
                {basket.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
