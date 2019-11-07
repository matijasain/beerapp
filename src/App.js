import React from "react";

import HeaderContainer from "./Header/HeaderContainer/HeaderContainer";
import Beer from "./Beer";
import Footer from "./Footer/Footer";

function App() {
	return (
		<div className="App">
			<HeaderContainer />
			<Beer />
			<Footer />
		</div>
	);
}

export default App;
