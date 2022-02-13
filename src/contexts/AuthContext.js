import { createContext } from 'react'

const AuthContext = createContext({
	token: null,
	user: null,
	login: Function.prototype,
	logout: Function.prototype,
	isAuthenticated: false
})

export default AuthContext
