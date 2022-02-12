import api from "../api"
import { useState, useCallback } from 'react'

function useHttp() {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
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
			if (response.statusText !== "OK") {
				throw new Error(response.data || "Bad Request")
			}
			setLoading(false)
			return response.data
		} catch (error) {
			setError(error.message)
			setLoading(false)
		}
	}, [])
	const clear = useCallback(() => setError(null), [])
	return { loading, error, request, clear }
}

export default useHttp