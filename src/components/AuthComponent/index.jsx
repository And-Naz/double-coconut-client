import { lazy, Suspense, useState, useCallback, useContext } from 'react'
import AuthContext from "../../contexts/AuthContext"
import useHttp from "../../hooks/useHttp"
import "./style.css"
const Login = lazy(() => import('./Login'))
const Registration = lazy(() => import('./Registration'))

function AuthComponent() {

	const [hideRegistration, setHideRegistration] = useState(true)
	const triggerForms = useCallback(() => setHideRegistration(prev => !prev), [])

	const auth = useContext(AuthContext)
	const { request, loading } = useHttp()

	const registrationInSystem = useCallback(async data => {
		const requestData = { ...data }
		delete requestData.confirmPassword
		try {
			const registrationResponse = await request("/auth/registration", "POST", requestData)
			if (registrationResponse.status === 201) {
				await loginInSystem({ loginOrEemail: requestData.login, password: requestData.password })
			}
		} catch (error) {
			alert(error.response?.data.message || error.message)
		}
	}, [])
	const loginInSystem = useCallback(async data => {
		try {
			const response = await request("/auth/login", "POST", data)
			if (response.status === 200) {
				auth.login(response.data.token, response.data.user)
			}
		} catch (error) {
			alert(error.response?.data.message || error.message)
		}
	}, [])

	return (
		<section>
			<Suspense fallback={<div>Loading ...</div>}>
				{
					hideRegistration
						? <Login triggerForms={triggerForms} loading={loading} onSubmit={loginInSystem} />
						: <Registration triggerForms={triggerForms} loading={loading} onSubmit={registrationInSystem} />
				}
			</Suspense>
		</section>
	)
}

export default AuthComponent