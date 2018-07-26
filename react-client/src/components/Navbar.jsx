import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

import { toggleLogin, toggleSignup } from '../actions/nav.js';

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
					fixed='top'
					size='huge'
					style={{ minHeight: '40px' }}
				>
					<Link to='/'>
						<Menu.Item link={true}>Home</Menu.Item>
					</Link>
					<Menu.Menu position='right'>
						<Menu.Item
							link={true}
							position='right'
							onClick={this.props.toggleLogin}
						>
							Log In
						</Menu.Item>
						<Menu.Item
							link={true}
							position='right'
							onClick={this.props.toggleSignup}
						>
							Sign Up
						</Menu.Item>
					</Menu.Menu>
				</Menu>
			)
		} else {
			return (
				<Menu
					fixed='top'
					inverted={true}
					stackable={true}
					size='massive'
				>
					<Link to='/'>
						<Menu.Item link={true} style={styles.item}>Home</Menu.Item>
					</Link>
					{this.state.mobileOpen ?
						<Menu
							vertical={true}
							inverted={true}
							fixed='right'
							size='massive'
							style={{ height: 'auto' }}
						>
							<Menu.Item icon={true} position='right'>
								<Icon
									name='bars'
									size='huge'
									inverted={true}
									color='blue'
									style={styles.mobileMenu}
									onClick={this.mobileMenuToggle.bind(this)}
								/>
							</Menu.Item>
							<Menu.Item
								link={true}
								style={styles.item}
							>
								Login
							</Menu.Item>
							<Menu.Item
								link={true}
								style={styles.item}
							>
								Signup
							</Menu.Item>
						</Menu>
						: <Menu.Item icon={true} position='right'>
							<Icon
								name='bars'
								size='huge'
								inverted={true}
								onClick={this.mobileMenuToggle.bind(this)}
							/>
						</Menu.Item>
					}
				</Menu>
			)
		}
	}
}

const mapDispatchToProps = dispatch => (
	bindActionCreators({ toggleLogin, toggleSignup}, dispatch)
)

export default connect(null, mapDispatchToProps)(NavBar);