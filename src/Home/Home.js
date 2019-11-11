import React from "react";

import Header from "../Header/Header/Header";
import Footer from "../Footer/Footer";

import FavoriteHeart from "../FavoriteHeart/FavoriteHeart";
import "./Home.scss";
import "./PopUp.scss";
import MainSectionContainer from "../MainSectionContainer/MainSectionContainer";

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	// handleClick = () => {
	// 	const currentFavorite = this.state.favorite;
	// 	this.setState({ favorite: !currentFavorite });
  // };
  
  componentDidMount(){

  }

	render() {
    console.log("asdasdasda",this.props.selectedBeer)

		return (
			<div>
				<Header />
				<MainSectionContainer>
					{this.props.beers.map(beer => (
						<div
							key={beer.id}
							className="card"
							onClick={() => this.props.togglePopup(beer)}
						>
							<FavoriteHeart favorite={this.props.favorite} />
							<div className="card__inner-container">
								<div className="card__inner-container__beer-image">
									<img alt="beer" src={beer.image_url}></img>
								</div>
								<div className="card__inner-container__description">
									<p className="card__description__inner-container__beer-name">
										{beer.name}
									</p>
									<p className="card__description__inner-container__beer-ibu">
										IBU {beer.ibu}
									</p>
									<p className="card__description__inner-container__beer-abv">
										ABV {beer.abv}
									</p>
								</div>
							</div>
						</div>
					))}
				</MainSectionContainer>
				{this.props.beers.length > 14 && (
					<div className="load-more-button">
						<button onClick={this.props.loadMore}>Load more</button>
					</div>
				)}

				{this.props.showPopup ? (
					<div className="popup">
						<div className="popupInner">
							<div className="popupInner__close">
								<button
									className="popupInner__close-button"
									onClick={this.props.togglePopup}
								>
									Close
								</button>
							</div>
							<h1>{this.props.selectedBeer.name}</h1>
              
              <img className="main-image" src={this.props.selectedBeer.image_url} alt={this.props.selectedBeer.name}></img>
              {this.props.selectedBeer.ingredients.hops.map(hop => (
                <div>
                  <p>{hop.name}</p>
                </div>
              ))}
       

							<div className="popupInner__favorite">
								<button
									className="popupInner__favorite__button"
									onClick={() =>
										this.props.addToFavorites(this.props.selectedBeer)
									}
								>
									Add to favorite
								</button>
							</div>
						</div>
					</div>
				) : null}
				<Footer />
			</div>
		);
	}
}

export default Home;
