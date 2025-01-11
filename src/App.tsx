import React, { useState, useMemo } from 'react';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  SelectChangeEvent,
} from '@mui/material';
import { useUsers } from './hooks/useFetchUsers';
import { useDebounce } from './hooks/useDebounce';
import Filters from './components/Filters';
import UserTable from './components/UserTable';
import dpsLogo from './assets/DPS.svg';
import './App.css';
import { User } from './models/user';

const App: React.FC = () => {
  const users = useUsers();

  // Filter States
  const [searchText, setSearchText] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [highlightOldestUser, setHighlightOldestUser] = useState(false);

  // Color Selection States
  const [selectedColor, setSelectedColor] = useState('#c0398d');

  // Debounced Search Text
  const debouncedSearchText = useDebounce(searchText, 1000);

  // Filter Handlers
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleCitySelection = (e: SelectChangeEvent<string>) => {
    setSelectedCity(e.target.value);
  };

  const handleHighlightToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHighlightOldestUser(e.target.checked);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
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
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#e0e0e0',
          minHeight: '100px',
          justifyContent: 'center',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Box
            component="a"
            href="https://www.digitalproductschool.io/"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <img src={dpsLogo} alt="DPS Logo" className="logo" />
          </Box>
          <RadioGroup
  row
  value={selectedColor}
  onChange={handleColorChange}
  sx={{ alignItems: 'center' }}
>
  <FormControlLabel
    value="#c0398d"
    control={
      <Radio
        sx={{
          color: '#c0398d',
          '&.Mui-checked': {
            color: '#c0398d',
          },
        }}
      />
    }
    label=""
  />
  <FormControlLabel
    value="#F7A51F"
    control={
      <Radio
        sx={{
          color: '#F7A51F',
          '&.Mui-checked': {
            color: '#F7A51F',
          },
        }}
      />
    }
    label=""
  />
  <FormControlLabel
    value="#6DC7EA"
    control={
      <Radio
        sx={{
          color: '#6DC7EA',
          '&.Mui-checked': {
            color: '#6DC7EA',
          },
        }}
      />
    }
    label=""
  />
  <FormControlLabel
    value="#482771"
    control={
      <Radio
        sx={{
          color: '#482771',
          '&.Mui-checked': {
            color: '#482771',
          },
        }}
      />
    }
    label=""
  />
</RadioGroup>

        </Toolbar>
      </AppBar>

      <Box sx={{ padding: '40px', paddingTop: '120px' }}>
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
          selectedColor={selectedColor}
        />
      </Box>
    </>
  );
};

export default App;
