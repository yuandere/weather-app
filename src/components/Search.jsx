import classNames from 'classnames';
import PlacesAutocomplete from './PlacesAutocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import styles from '../styles/Search.module.css';
import SearchRecentLocation from './SearchRecentLocation';

const Search = ({
	drawerState,
	toggleDrawer,
	setDrawerState,
	suggestionsState,
	setSuggestionsState,
	searchParams,
	setSearchParams,
	recents,
	setRecents
}) => {
	const ref = useOnclickOutside(() => {
		setDrawerState(false);
	});
	return (
		<div
			ref={ref}
			className={
				drawerState
					? classNames(styles.drawer, styles.drawerShow)
					: styles.drawer
			}
		>
			<div className={styles.topBar}>
				<span
					className={classNames('material-icons', styles.closeBtn)}
					onClick={() => toggleDrawer()}
				>
					close
				</span>
			</div>
			<PlacesAutocomplete
				setSuggestionsState={setSuggestionsState}
				searchParams={searchParams}
				setSearchParams={setSearchParams}
				recents={recents}
				setRecents={setRecents}
			></PlacesAutocomplete>
			{suggestionsState === false ? (
				<ul className={styles.citiesContainer}>
					{recents.map((x, i)=> 
					<SearchRecentLocation
						key={x.city}
						location={x.city}
						lat={recents[i].lat}
						lng={recents[i].lng}
						setSearchParams={setSearchParams}
					>	
					</SearchRecentLocation>)}
				</ul>
			) : null}
		</div>
	);
};

export default Search;
