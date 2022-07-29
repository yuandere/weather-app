import classNames from 'classnames';
import styles from '../styles/Highlights.module.css'



const Highlights = ({ resizeFlag, humidity = 50, windDir = 'WSW' }) => {
  const mediaQuery = window.matchMedia('(min-width: 1024px)');
  const humidityVal = humidity*0.01*160;
  return (
    <>
    <h2 className={styles.header}>Today's Highlights</h2>
    <div className={mediaQuery.matches ? classNames(styles.container, styles.containerLg) : styles.container}>
      <div className={styles.highlightsCard}>
        <p>Wind status</p>
        <div className={styles.offset}>
          <p>7</p>
          <p>mph</p>
        </div>
        <div className={styles.inline}>
          <div className={styles.wind}>
            <span className="material-icons">
              near_me
            </span>
          </div>
          <p className='f6'>WSW</p>
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
        <p>Visibility</p>
        <div className={styles.offset}>
          <p>6.4</p>
          <p>&nbsp;miles</p>
        </div>
      </div>

      <div className={styles.highlightsCard}>
        <p>Air Pressure</p>
        <div className={styles.offset}>
          <p>998</p>
          <p>&nbsp;mb</p>
        </div>
      </div>
      <style>{`
      #yellow {
        width: ${humidityVal}px;
      `}</style>
    </div>
    </>
  )
}

export default Highlights