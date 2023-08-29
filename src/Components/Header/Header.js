import React from "react";
import Logo from "../../assets/Logo/InStock-Logo_1x.png";
import { NavLink } from "react-router-dom";
import "../Header/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a className="header__logo-link" href="/">
          <img className="header__logo" alt="inStock logo" src={Logo} />
        </a>
      </div>
      <nav className="header__links">
        <NavLink to="/warehouse" className="header__link" activeClassName="header__link--active">
          <div>Warehouses</div>
        </NavLink>
        <NavLink to="/inventory" className="header__link" activeClassName="header__link--active">
          <div>Inventory</div>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;