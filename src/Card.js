import React from "react";
import "./Card.scss";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="ui card">
        <div className="content">
          <i className="left floated like icon"></i>

          <img alt="beer" src={this.props.src}></img>

          <div className="description">
            <h3>{this.props.beerName}</h3>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
