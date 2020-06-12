import React, { Component } from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Topbar from "view/Topbar";

import theme from "theme";
import SearchCountryView from "view/SearchCountryView";
import WorldSummaryView from "view/WorldSummaryView/";

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Topbar/>
				<Router>
					<Switch>
						<Route path="/covid-dashboard/:country" component={SearchCountryView} />
						<Route path="/covid-dashboard" component={SearchCountryView} />
					</Switch>
				</Router>
				<WorldSummaryView/>
			</ThemeProvider>

		)
	}
}

export default App;

