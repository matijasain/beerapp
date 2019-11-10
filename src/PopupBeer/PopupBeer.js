import React from "react";
import "./PopUp.scss";
import FavoriteHeart from "../FavoriteHeart/FavoriteHeart";

class PopupBeer extends React.Component {
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
		return (
			<div className="popup">
				<div className="popupInner">
					<FavoriteHeart
						favorite={this.state.favorite}
						handleClick={this.handleClick}
					/>
					<h1>THIS IS POPUP</h1>
					<h2>{this.props.beer.name}</h2>

					<button onClick={() => this.handleClick}>Add to favorite</button>
				</div>
			</div>
		);
	}
}

export default PopupBeer;
