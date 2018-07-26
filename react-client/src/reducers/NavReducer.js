const defaultNavState = {};

const NavReducer = (state = defaultNavState, action) => {
	switch(action.type) {
		case 'TOGGLE-LOGIN':
			return {
				...state,
				loginModalOpen: !state.loginModalOpen
			}
		case 'TOGGLE-SIGNUP':
			return {
				...state,
				signupModalOpen: !state.signupModalOpen
			}
		default: return state;
	}
}

export default NavReducer;