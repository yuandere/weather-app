import styles from '../styles/Forecast.module.css'

const ForecastCard = ({ date, source, high, low, tempUnit }) => {
  return (
    <div className={styles.forecastCard}>
      <p>{date}</p>
      <img src={source} alt={source}></img>
      <div className={styles.tempBar}>
        <p>
          {high}°{tempUnit}
        </p>
        <p>
          {low}°{tempUnit}
        </p>
      </div>
    </div>
  )
};

export default ForecastCard