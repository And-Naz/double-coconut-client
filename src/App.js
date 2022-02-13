import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import AuthContext from './contexts/AuthContext'
import useAuth from "./hooks/useAuth";
import './assets/css/App.css';

function App() {
	const { token, login, logout, user, ready } = useAuth()
	const isAuthenticated = !!token
	if (!ready) {
		return (
			<div>Site is Loading...</div>
		)
	}
	return (
		<AuthContext.Provider value={{
			token, login, logout, user, isAuthenticated
		}}>
			<Provider store={store}>
				<BrowserRouter>
					<div className="app">
						<Header />
						<Main />
						<Footer />
					</div>
				</BrowserRouter>
			</Provider>
		</AuthContext.Provider>
	);
}

export default App;
