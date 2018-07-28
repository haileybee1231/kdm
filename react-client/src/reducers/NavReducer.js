const defaultNavState = {};

const NavReducer = (state = defaultNavState, action) => {
	switch(action.type) {
		case 'TOGGLE-LOGIN':
			return {
				...state,
				loginModalOpen: !state.loginModalOpen,
			}
			case 'TOGGLE-SIGNUP':
			return {
				...state,
				signupModalOpen: !state.signupModalOpen
			}
			case 'LOGIN':
				return {
					...state,
					username: action.payload.username
				}
			case 'LOGOUT':
				return {
					...state,
					username: null
				}
		default: return state;
	}
}

export default NavReducer;