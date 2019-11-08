import React from "react";

import Header from "../Header/Header/Header";
import MainSectionContainer from "../MainSectionContainer/MainSectionContainer";
import Footer from "../Footer/Footer";
import "./NotFound.scss";

function NotFound() {
	return (
		<div>
			<Header />
			<MainSectionContainer>
				<div className="not-found">
					<h2>404</h2>
					<h3>Page not found</h3>
				</div>
			</MainSectionContainer>
			<Footer />
		</div>
	);
}

export default NotFound;
