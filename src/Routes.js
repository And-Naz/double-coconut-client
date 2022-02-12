import { lazy, Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
const NotFound = lazy(() => import('./pages/NotFound'))
const Home = lazy(() => import('./pages/Home'))
const Feed = lazy(() => import('./pages/Feed'))
const Profile = lazy(() => import('./pages/Profile'))

const _pages = new Map()
const isAutorized = false

_pages.set("", <Home />)
_pages.set("*", <Navigate to="/" replace />)

if (isAutorized) {
	_pages.set("", <Navigate to="/feed" replace />)
	_pages.set("/home", <Navigate to="/feed" replace />)
	_pages.set("/feed", <Feed />)
	_pages.set("/profile", <Profile />)
	_pages.set("*", <NotFound />)
}

const pages = [..._pages].reduce((acc, [path, component]) => {
	acc.push({ path, component })
	return acc
}, [])

export default function AppRoutes() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{
					pages.map(({ path, component }) => {
						return (
							<Route key={path} path={path} element={component} />
						)
					})
				}
			</Routes>
		</Suspense>
	)
};