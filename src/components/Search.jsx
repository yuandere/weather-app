import classNames from 'classnames';
import PlacesAutocomplete from './PlacesAutocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import styles from '../styles/Search.module.css';

const Search = ({
	drawerState,
	toggleDrawer,
	setDrawerState,
	suggestionsState,
	setSuggestionsState,
	userParams,
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
			{/* <div className="flex justify-between items-center">
					<form className={styles.searchBar}>
						<div className={styles.searchContainer}>
							<span className="material-icons">search</span>
							<input placeholder="search location"></input>
						</div>
					</form>
					<button className={styles.searchBtn}>Search</button>
				</div> */}
			<PlacesAutocomplete
				setSuggestionsState={setSuggestionsState}
			></PlacesAutocomplete>
			{suggestionsState === false ? (
				<ul className={styles.citiesContainer}>
					<li>
						<p>London</p>
						<span className="material-icons">chevron_right</span>
					</li>
					<li>
						<p>Barcelona</p>
						<span className="material-icons">chevron_right</span>
					</li>
					<li>
						<p>Long Beach</p>
						<span className="material-icons">chevron_right</span>
					</li>
				</ul>
			) : null}
		</div>
	);
};

export default Search;
