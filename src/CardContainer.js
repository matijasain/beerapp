import React from "react";

function CardContainer(props) {
  return <div className="ui five stackable cards">{props.children}</div>;
}

export default CardContainer;
