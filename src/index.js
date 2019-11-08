import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import Favorites from "./Favorites";
import NotFound from "./NotFound/NotFound";

function Routing() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={App} />
					<Route exact path="/favorites" component={Favorites} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</Router>
	);
}

ReactDOM.render(<Routing />, document.getElementById("root"));
