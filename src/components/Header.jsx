import React from 'react';
import Basket from './basket/Basket';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-nav__list">
          <li className="header-nav__li">
            <NavLink
              exact
              to="/"
              activeClassName="header-nav__li-active"
              className="header-nav__link"
            >
              Home
            </NavLink>
          </li>
          <li className="header-nav__li">
            <NavLink
              to="/phones"
              activeClassName="header-nav__li-active"
              className="header-nav__link"
            >
              Phones
            </NavLink>
          </li>
          <li className="header-nav__li">
            <NavLink
              to="/fake"
              activeClassName="header-nav__li-active"
              className="header-nav__link"
            >
              Fake
            </NavLink>
          </li>
          <li className="header-nav__li">
            <NavLink
              to="/fake1/qqq/1233/12222/"
              activeClassName="header-nav__li-active"
              className="header-nav__link"
            >
              Fake
            </NavLink>
          </li>
          <li className="header-nav__li">
            <NavLink
              to="/basket"
              activeClassName="header-nav__li-active"
              className="header-nav__link"
            >
              <Basket to="/basket" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
