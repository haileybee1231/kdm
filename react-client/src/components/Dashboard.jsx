import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Icon, Button, Modal, Form, Message } from 'semantic-ui-react';

import { login } from '../actions/nav.js';
import { setCampaigns } from '../actions/campaign.js';

import Navbar from './Navbar.jsx';
import CampaignList from './CampaignList.jsx';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			modalOpen: false,
			newCampaignName: ''
		}
	}

	componentDidMount() {
		axios.post('/api/auth/persist')
			.then((res) => {
				if (res.data) {
					this.props.login(res.data.username);
					this.getCampaigns();
				} else {
					this.props.history.push('/');
				}
			})
			.catch((err) => console.error(err));


		this.props.username && this.getCampaigns();
	}

	getCampaigns = () => {
		axios.get(`/api/campaign/all`)
			.then((campaigns) => {
				this.setState({
					loading: false
				});
				this.props.setCampaigns(campaigns.data);
			})
			.catch((err) => {
				console.error(err);
			})
	}

	toggleModal = (e) => {
		e.preventDefault();
		this.setState({
			modalOpen: !this.state.modalOpen
		})
	}
	
	onChange = (e, { name, value }) => {
		this.setState({
			[name]: value,
			error: false
		});
	}
	
	createCampaign = (e) => {
		e.preventDefault();

		for (let campaign of this.props.campaigns) {
			if (campaign.name === this.state.newCampaignName) {
				this.setState({
					error: true,
					errorMessage: 'Cannot have duplicate campaign names.'
				})
				return;
			}
		}

		this.props.history.push({
			pathname: '/camapign-creator',
			state: {
				// I want to add a library of random campaign names we can use if they don't enter one
				extra: this.state.newCampaignName || 'Random Name'
			}
		})
	}

	render() {
		const styles = {
			container: {
				textAlign: 'center'
			},
			loadingContainer: {
				marginTop: '33vh'
			},
			spinner: {
				marginTop: '3vh'
			},
			header: {
				marginTop: '10vh'
			},
			modal: {
				textAlign: 'center'
			}
		}
		return (
			<div style={styles.container}>
				<Navbar />
				{
					this.state.loading
						? <div style={styles.loadingContainer}>
							<h1>Loading...</h1> 
							<Icon 
								style={styles.spinner}
								loading={true} 
								name='circle notched' 
								size='massive' 
							/>
						</div>
						: <div style={styles.header}>
							<h1>Your Campaigns:</h1>
							<CampaignList />
							<Button content={'New Campaign'} onClick={this.toggleModal} primary/>
						</div>
				}
				<Modal open={this.state.modalOpen} style={styles.modal}>
					<Modal.Header as='h2' content={'Enter Campaign Name'} />
					<Modal.Content>
						<Form 
							error={this.state.error} 
							onSubmit={this.createCampaign}
						>
							<Form.Input 
								name='newCampaignName'
								label='Name:'
								onChange={this.onChange} 
							/>
							<Button 
								content='Create'
								type='submit'
								secondary
							/>
							<Button 
								content='Cancel'
								type='cancel'
								negative
								onClick={this.toggleModal}
							/>
							<Message
								error
								header={this.state.errorMessage}
							/>
						</Form>
					</Modal.Content>
				</Modal>
			</div>
		)
	}
}

const mapStateToProps = ({ NavState, CampaignState }) => ({
	username: NavState.username,
	campaigns: CampaignState.campaigns
})

const mapDispatchToProps = (dispatch) => (
	bindActionCreators({ login, setCampaigns }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dashboard));