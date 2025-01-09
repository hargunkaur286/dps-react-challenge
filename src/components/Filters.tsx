import React from 'react';

interface Props {
	searchText: string;
	selectedCity: string;
	highlightOldestUser: boolean;
	cities: string[];
	onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onCitySelection: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	onHighlightToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filters: React.FC<Props> = ({
	searchText,
	selectedCity,
	highlightOldestUser,
	cities,
	onSearchChange,
	onCitySelection,
	onHighlightToggle,
}) => (
	<div className="filters-container">

        {/* input field for names */}
		<input
			type="text"
			placeholder="Search users by name"
			value={searchText}
			onChange={onSearchChange}
			className="text-field"
			aria-label="Search by name"
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
