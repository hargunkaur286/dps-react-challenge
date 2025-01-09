import { useState, useEffect } from 'react';
import { fetchingAllUsers } from '../api/userFetch';
import { User } from '../models/user';
export const useUsers = () => {
	const [users, setUsers] = useState<User[]>([]);
	useEffect(() => {
		const loadUsers = async () => {
			const data = await fetchingAllUsers();
			setUsers(data);
		};
		loadUsers();
	}, []);
	return users;
};