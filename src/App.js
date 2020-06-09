import React, { Component } from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Topbar from "view/Topbar";

import theme from "theme";
import SearchCountryView from "view/SearchCountryView";

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Router>
					<Switch>
						<Route path="/">
							<Topbar/>
							<SearchCountryView/>
						</Route>
					</Switch>
				</Router>
			</ThemeProvider>

		)
	}
}

export default App;

