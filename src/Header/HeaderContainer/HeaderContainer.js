import React from "react";
import Navigation from "../Navigation/Navigation";
import HeaderMain from "../HeaderMain/HeaderMain";

import "./HeaderContainer.scss";

class HeaderContainer extends React.Component {
	render() {
		return (
			<div className="header-container">
				<Navigation />
				<HeaderMain />
			</div>
		);
	}
}

export default HeaderContainer;
