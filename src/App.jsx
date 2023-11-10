import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppFooter } from './cmps/AppFooter/AppFooter';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { CallbackPage } from './pages/CallbackPage/CallbackPage';
import { HomePage } from './pages/HomePage/HomePage';
import { UserDetailsPage } from './pages/UserDetailsPage/UserDetailsPage';
import { AlbumsPage } from './pages/AlbumsPage/AlbumsPage';
import { SubHeader } from "./cmps/SubHeader/SubHeader";

function App() {
	return (
		<Router>
			<div className="App main-layout">
				<AppHeader></AppHeader>
				<SubHeader></SubHeader>
				<div className="routes-main">
					<Routes>
						<Route element={<CallbackPage />} path="/callback" />
						<Route element={<AlbumsPage />} path="/albums/:id" />
						<Route element={<UserDetailsPage />} path="/user" />
						<Route element={<HomePage />} path="/" />
					</Routes>
				</div>
				<AppFooter></AppFooter>
			</div>
		</Router>
	);
}

export default App
