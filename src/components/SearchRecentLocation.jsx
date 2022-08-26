const SearchRecentLocation = ({ location, lat, lng, setSearchParams }) => {
	return (
		<li
      onClick={() => setSearchParams({
        location: location,
        searchLat: lat,
        searchLng: lng
      })}
		>
			<p>{location}</p>
			<span className="material-icons">chevron_right</span>
		</li>
	);
};

export default SearchRecentLocation;
