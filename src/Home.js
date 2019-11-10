import React from "react";
import Card from "./Card/Card";
import PopupBeer from "./PopupBeer/PopupBeer";
import MainSectionContainer from "./MainSectionContainer/MainSectionContainer";

class Beer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showPopup: false,
			page: 2,
			beers: [],
			selectedBeer: []
		};

		// this.loadMore = this.loadMore.bind(this);
	}

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

	componentDidMount = () => {
		const url = `https://api.punkapi.com/v2/beers?page=1&per_page=15`;

		fetch(url)
			.then(res => res.json())
			.then(data => this.setState({ beers: data }));
	};

	render() {
		// const something = this.state.beers.map(ingredients =>
		// 	ingredients.ingredients.hops.map(hop => (
		// 		<div>
		// 			<p>{hop.name}</p>
		// 			<p></p>

		// 			<p></p>

		// 			<p></p>
		// 		</div>
		// 	))
		// );

		return (
			<div>
				<MainSectionContainer>
					{this.state.beers.map(beer => (
						<Card
							key={beer.id}
							src={beer.image_url}
							beerName={beer.name}
							ibu={beer.ibu}
							abv={beer.abv}
							beer={beer}
							togglePopup={this.togglePopup}
						/>
					))}
				</MainSectionContainer>
				{this.state.beers.length > 14 && (
					<button onClick={this.loadMore}>Load more</button>
				)}

				{this.state.showPopup ? (
					<PopupBeer
						beer={this.state.selectedBeer}
						closePopup={this.togglePopup}
					/>
				) : null}
			</div>
		);
	}
}

export default Beer;
