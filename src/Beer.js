//
//
//
// this.state.visible < this.state.beers.length && (

import React from "react";

class Beer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			page: 2,
			beers: []
		};

		// this.loadMore = this.loadMore.bind(this);
	}

	loadMore = () => {
		const url = `https://api.punkapi.com/v2/beers?page=${this.state.page}&per_page=20`;

		fetch(url)
			.then(res => res.json())
			.then(data => this.setState({ beers: data }));

		this.setState(prev => {
			return { page: prev.page + 1 };
		});
	};

	componentDidMount = () => {
		const url = `https://api.punkapi.com/v2/beers?page=1&per_page=20`;

		fetch(url)
			.then(res => res.json())
			.then(data => this.setState({ beers: data }));

		console.log(this.state.beers);
	};

	render() {
		return (
			<div>
				<h1>Hey Beer component</h1>
				{this.state.beers.length > 19 && (
					<button onClick={this.loadMore}>Load more</button>
				)}

				{this.state.beers.map(beer => (
					<h1>{beer.name}</h1>
				))}
			</div>
		);
	}
}

export default Beer;
