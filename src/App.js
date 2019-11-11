import React from "react";
import Home from "./Home/Home";
import Favorites from "./Favorites";
import NotFound from "./NotFound/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends React.Component {
	state = {
		showPopup: false,
		page: 2,
		beers: [],
		selectedBeer: [],
    favoriteBeers: []
	};

	loadMore = () => {
		const url = `https://api.punkapi.com/v2/beers?page=${this.state.page}&per_page=15`;

		fetch(url)
			.then(res => res.json())
			.then(data => this.setState({ beers: data }));

		this.setState(prev => {
			return { page: prev.page + 1 };
		});
	};

	togglePopup = beer => {
		this.setState({
			selectedBeer: beer,
			showPopup: !this.state.showPopup
		});
	};

	addToFavorites = selectedBeer => {
		let favoriteBeers = JSON.parse(localStorage.getItem("favoriteBeers")) || [];

		if (
			!favoriteBeers.some(
				alreadyFavorite => alreadyFavorite.id === selectedBeer.id
			)
		) {
			localStorage.setItem(
				"favoriteBeers",
				JSON.stringify([...favoriteBeers, selectedBeer])
			);
		}
	};

	componentDidMount = () => {
		const url = `https://api.punkapi.com/v2/beers?page=1&per_page=15`;

		fetch(url)
			.then(res => res.json())
			.then(data => this.setState({ beers: data }));
	};

	render() {
		return (
			<Router>
				<Switch>
					<Route
						path="/"
						exact
						render={() => (
							<Home
								showPopup={this.state.showPopup}
								togglePopup={this.togglePopup}
								beers={this.state.beers}
								selectedBeer={this.state.selectedBeer}
								loadMore={this.loadMore}
								addToFavorites={this.addToFavorites}
								favorite={this.state.favorite}
							/>
						)}
					/>
					<Route path="/favorites" exact render={() => <Favorites />} />
					<Route render={() => <NotFound />} />
				</Switch>
			</Router>
		);
	}
}
