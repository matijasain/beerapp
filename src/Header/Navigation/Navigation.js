import React from "react";

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
					<span>Home</span>
					<span>Favorites</span>
					<span className="join">JOIN</span>
				</div>
			</div>
		);
	}
}

export default Navigation;
