import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Navbar from './Navbar.jsx';

class SurvivorView extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {

		}
	}

	render() {
		return (
			<div>
				<Navbar />
			</div>
		)
	}
}

export default connect(null, null)(SurvivorView);