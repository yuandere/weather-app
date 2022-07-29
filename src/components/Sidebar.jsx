import styles from '../styles/Sidebar.module.css'
import classNames from 'classnames'
// , date = 'Fri, 5 Jun', temp = '15', currentWeather = 'Showers'

const Sidebar = ({ 
  data, 
  date = 'Fri, 5 Jun',
  location = 'Helsinki',
  temp = Math.floor(data.current_weather.temperature), 
  weatherCond,
  source
}) => {
  const sourceLocation = `../../${source}.png`;
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
        <img src={sourceLocation} alt='raincloud'></img>
      </div>
      <div className={styles.temperatureBar}>
        <h1 className={styles.bigTemp}>{temp}</h1>
        <span>°F</span>
      </div>
      <h2 className={styles.currentWeatherClass}>{weatherCond}</h2>
      <p className={classNames(styles.dateBar, 'mv1', 'primarythree')}>Today - {date}</p>
      <div className='mb4 flex items-center primarytwo'>
        <span className="material-icons">place</span>
        <p className='mv2'>{location}</p>
      </div>
    </div>
  )
}

export default Sidebar