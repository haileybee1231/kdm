const defaultNavState = {};

const SurvivorReducer = (state = defaultNavState, action) => {
	switch (action.type) {
		case 'SELECT-SURVIVOR':
			return {
				...state,
				selectedSurvivor: action.payload.survivor
			}
		default: return state;
	}
}

export default SurvivorReducer;