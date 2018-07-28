import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid } from 'semantic-ui-react';

import Navbar from './Navbar.jsx';
import SurvivorCard from './SurvivorCard.jsx';

class CampaignView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		const styles = {
			container: {
				textAlign: 'center'
			},
			grid: {
				width: '50vw',
				margin: 'auto'
			}
		}
		let { campaign, survivors } = this.props.campaign;
		return (
			<div style={styles.container}>
				<Navbar />
				<h1>Campaign: {campaign.name}</h1>
				<h2>Survivors:</h2>
				<Grid columns='3' relaxed centered style={styles.grid}>
					{survivors.map((survivor, index) => (
						<SurvivorCard survivor={survivor} key={index} />
					))}
				</Grid>
			</div>
		)	
	}
}

const mapStateToProps = ({ CampaignState }) => ({
	campaign: CampaignState.selectedCampaign
});

const mapDispatchToProps = (dispatch) => (
	bindActionCreators({ }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(CampaignView);