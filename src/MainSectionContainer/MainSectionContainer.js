import React from "react";
import "./MainSectionContainer.scss";

function MainSectionContainer(props) {
	return <div className="main-section-container">{props.children}</div>;
}

export default MainSectionContainer;
