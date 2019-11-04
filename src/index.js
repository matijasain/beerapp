import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import NotFound from "./NotFound";

function Routing() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={App} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</Router>
	);
}

ReactDOM.render(<Routing />, document.getElementById("root"));
