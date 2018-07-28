export const setCampaigns = (campaigns) => (
	{
		type: 'SET-CAMPAIGNS',
		payload: {
			campaigns
		}
	}
)

export const selectCampaign = (campaign) => (
	{
		type: 'SELECT-CAMPAIGN',
		payload: {
			campaign
		}
	}
)