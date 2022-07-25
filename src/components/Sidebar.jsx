import styles from '../styles/Sidebar.module.css'
import classNames from 'classnames'

const Sidebar = ({ location = 'Helsinki', date = 'Fri, 5 Jun', temp = '15', currentWeather = 'Showers' }) => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img src='../../Cloud-background.png'></img>
      </div>
      <div className={styles.topBar}>
        <button className={styles.searchBtn}>Search for places</button>
        <button className={classNames(styles.locationBtn, styles.locationBtnActive)}>
          <span className="material-icons">my_location</span>
        </button>
      </div>
      <div className={styles.weatherGraphic}>
        <img src='../../Shower.png' alt='raincloud'></img>
      </div>
      <div className={styles.temperatureBar}>
        <h1 className={styles.bigTemp}>{temp}</h1>
        <span>°C</span>
      </div>
      <h2 className={styles.currentWeatherClass}>{currentWeather}</h2>
      <p className='mv1 primarythree'>Today - {date}</p>
      <div className='mb4 flex items-center primarytwo'>
        <span className="material-icons">place</span>
        <p className='mv2'>{location}</p>
      </div>
    </div>
  )
}

export default Sidebar