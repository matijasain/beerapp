import React from "react";

import "./Button.scss";

function Button(props) {
	return <div className="main-button">{props.buttonTitle}</div>;
}

export default Button;
