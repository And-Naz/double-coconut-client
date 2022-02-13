import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'
import Button from "../uiKits/Button"
import "./style.css"

function Header() {
	const { isAuthenticated, logout, user } = useContext(AuthContext)
	return (
		<header className="header">
			<nav className="navbar">
				<ul className="navbar__list">
					<li className="navbar__item" >
						<h1>Double Coconut</h1>
					</li>
					{
						isAuthenticated
						&& (
							<>
								<li className="navbar__item">
									<NavLink to="/profile">
										Profile
									</NavLink>
								</li>
								<li className="navbar__item">
									<NavLink to="/feed">
										Posts List
									</NavLink>
								</li>
								<li className="navbar__item navbar__item--last">
									{user && user?.firstName + " " + user?.lastName}
								</li>
								<li className="navbar__item">
									<Button onClick={e => logout()}>Log Out</Button>
								</li>
							</>
						)
					}
				</ul>
			</nav>
		</header>
	)
}

export default Header