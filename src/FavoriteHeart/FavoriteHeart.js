import React from "react";
import "./FavoriteHeart.scss";

class FavoriteHeart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			favorite: false
		};
	}

	handleClick = () => {
		const currentFavorite = this.state.favorite;
		this.setState({ favorite: !currentFavorite });
	};

	render() {
		console.log("HARRT IS HIR");
		return (
			<div
				className={this.state.favorite ? "__favorite" : "__non-favorite"}
				onClick={this.handleClick}
			></div>
		);
	}
}

export default FavoriteHeart;
