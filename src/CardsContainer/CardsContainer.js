import React from "react";
import "./CardsContainer.scss";

function CardsContainer(props) {
	return <div className="cards-container">{props.children}</div>;
}

export default CardsContainer;
