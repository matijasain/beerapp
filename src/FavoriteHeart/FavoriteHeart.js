import React from "react";
import "./FavoriteHeart.scss";

class FavoriteHeart extends React.Component {
	render() {
		return (
			<div
				className={this.props.favorite ? "__favorite" : "__non-favorite"}
			></div>
		);
	}
}

export default FavoriteHeart;
