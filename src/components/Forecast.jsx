import styles from '../styles/Forecast.module.css'

const Forecast = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.forecastCard}>
        <p className=''>Tomorrow</p>
        <img src='../../Sleet.png' alt='sleet'></img>
        <div className={styles.tempBar}>
          <p>16°C</p>
          <p>11°C</p>
        </div>
      </div>

      <div className={styles.forecastCard}>
        <p className=''>Tomorrow</p>
        <img src='../../Sleet.png' alt='sleet'></img>
        <div className={styles.tempBar}>
          <p>16°C</p>
          <p>11°C</p>
        </div>
      </div>

      <div className={styles.forecastCard}>
        <p className=''>Tomorrow</p>
        <img src='../../Sleet.png' alt='sleet'></img>
        <div className={styles.tempBar}>
          <p>16°C</p>
          <p>11°C</p>
        </div>
      </div>

      <div className={styles.forecastCard}>
        <p className=''>Tomorrow</p>
        <img src='../../Sleet.png' alt='sleet'></img>
        <div className={styles.tempBar}>
          <p>16°C</p>
          <p>11°C</p>
        </div>
      </div>

      <div className={styles.forecastCard}>
        <p className=''>Tomorrow</p>
        <img src='../../Sleet.png' alt='sleet'></img>
        <div className={styles.tempBar}>
          <p>16°C</p>
          <p>11°C</p>
        </div>
      </div>
    </div>
  )
}

export default Forecast