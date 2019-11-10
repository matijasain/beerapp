import React from "react";
import "./PopUp.scss";

function PopupBeer(props) {
	return (
		<div className="popup">
			<div className="popupInner">
				<h1>THIS IS POPUP</h1>
				<h2>{props.beer.name}</h2>
			</div>
		</div>
	);
}

export default PopupBeer;
