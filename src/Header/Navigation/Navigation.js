import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

class Navigation extends React.Component {
	render() {
		return (
			<div className="navigation">
				<div className="navigation__logo">
					<span className="beer-logo"></span>
					<span className="beerup-logo"></span>
				</div>
				<div className="navigation__menu">
					<NavLink className="nav-link" to={"/"}>
						Home
					</NavLink>

					<NavLink className="nav-link" to={"/Favorites"}>
						Favorites
					</NavLink>

					<NavLink className="join-link" to={"/"}>
						JOIN
					</NavLink>
				</div>
			</div>
		);
	}
}

export default Navigation;
