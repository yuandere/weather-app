import React, { useEffect, useState, useRef } from 'react';
import tachyons from 'tachyons';
import Sidebar from './components/Sidebar';
import Forecast from './components/Forecast';
import Highlights from './components/Highlights';
import { conditionSwitcher, linkBuilder } from './utils';
import styles from './App.module.css';

function App() {
	const [data, setData] = useState({
		current_weather: { temperature: 88 },
		hourly: { 
			relativehumidity_2m: [ { 0: 71 } ],
			surface_pressure: [ { 0: 1001.9 }],
			cloudcover: [ { 0: 50 } ],
		},
		daily: {
			weathercode: [ { 0: 1 } ],
			temperature_2m_max: [ { 0: 87.2 } ],
			temperature_2m_min: [ { 0: 63.4 } ]
		}
	});
	const [searchParams, setSearchParams] = useState({
		location: 'Los Angeles, CA, USA',
		searchLat: 34,
		searchLng: -118.25,
	});
	const [dates, setDates] = useState({
		dateStart: '2022-08-16',
		dateEnd: '2022-08-21',
		displayDate: 'Tue, Aug 16',
	})
	const [forecastConditions, setForecast] = useState([
		{ result: 'Mainly clear', source: 'Clear' }
	]);
	const [recents, setRecents] = useState([
		{
			city: 'London, UK',
			lat: 51.51,
			lng: -0.13
		},
		{
			city: 'Barcelona, Spain',
			lat: 41.39,
			lng: 2.15
		},
		{
			city: 'Long Beach, CA, USA',
			lat: 33.77,
			lng: -118.19
		}
	]);
	const [tempUnit, setTempUnit] = useState('F');
	const [isLocationOn, setIsLocationOn] = useState(false);
	const [breakpoint, setBreakpoint] = useState('');
	const [drawerState, setDrawerState] = useState(false);
	const [suggestionsState, setSuggestionsState] = useState(false);
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	const handleResize = () => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	const handleDrawer = () => {
		let pHeight = parentRef.current.offsetHeight;
		let pWidth = parentRef.current.offsetWidth;
		let pOffset = parentRef.current.getBoundingClientRect().left;
		document.documentElement.style.setProperty('--drawerHeight', `${pHeight}px`);
		document.documentElement.style.setProperty('--drawerWidth', `${pWidth}px`);
		document.documentElement.style.setProperty('--drawerOffset', `${pOffset}px`);
	};

	useEffect(()=> {
		const date = new Date();
		const options = { weekday: 'short', month: 'short', day: 'numeric'};
		const dateStart = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
		const displayDate = date.toLocaleDateString(undefined, options);
		const dateMax = new Date(date.setDate(date.getDate() + 5));
		const dateEnd = dateMax.getFullYear() + '-' + String(dateMax.getMonth() + 1).padStart(2, '0') + '-' + String(dateMax.getDate()).padStart(2, '0');
		setDates({ 
			dateStart: dateStart,
			dateEnd: dateEnd, 
			displayDate: displayDate,
		});
	}, [])

	useEffect(() => {
		let tempLong = '';
		tempUnit === 'F' ? tempLong = 'fahrenheit' : tempLong = 'celsius';
		// fetch('./placeholder.json')
		// fetch(API_URL)
		fetch(linkBuilder(searchParams.searchLat, searchParams.searchLng, tempLong, dates.dateStart, dates.dateEnd))
			.then((resp) => resp.json())
			.then((res) => {
				setData(res);
				setForecast(res.daily.weathercode.map(x => conditionSwitcher(x)));
				console.log('weather api called')
			});
	}, [searchParams.location, tempUnit]);

	useEffect(() => {
		window.addEventListener('resize',	handleResize);
		handleResize();
		if (0 < windowSize.width < 1152) {
			setBreakpoint('notLg');
		}
		if (1152 < windowSize.width < 1440) {
			setBreakpoint('lg');
		}
		if (1440 <= windowSize.width) {
			setBreakpoint('xl');
		}
		handleDrawer;
		return () => window.removeEventListener('resize', handleResize);
	}, [windowSize.width]);

	useEffect(() => {
		window.addEventListener('resize', handleDrawer);
		handleDrawer();
		return () => window.removeEventListener('resize', handleDrawer);
	}, [windowSize.width, windowSize.height, breakpoint, drawerState])

	useEffect(()=> {
		setTimeout(()=> {
			handleDrawer();
		}, 100)
	}, [])

	const toggleDrawer = () => {
		if (drawerState === false) {
			setDrawerState(true);
		} else {
			setDrawerState(false);
		}
	};

	const getGeoLocation = () => {
		const success = (position) => {
			const lat = position.coords.latitude;
			const lng = position.coords.longitude;
			console.log('geolocation', lat, lng);
			setSearchParams({
				location: 'Your location',
				searchLat: lat,
				searchLng: lng
			});
			setIsLocationOn(true);
		}
		const error = () => {
			console.log('unable to retrieve location')
		}
		if (!navigator.geolocation) {
			console.log('geolocation not supported by browser')
		} else {
			navigator.geolocation.getCurrentPosition(success, error, {timeout: 5000});
		}
	};

	const parentRef =	useRef(null);

	return (
		<React.StrictMode>
		<div className={styles.App}>
			<Sidebar
				data={data}
				dates={dates}
				forecastConditions={forecastConditions}
				tempUnit={tempUnit}
				isLocationOn={isLocationOn}
				getGeoLocation={getGeoLocation}
				breakpoint={breakpoint}
				drawerState={drawerState}
				toggleDrawer={toggleDrawer}
				setDrawerState={setDrawerState}
				suggestionsState={suggestionsState}
				setSuggestionsState={setSuggestionsState}
				parentRef={parentRef}
				searchParams={searchParams}
				setSearchParams={setSearchParams}
				recents={recents}
				setRecents={setRecents}
			></Sidebar>
			{breakpoint === 'lg' || breakpoint === 'xl' ? (
				<div className={styles.lgContainer}>
					<div className={styles.tempControlBar}>
						<button 
							onClick={() => setTempUnit('F')}
							className={tempUnit === 'F' ? styles.tempActive : null}>
							<span>°</span>
							<p>F</p>
						</button>
						<button 
							onClick={() => setTempUnit('C')}
							className={tempUnit === 'C' ? styles.tempActive : null}>
							<span>°</span>
							<p>C</p>
						</button>
					</div>
					<Forecast data={data} searchParams={searchParams} tempUnit={tempUnit} forecastConditions={forecastConditions}></Forecast>
					<Highlights data={data}></Highlights>
					<footer className="tc pv3 ma0">
						<p>
							created by <span>@yuandere</span> - devchallenges.io
						</p>
					</footer>
				</div>
			) : (
				<>
					<Forecast data={data} searchParams={searchParams} tempUnit={tempUnit} forecastConditions={forecastConditions}></Forecast>
					<Highlights data={data}></Highlights>
					<footer className="tc pv3 ma0">
						<p>
							created by <span>@yuandere</span> - devchallenges.io
						</p>
					</footer>
				</>
			)}
		</div>
		</React.StrictMode>
	);
}

export default App;
