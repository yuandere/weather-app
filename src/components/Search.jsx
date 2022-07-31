import classNames from 'classnames'
import styles from '../styles/Search.module.css'

const Search = ({ drawerVisible, toggleDrawer }) => {

  return (
    <div className={drawerVisible ? classNames(styles.drawer, styles.drawerShow) : styles.drawer}>
      <button onClick={() => toggleDrawer()}>PRESS ME</button>
    </div>
  )
}

export default Search