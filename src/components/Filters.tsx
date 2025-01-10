import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

interface Props {
	searchText: string;
	selectedCity: string;
	highlightOldestUser: boolean;
	cities: string[];
	onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onCitySelection: (e: React.ChangeEvent<HTMLSelectElement>) => void;
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
	<div className="filters-container">

        {/* input field for names */}
		<TextField
      value={searchText}
      onChange={onSearchChange}
      placeholder="Search users by name"
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
      sx={{ flex: 1, maxWidth: '400px' }}
      />

        {/* dropdown menu for selecting the cities */}
		<div className="form-control">
			<label htmlFor="city-select">City</label>
			<select
				id="city-select"
				value={selectedCity}
				onChange={onCitySelection}
				className="select-field"
				aria-label="Filter by city"
			>
				<option value="">All Cities</option>
				{cities.map((city) => (
					<option key={city} value={city}>
						{city}
					</option>
				))}
			</select>
		</div>

        {/* checkbox field for selecting the oldest city */}
		<label className="checkbox-label">
			<input
                className="checkbox"
				type="checkbox"
				checked={highlightOldestUser}
				onChange={onHighlightToggle}
				aria-label="Highlight oldest users"
			/>
			Highlight Oldest User
		</label>
	</div>
);

export default Filters;
