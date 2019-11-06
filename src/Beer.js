import React from "react";
import Card from "./Card";
import CardContainer from "./CardContainer";

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
  };

  render() {
    const something = this.state.beers.map(ingredients =>
      ingredients.ingredients.hops.map(hop => (
        <div>
          <p>{hop.name}</p>
          <p></p>

          <p></p>

          <p></p>
        </div>
      ))
    );

    return (
      <div>
        {this.state.beers.length > 19 && (
          <button onClick={this.loadMore}>Load more</button>
        )}

        <CardContainer>
          {this.state.beers.map(beer => (
            <div>
              <Card key={beer.id} src={beer.image_url} beerName={beer.name} />
              <p>{something}</p>
            </div>
          ))}
        </CardContainer>
      </div>
    );
  }
}

export default Beer;
