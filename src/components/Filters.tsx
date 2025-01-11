import React from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  SelectChangeEvent,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

interface Props {
  searchText: string;
  selectedCity: string;
  highlightOldestUser: boolean;
  cities: string[];
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCitySelection: (e: SelectChangeEvent<string>) => void;
  onHighlightToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: () => void;
}

const Filters: React.FC<Props> = ({
  searchText,
  selectedCity,
  highlightOldestUser,
  cities,
  onSearchChange,
  onCitySelection,
  onHighlightToggle,
  onClearSearch,
}) => (
  <Box sx={{ p: 2, width: '100%' }}>
    <Grid container spacing={2} alignItems="center">

      {/* Search Input */}
      <Grid item xs={12} sm={4}>
        <TextField
          value={searchText}
          onChange={onSearchChange}
          placeholder="Search Users By Name"
          variant="outlined"
          InputProps={{
            endAdornment: searchText && (
              <InputAdornment position="end">
                <IconButton onClick={onClearSearch} edge="end">
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </Grid>

      {/* City Dropdown */}
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="city-select-label">Select City</InputLabel>
          <Select
            labelId="city-select-label"
            value={selectedCity}
            onChange={onCitySelection as (event: SelectChangeEvent<string>) => void}
            label="Select City"
          >
            <MenuItem value="">All Cities</MenuItem>
            {cities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      {/* Highlight Oldest Checkbox */}
      <Grid item xs={12} sm={4}>
        <FormControlLabel
          control={
            <Checkbox
              checked={highlightOldestUser}
              onChange={onHighlightToggle}
              color="primary"
            />
          }
          label="Oldest per city"
          sx={{ color: '#000' }}
        />
      </Grid>
    </Grid>
  </Box>
);

export default Filters;
