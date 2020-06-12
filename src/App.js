import React, { Component } from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Topbar from "view/Topbar";

import theme from "theme";
import SearchCountryView from "view/SearchCountryView";
import WorldSummaryView from "view/WorldSummaryView/";
import WorldTableView from "view/WorldTableView/WorldTableView";

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Topbar/>
				<Router>
					<Switch>
						<Route exact path="/" render={()=> <Redirect to="/covid-dashboard/"/>}/>
						<Route path="/covid-dashboard/:country" component={SearchCountryView} />
						<Route path="/covid-dashboard" component={SearchCountryView} />
					</Switch>
				</Router>
				<WorldSummaryView/>
				<WorldTableView/>
			</ThemeProvider>

		)
	}
}

export default App;

