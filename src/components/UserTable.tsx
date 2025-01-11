import React from 'react';
import { User } from '../models/user';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Box,
} from '@mui/material';

interface UserTableProps {
  users: User[];
  highlightOldest: boolean;
  oldestUsers: Record<string, User | undefined>;
  selectedColor: string;
}

const UserTable: React.FC<UserTableProps> = ({
  users,
  highlightOldest,
  oldestUsers,
  selectedColor,
}) => {

    const hoverColor = `${selectedColor}30`; 
    const highlightColor = `${selectedColor}50`; 
  return (
    <Box
      sx={{
        width: '100%',
        p: 2,
        backgroundColor: 'transparent',
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          maxWidth: '100%', 
        }}
      >
        <Table
          sx={{
            width: '100%',
            borderCollapse: 'collapse',
          }}
        >
          <TableHead>
            <TableRow>
              {['ID', 'Name', 'City', 'Birthday'].map((header) => (
                <TableCell
                  key={header}
                  sx={{
                    backgroundColor: selectedColor,
                    color: 'white',
                    padding: '16px 20px',
                    textTransform: 'uppercase',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    wordBreak: 'break-word', 
                    whiteSpace: 'normal', 
                    ['@media (max-width:768px)']: {
                      fontSize: '12px',
                      padding: '12px 10px',
                    },
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{
                  backgroundColor:
                    highlightOldest &&
                    oldestUsers[user.address.city]?.id === user.id
                      ? highlightColor
                      : 'inherit',
                  '&:hover': {
                    backgroundColor: hoverColor,
                    cursor: 'pointer',
                  },
                }}
              >
                <TableCell
                  sx={{
                    padding: '14px 20px',
                    borderBottom: '1px solid #ddd',
                    color: '#333',
                    fontSize: '14px',
                    wordBreak: 'break-word',
                    whiteSpace: 'normal',
                    ['@media (max-width:768px)']: {
                      fontSize: '12px',
                      padding: '12px 10px',
                    },
                  }}
                >
                  {user.id}
                </TableCell>
                <TableCell
                  sx={{
                    padding: '14px 20px',
                    borderBottom: '1px solid #ddd',
                    color: '#333',
                    fontSize: '14px',
                    wordBreak: 'break-word',
                    whiteSpace: 'normal',
                    ['@media (max-width:768px)']: {
                      fontSize: '12px',
                      padding: '12px 10px',
                    },
                  }}
                >
                  {`${user.firstName} ${user.lastName}`}
                </TableCell>
                <TableCell
                  sx={{
                    padding: '14px 20px',
                    borderBottom: '1px solid #ddd',
                    color: '#333',
                    fontSize: '14px',
                    wordBreak: 'break-word',
                    whiteSpace: 'normal',
                    ['@media (max-width:768px)']: {
                      fontSize: '12px',
                      padding: '12px 10px',
                    },
                  }}
                >
                  {user.address.city}
                </TableCell>
                <TableCell
                  sx={{
                    padding: '14px 20px',
                    borderBottom: '1px solid #ddd',
                    color: '#333',
                    fontSize: '14px',
                    wordBreak: 'break-word',
                    whiteSpace: 'normal',
                    ['@media (max-width:768px)']: {
                      fontSize: '12px',
                      padding: '12px 10px',
                    },
                  }}
                >
                  {new Date(user.birthDate).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography
        variant="subtitle1"
        sx={{
          marginTop: '16px',
          fontSize: '16px',
          color: '#333',
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        Total Users: <strong>{users.length}</strong>
      </Typography>
    </Box>
  );
};

export default UserTable;