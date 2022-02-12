import { lazy, Suspense, useState, useCallback } from 'react'
import "./style.css"
const Login = lazy(() => import('./Login'))
const Registration = lazy(() => import('./Registration'))

function AuthComponent() {
	const [hideRegistration, setHideRegistration] = useState(true)
	const triggerForms = useCallback(() => setHideRegistration(prev => !prev), [])
	return (
		<section>
			<Suspense fallback={<div>Loading ...</div>}>
				{
					hideRegistration
						? <Login triggerForms={triggerForms} />
						: <Registration triggerForms={triggerForms} />
				}
			</Suspense>
		</section>
	)
}

export default AuthComponent