import React from 'react';

import Navbar from './Navbar.jsx';
import LoginModal from './LoginModal.jsx';
import SignupModal from './SignupModal.jsx';

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	componentDidMount() {
		window.addEventListener('resize', this.resize.bind(this));
		this.resize();
	}

	resize() {
		this.setState({ resize: window.innerWidth <= 1600 })
		this.setState({ mobile: window.innerWidth <= 1000 })
	}

	render() {
		return (
			<div>
				<Navbar />
				<h1>Kingdom Death</h1>
				<LoginModal />
				<SignupModal />
			</div>
		)
	}
}

export default Main;
