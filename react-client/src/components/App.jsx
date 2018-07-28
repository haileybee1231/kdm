import React from 'react';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';

import LandingPage from './LandingPage.jsx';
import Dashboard from './Dashboard.jsx';
import CampaignView from './CampaignView.jsx';
import SurvivorView from './SurvivorView.jsx';

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	// App component handles all redirections based on path options below
	render() {
		return (
			<Router history={browserHistory}>
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<Route path='/dashboard' component={Dashboard} />
					<Route path='/campaign-view' component={CampaignView} />
					<Route path='/campaign-creator' component={Dashboard} />
					<Route path='/survivor*' component={SurvivorView} />
				</Switch>
			</Router>
		)
	}
}

export default App;
