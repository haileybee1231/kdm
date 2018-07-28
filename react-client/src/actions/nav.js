export const toggleLogin = () => (
	{
		type: 'TOGGLE-LOGIN'

	}
)

export const toggleSignup = () => (
	{
		type: 'TOGGLE-SIGNUP'
	}
)

export const login = (username) => (
	{
		type: 'LOGIN',
		payload: {
			username: username
		}
	}
)

export const logout = () => (
	{
		type: 'LOGOUT'
	}
)