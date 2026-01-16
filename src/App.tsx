import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import AddProfilesPage from './components/AddProfilesPage';
import CredentialsPage from './components/CredentialsPage';
import SettingsPage from './components/SettingsPage';

function App() {

	const [showLogin, setShowLogin] = useState(true);
	const [showRegister, setShowRegister] = useState(false);
	const [showHomePage, setShowHomePage] = useState(false);
	const [showAddProfilesPage, setShowAddProfilesPage] = useState(false);
	const [showCredentialsPage, setShowCredentialsPage] = useState(false);
	const [showSettingsPage, setShowSettingsPage] = useState(false);

	function handleLogin() {
		setShowLogin(false);
		setShowRegister(false);
		setShowHomePage(true);
	}
	
	function handleLoginOrRegisterClick() {
		setShowLogin(!showLogin);
		setShowRegister(!showRegister);
	}
	
	return (
		<>
			{showLogin && <Login onLogin={handleLogin} onRegisterClick={handleLoginOrRegisterClick} />}
			{showRegister && <Register onLoginClick={handleLoginOrRegisterClick} />}
			{showHomePage && <HomePage />}
			{showAddProfilesPage && <AddProfilesPage />}
			{showCredentialsPage && <CredentialsPage />}
			{showSettingsPage && <SettingsPage />}
		</>
	)
}

export default App;