const defaultNavState = {};

const CampaignReducer = (state = defaultNavState, action) => {
	switch (action.type) {
		case 'SET-CAMPAIGNS':
			return {
				...state,
				campaigns: action.payload.campaigns
			}
		default: return state;
	}
}

export default CampaignReducer;