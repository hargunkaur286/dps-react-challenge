import React from 'react';
import { User } from '../models/user';

interface UserTableProps {
    users: User[];
}
const UserTable: React.FC<UserTableProps> = ({ users }) => {
    return (
      <div className="container">
        <table>
          <thead>
            <tr>
              <th className="cell">ID</th>
              <th className="cell">Name</th>
              <th className="cell">City</th>
              <th className="cell">Birthday</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="cell">{user.id}</td>
                <td className="cell">{`${user.firstName} ${user.lastName}`}</td>
                <td className="cell">{user.address.city}</td>
                <td className="cell">
                  {new Date(user.birthDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default UserTable;