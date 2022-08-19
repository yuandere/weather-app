import styles from '../styles/ForecastCard.module.css'

export const ForecastCard = ({ date, condition, high, low }) => {
  return (
    <div className={styles.forecastCard}>
    <p className=''>Tomorrow</p>
    <img src='../../Sleet.png' alt='sleet'></img>
    <div className={styles.tempBar}>
      <p>16°C</p>
      <p>11°C</p>
    </div>
  </div>
  )
}