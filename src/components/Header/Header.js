import "../Header/Header.scss";

import Logo from "../../assets/Logo/InStock-Logo_1x.png";
import Button from "../Button/Button";

import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
	const location = useLocation();

	return (
		<header className="header">
			<div className="header__logo">
				<a href="/">
					<img alt="inStock logo" src={Logo} />
				</a>
			</div>
			<nav className="header__links">
				<NavLink className="header__link" to="/warehouses">
					<Button text="Warehouses" style={" navButton nav" + (location.pathname === "/" || location.pathname.includes("/warehouses") ? "--active" : "")} />
				</NavLink>
				<NavLink className="header__link" to="/inventory">
					<Button text="Inventory" style={" navButton nav" + (location.pathname.includes("/inventory") ? "--active" : "")} />
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
