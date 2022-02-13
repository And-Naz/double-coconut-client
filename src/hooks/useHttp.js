import { useMemo, useContext, useState, useCallback } from "react"
import AuthContext from "../contexts/AuthContext"
import axios from "axios"

const baseURL = process.env.REACT_APP_API

function useHttp() {
	const auth = useContext(AuthContext)
	const [loading, setLoading] = useState(false)
	const api = useMemo(() => {
		const headers = { 'Content-Type': 'application/json' }
		if (auth.isAuthenticated) {
			headers['authorization'] = auth.token
		}
		return axios.create({ baseURL, headers });
	}, [auth])
	const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
		setLoading(true)
		try {
			let requestMethod = Function.prototype
			switch (method) {
				case "POST":
					requestMethod = api.post
					break;
				case "PATCH":
					requestMethod = api.patch
					break;
				case "DELETE":
					requestMethod = api.delete
					break;
				default:
					requestMethod = api.get
					break;
			}
			const response = await requestMethod(url, body, { headers })
			setLoading(false)
			return response
		} catch (error) {
			setLoading(false)
			throw error
		}
	}, [])
	return { loading, request }
}

export default useHttp