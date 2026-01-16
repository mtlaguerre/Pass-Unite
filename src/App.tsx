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

	let showHome = false;
	let showAddProfiles = false;
	let showCredentials = false;
	let showSettings = false;

	function handleLoginOrRegisterClick() {
		setShowLogin(!showLogin);
		setShowRegister(!showRegister);
	}
	
	return (
		<>
			{showLogin && <Login onRegisterClick={handleLoginOrRegisterClick} />}
			{showRegister && <Register onLoginClick={handleLoginOrRegisterClick} />}
			{showHome && <HomePage />}
			{showAddProfiles && <AddProfilesPage />}
			{showCredentials && <CredentialsPage />}
			{showSettings && <SettingsPage />}
		</>
	)
}

export default App;