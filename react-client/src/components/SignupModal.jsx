import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import EmailValidator from 'email-validator';
import { Modal, Form, Message, Button } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';

import { toggleSignup, toggleLogin } from '../actions/nav';

class SignupModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			formDisabled: true
		}
	}

	onChange = (e, {name, value}) => {
		this.setState({
			[name]: value
		}, this.checkPasswordsEqual(name, value));
	}

	checkPasswordsEqual = (name, value) => {
		if (name === 'password' && value === this.state.password2
			|| name === 'password2' && value === this.state.password) {
			this.setState({ error: false });
		} else if (name === 'password' || name === 'password2') {
			this.setState({ error: true, errorMessage: 'Passwords do not match!' });
		}
	}

	close = () => {
		this.props.toggleSignup();
	}

	submit = (e) => {
		e.preventDefault();
		let { username, email, password } = this.state;
		if (!EmailValidator.validate(email)) {
			this.setState({
				error: true,
				errorMessage: 'Please enter a valid email address.'
			});
			setTimeout(() => this.setState({ error: false }), 2500);
			return;
		}
		axios.post('/api/auth/signup', {
			email, username, password
		})
		.then(res => {
			this.setState({ 
				success: true,
				successMessage: 'Account successfully created.'
			});
			setTimeout(() => {
				this.props.toggleSignup();
				this.props.toggleLogin();
			}, 2500);
		})
		.catch(err => {
			this.setState({
				error: true,
				errorMessage: 'Something went wrong, please try again.'
			})
		});
	}

	render() {
		return (
			<Modal
				open={this.props.signupModalOpen}
				onClose={this.close}
				closeIcon
				style={{textAlign: 'center'}}
			>
				<Modal.Header as='h2' content='Sign Up' />
				<Modal.Content>
					<Form 
						error={this.state.error} 
						onSubmit={this.submit}
						success={this.state.success}
					>
						<Form.Input 
							name='email'
							label='Email'
							placeholder='example@example.com'
							required
							onChange={this.onChange}
							autoFocus
						/>
						<Form.Input 
							name='username'
							label='Username'
							placeholder='wretched_survivor'
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
						<Form.Input 
							name='password2'
							label='Password Again (just to make sure)'
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
							disabled={!this.state.email 
								|| !this.state.username 
								|| !this.state.password 
								|| !this.state.password2 
								|| this.state.error } 
							secondary={true} 
							type='submit' 
							content='Submit' 
						/>
					</Form>
				</Modal.Content>
			</Modal>
		)
	}
}

const mapStateToProps = ({ NavState }) => ({
	signupModalOpen: NavState.signupModalOpen
})

const mapDispatchToProps = dispatch => (
	bindActionCreators({ toggleSignup, toggleLogin }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal);