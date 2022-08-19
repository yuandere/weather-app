import classNames from 'classnames';
import { windHandler } from '../utils'
import styles from '../styles/Highlights.module.css'



const Highlights = ({ 
  data, 
}) => {
  const mediaQuery = window.matchMedia('(min-width: 1024px)');
  const currentHr = new Date().getHours();
  const humidity = data?.hourly.relativehumidity_2m[currentHr];
  const humidityVal = humidity*0.01*160;
  const windAngle = data?.current_weather.winddirection;
  return (
    <>
    <h2 className={styles.header}>Today's Highlights</h2>
    <div className={mediaQuery.matches ? classNames(styles.container, styles.containerLg) : styles.container}>
      <div className={styles.highlightsCard}>
        <p>Wind status</p>
        <div className={styles.offset}>
          <p>{data?.current_weather.windspeed}</p>
          <p>&nbsp;mph</p>
        </div>
        <div className={styles.inline}>
          <div className={styles.wind}>
            <span className="material-icons" id='indicator'>
              near_me
            </span>
          </div>
          <p className='f6'>{windHandler(windAngle)}</p>
        </div>
      </div>

      <div className={styles.highlightsCard}>
        <p>Humidity</p>
        <div className={styles.offset}>
          <p>{humidity}</p>
          <p>%</p>
        </div>
        <div className={styles.humiditySlider}>
          <div className='percentBar w-100 flex justify-between'>
            <p className='ma0'>0</p>
            <p className='ma0'>50</p>
            <p className='ma0'>100</p>
          </div>
          <div id='grey' className={styles.grey}></div>
          <div id='yellow' className={styles.yellow}></div>
          <p className='mt0 mb3 f7'>%</p>
        </div>
      </div>

      <div className={styles.highlightsCard}>
        <p>Cloud Cover</p>
        <div className={styles.offset}>
          <p>{data?.hourly.cloudcover[currentHr]}</p>
          <p>%</p>
        </div>
      </div>

      <div className={styles.highlightsCard}>
        <p>Air Pressure</p>
        <div className={styles.offset}>
          <p>{Math.round(data?.hourly.surface_pressure[currentHr])}</p>
          <p>&nbsp;hPa</p>
        </div>
      </div>
      <style>{`
      #yellow {
        width: ${humidityVal}px;
      }
      #indicator {
        transform: rotate(${windAngle-45}deg);
      }
      `}</style>
    </div>
    </>
  )
}

export default Highlights