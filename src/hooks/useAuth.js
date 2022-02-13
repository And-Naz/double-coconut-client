import { useState, useCallback, useEffect } from 'react'

const storageName = 'double-coconut'

const useAuth = () => {
	const [token, setToken] = useState(null)
	const [ready, setReady] = useState(false)
	const [user, setUser] = useState(null)

	const login = useCallback((jwtToken, _user) => {
		setToken(jwtToken)
		setUser(_user)

		localStorage.setItem(storageName, JSON.stringify({
			user: _user, token: jwtToken
		}))
	}, [])


	const logout = useCallback(() => {
		setToken(null)
		setUser(null)
		localStorage.removeItem(storageName)
	}, [])

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem(storageName))

		if (data && data.token) {
			login(data.token, data.user)
		}
		setReady(true)
	}, [login])


	return { login, logout, token, user, ready }
}

export default useAuth
