import { conditionSwitcher, dateHandler } from '../utils';
import styles from '../styles/Forecast.module.css';

const Forecast = ({ 
	data, 
	tempUnit, 
	forecastConditions 
}) => {
	const dates = dateHandler();
	let sources = [];
	forecastConditions.forEach(x => {
		sources.push(`'../../${x.source}.png`);
	})

	return (
		<div className={styles.container}>
			<div className={styles.forecastCard}>
				<p className="">{dates[0]}</p>
				<img src={sources[1]} alt='sleet'></img>
				<div className={styles.tempBar}>
					<p>
						{Math.round(data.daily.temperature_2m_max[1])}°{tempUnit}
					</p>
					<p>
						{Math.round(data.daily.temperature_2m_min[1])}°{tempUnit}
					</p>
				</div>
			</div>

			<div className={styles.forecastCard}>
				<p className="">{dates[1]}</p>
				<img src={sources[2]} alt="sleet"></img>
				<div className={styles.tempBar}>
					<p>
						{Math.round(data.daily.temperature_2m_max[2])}°{tempUnit}
					</p>
					<p>
						{Math.round(data.daily.temperature_2m_min[2])}°{tempUnit}
					</p>
				</div>
			</div>

			<div className={styles.forecastCard}>
				<p className="">{dates[2]}</p>
				<img src={sources[3]} alt="sleet"></img>
				<div className={styles.tempBar}>
					<p>
						{Math.round(data.daily.temperature_2m_max[3])}°{tempUnit}
					</p>
					<p>
						{Math.round(data.daily.temperature_2m_min[3])}°{tempUnit}
					</p>
				</div>
			</div>

			<div className={styles.forecastCard}>
				<p className="">{dates[3]}</p>
				<img src={sources[4]} alt="sleet"></img>
				<div className={styles.tempBar}>
					<p>
						{Math.round(data.daily.temperature_2m_max[4])}°{tempUnit}
					</p>
					<p>
						{Math.round(data.daily.temperature_2m_min[4])}°{tempUnit}
					</p>
				</div>
			</div>

			<div className={styles.forecastCard}>
				<p className="">{dates[4]}</p>
				<img src={sources[5]} alt="sleet"></img>
				<div className={styles.tempBar}>
					<p>
						{Math.round(data.daily.temperature_2m_max[5])}°{tempUnit}
					</p>
					<p>
						{Math.round(data.daily.temperature_2m_min[5])}°{tempUnit}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Forecast;
