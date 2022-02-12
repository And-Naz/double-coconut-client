import { lazy, Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
const NotFound = lazy(() => import('../pages/NotFound'))
const Home = lazy(() => import('../pages/Home'))
const Feed = lazy(() => import('../pages/Feed'))
const Profile = lazy(() => import('../pages/Profile'))

const pageWithoutAuth = () => {
	const pages = new Map()
	pages.set("", <Home />)
	pages.set("*", <Navigate to="/" replace />)
	return pages
}

const pageWithAuth = () => {
	const pages = pageWithoutAuth()
	pages.set("", <Navigate to="/feed" replace />)
	pages.set("/home", <Navigate to="/feed" replace />)
	pages.set("/feed", <Feed />)
	pages.set("/profile", <Profile />)
	pages.set("*", <NotFound />)
	return pages
}

const routeGenerator = routes => {
	return [...routes].reduce((acc, [path, component]) => {
		acc.push({ path, component })
		return acc
	}, [])
}

const createRoutes = isAutorized => {
	return routeGenerator(isAutorized ? pageWithAuth() : pageWithoutAuth())
}

export default function AppRoutes({ isAutorized }) {
	const routes = createRoutes(true)
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{
					routes.map(({ path, component }) => {
						return (
							<Route key={path} path={path} element={component} />
						)
					})
				}
			</Routes>
		</Suspense>
	)
};