import React from 'react';
import { connect } from 'react-redux';
import { Accordion, Button } from 'semantic-ui-react';

class CampaignList extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			activeIndex: -1
		}
	}

	handleTitleClick = (e, titleProps) => {
		const { index } = titleProps
		const { activeIndex } = this.state
		const newIndex = activeIndex === index ? -1 : index

		this.setState({ activeIndex: newIndex })
	}

	render() {
		const styles = {
			campaignHeader: {
				color: 'white',
			},
			campaignContent: {
				marginBottom: '30px'
			}
		}
		let { campaigns } = this.props;
		let { activeIndex } = this.state;
		return (
			campaigns
				? campaigns.map((campaign, index) => (
					<Accordion key={index}>
						<Accordion.Title 
							index={index}
							content={campaign.name}
							as='h3'
							style={styles.campaignHeader}
							active={activeIndex === index} 
							onClick={this.handleTitleClick} 
						/>
						<Accordion.Content active={activeIndex === index} style={styles.campaignContent}>
							<p>Lantern Year: {campaign.lantern_year}</p>
							<p>Survivors: {campaign.survivor_count}</p>
							<Button 
								content={'Quick Edit'}
								secondary
								/>
							<Button 
								content={'Open'} 
								secondary
							/>
						</Accordion.Content>
					</Accordion>
				))
				: <h3>No Campaigns Yet</h3>
		)
	}
}

const mapStateToProps = ({ CampaignState }) => ({
	campaigns: CampaignState.campaigns
})

export default connect(mapStateToProps, null)(CampaignList);