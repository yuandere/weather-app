import { dateHandler } from '../utils';
import styles from '../styles/Forecast.module.css';
import ForecastCard from './ForecastCard';

const Forecast = ({ data, tempUnit, forecastConditions }) => {
	const dates = dateHandler();
	let sources = [];
	forecastConditions.forEach((x) => {
		sources.push(`'../../${x.source}.png`);
	});
	return (
		<div className={styles.container}>
			{dates.map((x, i) => {
				return (
					<ForecastCard
						key={x}
						date={x}
						source={sources[i + 1]}
						high={Math.round(data.daily.temperature_2m_max[i + 1])}
						low={Math.round(data.daily.temperature_2m_min[i + 1])}
						tempUnit={tempUnit}
					></ForecastCard>
				);
			})}
		</div>
	);
};

export default Forecast;
