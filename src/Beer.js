//
//
//
// this.state.visible < this.state.beers.length && (

import React from "react";

class Beer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      beers: "",
      visible: 6 // Amount of movies on main page on first load
    };

    this.loadMore = this.loadMore.bind(this);
  }

  // Load more movies on main page
  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 4 }; // Adding four more movies on "Load more"
    });

    this.setState(prev => {
      return { page: prev.visible + 1 }; // Adding four more movies on "Load more"
    });

    const url = `https://api.punkapi.com/v2/beers?page=${this.state.page}&per_page=20`;

    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ beers: data }));

    console.log(this.state.beers);
  };

  componentDidMount = () => {};

  render() {
    return (
      <div>
        <h1>Hey Beer component</h1>
        <button onClick={this.loadMore}>Load more</button>
      </div>
    );
  }
}

export default Beer;
