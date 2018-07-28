import React from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar.jsx';
import LoginModal from './LoginModal.jsx';
import SignupModal from './SignupModal.jsx';

class LandingPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	componentDidMount() {
		window.addEventListener('resize', this.resize);
		this.resize();
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resize);
	}

	resize = () => {
		this.setState({ resize: window.innerWidth <= 1600 })
		this.setState({ mobile: window.innerWidth <= 1000 })
	}

	render() {
		const styles = {
			container: {
				textAlign: 'center',
			},
			header: {
				marginTop: this.state.mobile ? '150px' : '50px'
			},
			image: {
				marginTop: '50px'
			}
		}
		return (
			<div style={styles.container}>
				<Navbar />
				<h1 style={styles.header}>Kingdom Death</h1>
				<h3>A Companion Tool</h3>
				<img style={styles.image} src='https://2.bp.blogspot.com/-VdHsIyrNErE/WD3EhmjopxI/AAAAAAAABNc/vZhJ_jRFxbQrwjI0c459P9vM7mhLKnvjQCLcB/s1600/Kingsman.jpg'></img>
				{this.props.loginModalOpen && <LoginModal />}
				{this.props.signupModalOpen && <SignupModal />}
			</div>
		)
	}
}

const mapStateToProps = ({ NavState }) => ({
	loginModalOpen: NavState.loginModalOpen,
	signupModalOpen: NavState.signupModalOpen,
})

export default connect(mapStateToProps, null)(LandingPage);
