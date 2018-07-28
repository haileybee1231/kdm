export const selectSurvivor = (survivor) => (
	{
		type: 'SELECT-SURVIVOR',
		payload: {
			survivor
		}
	}
)