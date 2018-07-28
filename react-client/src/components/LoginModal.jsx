import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Modal, Form, Message, Button, Divider } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { toggleSignup, toggleLogin, login } from '../actions/nav';

class LoginModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			formDisabled: true
		}
	}

	onChange = (e, { name, value }) => {
		this.setState({
			[name]: value
		});
	}

	close = () => {
		this.props.toggleLogin();
	}

	submit = (e) => {
		e.preventDefault();
		let { username, password } = this.state;
		axios.post('/api/auth/login', {
			username, password
		})
			.then(() => {
				this.setState({
					success: true,
					successMessage: 'Successfully logged in.'
				});
				this.props.login(username);
				setTimeout(() => {
					this.props.history.push('/dashboard');
					this.props.toggleLogin();
				}, 2500)
			})
			.catch(err => {
				if (err.response.status === 401) {
					this.setState({
						error: true,
						errorMessage: 'Username or password was incorrect.'
					})
				} else {
					this.setState({
						error: true,
						errorMessage: 'Sorry, something went wrong.'
					})
				}
				setTimeout(() => this.setState({ error: false }), 2500);
			});
	}

	render() {
		const styles = {
			link: { 
				color: 'blue', 
				cursor: 'pointer' 
			},
			description: {
				marginBottom: '20px',
				fontSize: '1.4em'
			}
		}
		return (
			<Modal
			open={this.props.loginModalOpen}
			onClose={this.close}
			closeIcon
			style={{ textAlign: 'center' }}
			>
				<Modal.Header as='h2' content='Log In' />
				<Modal.Content>
					<Form
						error={this.state.error}
						onSubmit={this.submit}
						success={this.state.success}
					>
						<Form.Input
							name='username'
							label='Username'
							required
							onChange={this.onChange}
							/>
						<Form.Input
							name='password'
							label='Password'
							required
							type='password'
							onChange={this.onChange}
							/>
						<Message
							error
							header={this.state.errorMessage}
							/>
						<Message
							success
							header={this.state.successMessage}
							/>
						<Button
							disabled={!this.state.username
								|| !this.state.password
								|| this.state.error}
								secondary={true}
							type='submit'
							content='Submit'
							/>
					</Form>
				</Modal.Content>
				<Divider />
				<Modal.Description style={styles.description}>
					<p 
						style={styles.link}
						onClick={() => {
							this.props.toggleLogin();
							this.props.toggleSignup();
						}}
					>Create an Account</p>
				</Modal.Description>
			</Modal>
		)
	}
}

const mapStateToProps = ({ NavState }) => ({
	loginModalOpen: NavState.loginModalOpen
})

const mapDispatchToProps = dispatch => (
	bindActionCreators({ toggleSignup, toggleLogin, login }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginModal));