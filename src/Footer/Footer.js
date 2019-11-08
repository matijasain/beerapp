import React from "react";
import { NavLink } from "react-router-dom";

import "./Footer.scss";

class Footer extends React.Component {
	render() {
		return (
			<div className="footer-container">
				<div className="footer-container__navigation">
					<div>
						<span className="beer-logo-footer"></span>
						<span className="beer-symbol-footer"></span>
					</div>

					<div className="footer-container__navigation__links">
						<NavLink className="nav-link" to={"/"}>
							HOME
						</NavLink>
						<NavLink className="nav-link" to={"/Favorites"}>
							FAVORITES
						</NavLink>
						<NavLink className="nav-link" to={"/"}>
							JOIN
						</NavLink>
					</div>

					<div className="footer-container__navigation__social">
						<i className="fi-xnsuxl-facebook"></i>
						<i className="fi-xnsuxl-twitter"></i>
						<i className="fi-snsuxl-linkedin"></i>
						<i className="fi-xnsuxl-pinterest-alt"></i>
					</div>
				</div>

				<div className="footer-container__line"></div>

				<div className="footer-container__copyright">
					<span>&copy;2019 All rights reserved.</span>
				</div>
			</div>
		);
	}
}

export default Footer;
