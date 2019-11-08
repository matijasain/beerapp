import React from "react";
import Button from "../../Button/Button";

import "./HeaderText.scss";

class HeaderText extends React.Component {
	render() {
		return (
			<div className="header-main">
				<div className="header-main__main-text">
					<div className="header-main__main-text__small-heading">
						<p>THE BEERSTER PRO 2.0</p>
					</div>
					<div className="header-main__main-text__main-heading">
						<h1>JOIN OUR FAMOUS BEERUP!</h1>
					</div>
					<Button buttonTitle="JOIN BEERUP" />
				</div>
				<div className="header-main__main-image"></div>
			</div>
		);
	}
}

export default HeaderText;
