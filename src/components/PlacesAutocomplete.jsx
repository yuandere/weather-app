import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import styles from '../styles/PlacesAutocomplete.module.css';

const PlacesAutocomplete = ({ 
	setSuggestionsState,
	setSearchParams,
	setDrawerState,
	recents
 }) => {
	const {
		ready,
		value,
		suggestions: { status, data },
		setValue,
		clearSuggestions,
	} = usePlacesAutocomplete({
		requestOptions: {
			/* Define search scope here */
			types: ['(cities)'],
		},
		debounce: 300,
	});
	const ref = useOnclickOutside(() => {
		// When user clicks outside of the component, we can dismiss
		// the searched suggestions by calling this method
		clearSuggestions();
		setSuggestionsState(false);
	});

	const handleInput = (e) => {
		// Update the keyword of the input element
		setValue(e.target.value);
	};

	const handleSelect =
		({ description }) =>
		() => {
			// When user selects a place, we can replace the keyword without request data from API
			// by setting the second parameter to "false"
			setValue(description, false);
			clearSuggestions();
			setDrawerState(false);
			// Get latitude and longitude via utility functions
			// Sets location name + coords to hooks, pushes to recents list
			getGeocode({ address: description }).then((results) => {
				const { lat, lng } = getLatLng(results[0]);
				// console.log('📍 Coordinates: ', { lat, lng });
				setSearchParams({ 
					searchLat: lat,
					searchLng: lng,
					location: results[0].formatted_address
				});
				if (!recents.some(x => x.city === results[0].formatted_address)) {
					if (recents.length === 5) {
						recents.splice(4, 1)
					};
					recents.unshift({
						city: results[0].formatted_address,
						lat: lat,
						lng: lng
					});
				};
			});
		};

	const renderSuggestions = () => 
		data.map((suggestion) => {
			const {
				place_id,
				structured_formatting: { main_text, secondary_text },
			} = suggestion;

			return (
				<li key={place_id} onClick={handleSelect(suggestion)}>
					<strong>{main_text}</strong> <small>{secondary_text}</small>
				</li>
			);
		});

	return (
		<div ref={ref}>
			<div className={styles.searchContainer}>
				<div className={styles.inputContainer}>
					<span className="material-icons">search</span>
					<input
						value={value}
						onChange={handleInput}
						onFocus={()=> setSuggestionsState(true)}
						disabled={!ready}
						placeholder="search location"
						className={styles.searchBox}
					/>
				</div>
				<button className={styles.searchBtn}>Search</button>
			</div>
			{/* We can use the "status" to decide whether we should display the dropdown or not */}
			{status === 'OK' && (
				<ul className={styles.suggestions}>
          {renderSuggestions()}
          <p>results by <span className={styles.attr}>google</span></p>
          </ul>
			)}
		</div>
	);
};

export default PlacesAutocomplete;
