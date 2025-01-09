import {useState, useEffect} from 'react'
import dpsLogo from './assets/DPS.svg';
import UserTable from './components/UserTable';
import { User } from './models/user';
import { fetchingAllUsers } from './api/userFetch'; // Function to fetch users
import './App.css';

function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
  
	useEffect(() => {
	  const loadUsers = async () => {
		try {
		  const fetchedUsers = await fetchingAllUsers();
		  setUsers(fetchedUsers);
		} catch (err) {
		  setError('Failed to load users');
		} finally {
		  setLoading(false);
		}
	  };
  
	  loadUsers();
	}, []);
  
	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;
	return (
		<>
			<div>
				<a href="https://www.digitalproductschool.io/" target="_blank">
					<img src={dpsLogo} className="logo" alt="DPS logo" />
				</a>
			</div>
			<div className="home-card">
      		<UserTable users={users} />
			</div>
		</>
	);
}

export default App;
