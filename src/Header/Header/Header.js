import React from "react";
import Navigation from "../Navigation/Navigation";
import HeaderText from "../HeaderText/HeaderText";

import "./Header.scss";

class Header extends React.Component {
	render() {
		return (
			<div className="header-container">
				<Navigation />
				<HeaderText />
			</div>
		);
	}
}

export default Header;
