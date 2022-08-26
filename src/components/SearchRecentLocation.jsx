const SearchRecentLocation = ({ location, lat, lng, setSearchParams, setDrawerState }) => {
	return (
		<li
      onClick={() => {
				setSearchParams({
					location: location,
					searchLat: lat,
					searchLng: lng		
      	});
				setDrawerState(false)
		}
		}
		>
			<p>{location}</p>
			<span className="material-icons">chevron_right</span>
		</li>
	);
};

export default SearchRecentLocation;
