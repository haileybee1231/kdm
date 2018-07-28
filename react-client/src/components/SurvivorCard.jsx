import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

import { selectSurvivor } from '../actions/survivor.js';

class SurvivorCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	selectSurvivor = () => {
		this.props.selectSurvivor(this.props.survivor);
		this.props.history.push(`/survivor?name=${this.props.survivor.name}`);
	}

	render() {
		const styles ={
			card: {
				color: 'black',
				margin: 'auto',
				marginBottom: '30px',
				cursor: 'pointer'
			}
		}
		let { survivor } = this.props;
		return (
			<Card style={styles.card} raised onClick={this.selectSurvivor}>
				<Card.Header>Name: {survivor.name}</Card.Header>
				<Card.Meta>Gender: {survivor.gender ? 'M' : 'F'}</Card.Meta>
				<Card.Content>
					<ul>
						<li>Survival: {survivor.survival}</li>
						<li>Insanity: {survivor.insanity}</li>
						<li>Insane: {survivor.insanity >= 3 ? 'Yes' : 'No'}</li>
					</ul>
				</Card.Content>
			</Card>
		)
	}
}

const mapDispatchToProps = (dispatch) => (
	bindActionCreators({ selectSurvivor }, dispatch)
)

export default connect(null, mapDispatchToProps)(withRouter(SurvivorCard));