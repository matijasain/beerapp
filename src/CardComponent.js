import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CardComponent = () => (
	<Card>
		<Card.Content extra>
			<a>
				<Icon name="heart outline icon" />
			</a>
		</Card.Content>
		<Image src="" wrapped ui={true} />
		<Card.Content>
			<Card.Header>Beer</Card.Header>
			<Card.Meta>
				<span className="date">2015</span>
			</Card.Meta>
			<Card.Description>Beer of this and this.</Card.Description>
		</Card.Content>
	</Card>
);

export default CardComponent;
