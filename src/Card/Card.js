import React from "react";
import "./Card.scss";

class Card extends React.Component {
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
			<div className="card">
				<div
					onClick={this.handleClick}
					className={
						this.state.favorite ? "card__favorite" : "card__non-favorite"
					}
				></div>

				<div className="card__inner-container">
					<div className="card__inner-container__beer-image">
						<img alt="beer" src={this.props.src}></img>
					</div>
					<div className="card__inner-container__description">
						<p className="card__description__inner-container__beer-name">
							{this.props.beerName}
						</p>
						<p className="card__description__inner-container__beer-ibu">
							IBU {this.props.ibu}
						</p>
						<p className="card__description__inner-container__beer-abv">
							ABV {this.props.abv}
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
