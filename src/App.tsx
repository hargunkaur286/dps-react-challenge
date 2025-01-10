import React, { useState, useMemo } from 'react';
import { useUsers } from './hooks/useFetchUsers';
import { useDebounce } from './hooks/useDebounce';
import Filters from './components/Filters';
import UserTable from './components/UserTable';
import dpsLogo from './assets/DPS.svg';
import './App.css';

const App: React.FC = () => {
	const users = useUsers();

	// Filter States
	const [searchText, setSearchText] = useState('');
	const [selectedCity, setSelectedCity] = useState('');
	const [highlightOldestUser, setHighlightOldestUser] = useState(false);

	const debouncedSearchText = useDebounce(searchText, 1000);

	// Filter Handlers
	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value);
	};

	const handleCitySelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedCity(e.target.value);
	};

	const handleHighlightToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
		setHighlightOldestUser(e.target.checked);
	};

	// Filtered Users
	const filteredUsers = useMemo(() => {
		return users.filter((user) => {
			const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
			const isNameMatch = fullName.includes(debouncedSearchText.toLowerCase());
			const isCityMatch = selectedCity
				? user.address.city === selectedCity
				: true;
			return isNameMatch && isCityMatch;
		});
	}, [users, debouncedSearchText, selectedCity]);

	// Unique Cities
	const cities = useMemo(() => {
		const citySet = new Set(users.map((user) => user.address.city));
		return Array.from(citySet);
	}, [users]);

	// Oldest User Per City
	const oldestUsersByCity = useMemo(() => {
		return filteredUsers.reduce(
			(acc, user) => {
				const city = user.address.city;
				if (
					!acc[city] ||
					new Date(acc[city]!.birthDate) > new Date(user.birthDate)
				) {
					acc[city] = user;
				}
				return acc;
			},
			{} as Record<string, User | undefined>
		);
	}, [filteredUsers]);

	return (
		<>
			<div className="container">
				<a href="https://www.digitalproductschool.io/" target="_blank" rel="noreferrer">
					<img src={dpsLogo} className="logo" alt="DPS logo" />
				</a>
				<Filters
					searchText={searchText}
					selectedCity={selectedCity}
					highlightOldestUser={highlightOldestUser}
					cities={cities}
					onSearchChange={handleSearchChange}
					onCitySelection={handleCitySelection}
					onHighlightToggle={handleHighlightToggle}
					onClearSearch={() => setSearchText('')}
				/>
				<UserTable
					users={filteredUsers}
					highlightOldest={highlightOldestUser}
					oldestUsers={oldestUsersByCity}
				/>
			</div>
		</>
	);
};

export default App;
