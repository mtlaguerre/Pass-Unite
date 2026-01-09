import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import AddProfilesPage from './components/AddProfilesPage';
import CredentialsPage from './components/CredentialsPage';
import SettingsPage from './components/SettingsPage';

function App() {

	let showLogin = true;
	let showRegister = !showLogin;
	let showHome = false;
	let showAddProfiles = false;
	let showCredentials = false;
	let showSettings = false;
	
	return (
		<>
			{showLogin && <Login />}
			{showRegister && <Register />}
			{showHome && <HomePage />}
			{showAddProfiles && <AddProfilesPage />}
			{showCredentials && <CredentialsPage />}
			{showSettings && <SettingsPage />}
		</>
	)
}

export default App;