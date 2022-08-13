import { useEffect, useState, useRef } from 'react';
import tachyons from 'tachyons';
import Sidebar from './components/Sidebar';
import Forecast from './components/Forecast';
import Highlights from './components/Highlights';
import utils from './utils';
import styles from './App.module.css';

const API_URL =
	'https://api.open-meteo.com/v1/forecast?latitude=34.05&longitude=-118.24&hourly=temperature_2m,relativehumidity_2m,surface_pressure,weathercode,cloudcover,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles&start_date=2022-07-28&end_date=2022-07-28';
const API_KEY =
	'AIzaSyB-tpQMrst7JTFzEA0h-JiJcU6vB3vAFJg';


function App() {
	const [data, setData] = useState({
		current_weather: { temperature: 88 },
	});
	const [userParams, setUserParams] = useState({
		tempUnit: 'fahrenheit',
		timezone: 'America%Los_Angeles',
		date: '2022-07-28',
		searchLat: '34',
		searchLng: '-118.25',
	});
	const [weatherCond, setWeather] = useState('');
	const [breakpoint, setBreakpoint] = useState('');
	const [drawerState, setDrawerState] = useState(false);
	const [suggestionsState, setSuggestionsState] = useState(false);
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});
	const parentRef =	useRef(null);

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

	useEffect(() => {
		fetch('./placeholder.json')
			.then((resp) => resp.json())
			.then((res) => {
				setData(res);
				setWeather(
					utils({ ops: 'weatherCode', data: res.current_weather.weathercode })
				);
			});
	}, []);

	useEffect(() => {
		window.addEventListener('resize',	handleResize);
		handleResize();
		if (0 < windowSize.width < 1024) {
			setBreakpoint('notLg');
		}
		if (1024 < windowSize.width < 1440) {
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
	}, [windowSize.width, windowSize.height, breakpoint])

	useEffect(()=> {
		setTimeout(()=> {
			handleDrawer()
		}, 100)
	}, [])

	const toggleDrawer = () => {
		if (drawerState === false) {
			setDrawerState(true);
		} else {
			setDrawerState(false);
		}
	};

	return (
		<div className={styles.App}>
			<Sidebar
				data={data}
				weatherCond={weatherCond.result}
				source={weatherCond.source}
				breakpoint={breakpoint}
				drawerState={drawerState}
				toggleDrawer={toggleDrawer}
				setDrawerState={setDrawerState}
				suggestionsState={suggestionsState}
				setSuggestionsState={setSuggestionsState}
				parentRef={parentRef}
				userParams={userParams}
			></Sidebar>
			{breakpoint === 'lg' || breakpoint === 'xl' ? (
				<div className={styles.lgContainer}>
					<Forecast data={data}></Forecast>
					<Highlights data={data}></Highlights>
					<footer className="tc pv3 ma0">
						<p>
							created by <span>@yuandere</span> - devchallenges.io
						</p>
					</footer>
				</div>
			) : (
				<>
					<Forecast data={data}></Forecast>
					<Highlights data={data}></Highlights>
					<footer className="tc pv3 ma0">
						<p>
							created by <span>@yuandere</span> - devchallenges.io
						</p>
					</footer>
				</>
			)}
		</div>
	);
}

export default App;
