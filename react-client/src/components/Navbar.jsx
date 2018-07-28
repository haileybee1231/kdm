import React from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import { toggleLogin, toggleSignup, logout } from '../actions/nav.js';

class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			mobileOpen: false
		}
	}

	mobileDeviceCheck() {
		return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/IEMobile/i)
	}

	mobileMenuToggle() {
		this.setState({
			mobileOpen: !this.state.mobileOpen
		})
	}

	logout = () => {
		axios.post('/api/auth/logout')
			.then(() => {
				this.props.logout();
				this.props.history.push('/');
			})
			.catch((err) => {
				console.error(err);
			})
	}

	render() {
		const styles = {
			item: {
				fontSize: '3rem',
			},
			mobileMenu: {
				marginTop: '7px',
				marginRight: '-12px'
			}
		}
		if (!this.mobileDeviceCheck()) {
			return (
				<Menu
					attached='top'
					size='huge'
					style={{ minHeight: '40px' }}
				>
					<Link to='/'>
						<Menu.Item link={true}>Home</Menu.Item>
					</Link>
					<Menu.Menu position='right'>
						<Menu.Item
							link={this.props.username ? false : true}
							position='right'
							onClick={this.props.username ? null : this.props.toggleLogin}
						>
							{this.props.username ? `Welcome, ${this.props.username}` : `Log In`}
						</Menu.Item>
						<Menu.Item
							link={true}
							position='right'
							onClick={this.props.username ? this.logout : this.props.toggleSignup}
						>
							{this.props.username ? 'Log Out' : 'Sign Up'}
						</Menu.Item>
					</Menu.Menu>
				</Menu>
			)
		} else {
			return (
				<Menu
					attached='top'
					size='massive'
				>
					<Link to='/'>
						<Menu.Item link={true} style={styles.item}>Home</Menu.Item>
					</Link>
					{this.state.mobileOpen ?
						<Menu
							vertical={true}
							fixed='right'
							size='massive'
							style={{ height: 'auto' }}
						>
							<Menu.Item icon={true} position='right'>
								<Icon
									name='bars'
									size='huge'
									color='blue'
									style={styles.mobileMenu}
									onClick={this.mobileMenuToggle.bind(this)}
								/>
							</Menu.Item>
							<Menu.Item
								link={this.props.username ? false : true}
								style={styles.item}
								onClick={this.props.username ? null : this.props.toggleLogin}
							>
								{this.props.username ? `Welcome, ${this.props.username}` : `Log In`}
							</Menu.Item>
							<Menu.Item
								link={true}
								style={styles.item}
								onClick={this.props.username ? this.logout : this.props.toggleSignup}
							>
								{this.props.username ? 'Log Out' : 'Sign Up'}
							</Menu.Item>
						</Menu>
						: <Menu.Item icon={true} position='right'>
							<Icon
								name='bars'
								size='huge'
								onClick={this.mobileMenuToggle.bind(this)}
							/>
						</Menu.Item>
					}
				</Menu>
			)
		}
	}
}

const mapStateToProps = ({ NavState }) => ({
		username: NavState.username
})

const mapDispatchToProps = (dispatch) => (
	bindActionCreators({ toggleLogin, toggleSignup, logout }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));