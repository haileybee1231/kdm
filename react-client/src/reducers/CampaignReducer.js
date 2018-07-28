const defaultNavState = {};

const CampaignReducer = (state = defaultNavState, action) => {
	switch (action.type) {
		case 'SET-CAMPAIGNS':
			return {
				...state,
				campaigns: action.payload.campaigns
			}
		case 'SELECT-CAMPAIGN':
			return {
				...state,
				selectedCampaign: action.payload.campaign
			}
		default: return state;
	}
}

export default CampaignReducer;