import { NavLink } from 'react-router-dom'
import "./style.css"

const isAutorized = false

function Header() {
	return (
		<header className="header">
			<nav className="navbar">
				<ul className="navbar__list">
					<li className="navbar__item" >
						<h1>Double Coconut</h1>
					</li>
					{
						isAutorized
						&& (
							<>
								<li className="navbar__item">
									<NavLink to="/auth">
										Profile
									</NavLink>
								</li>
								<li className="navbar__item">
									<NavLink to="/feed">
										Posts List
									</NavLink>
								</li>
								<li className="navbar__item navbar__item--last">
									<button>Log Out</button>
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