import React from "react";
import Header from "./Header/Header/Header";
import MainSectionContainer from "./MainSectionContainer/MainSectionContainer";
import FavoriteHeart from "./FavoriteHeart/FavoriteHeart";
import Footer from "./Footer/Footer";

import "./NotFound/NotFound.scss";
import "./Home/Home.scss";

class Favorites extends React.Component {
	constructor() {
		super();

		this.state = {
			favoriteBeers: []
		};
	}

	componentDidMount() {
		const favoriteBeers =
			JSON.parse(localStorage.getItem("favoriteBeers")) || [];
		this.setState({ favoriteBeers });
	}

	render() {
		return (
			<div>
				<Header />
				<MainSectionContainer>
					{this.state.favoriteBeers.length !== 0 ? (
						this.state.favoriteBeers.map(favoriteBeer => (
							<div key={favoriteBeer.id} className="card">
								<FavoriteHeart favorite={true} />
								<div className="card__inner-container">
									<div className="card__inner-container__beer-image">
										<img alt="beer" src={favoriteBeer.image_url}></img>
									</div>
									<div className="card__inner-container__description">
										<p className="card__description__inner-container__beer-name">
											{favoriteBeer.name}
										</p>
										<p className="card__description__inner-container__beer-ibu">
											IBU {favoriteBeer.ibu}
										</p>
										<p className="card__description__inner-container__beer-abv">
											ABV {favoriteBeer.abv}
										</p>
									</div>
								</div>
							</div>
						))
					) : (
						<div className="not-found">
							<h2>Hmmm...</h2>
							<h3>Looks like you didn't choose any favorite beers.</h3>
						</div>
					)}
				</MainSectionContainer>

				<Footer />
			</div>
		);
	}
}

export default Favorites;
