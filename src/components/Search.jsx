import classNames from 'classnames'
import styles from '../styles/Search.module.css'

const Search = ({ drawerState, toggleDrawer }) => {
  let w = document.documentElement.style.getPropertyValue('--drawerWidth');
  let h = document.documentElement.style.getPropertyValue('--drawerHeight');
  return (
    <div className={drawerState ? classNames(styles.drawer, styles.drawerShow) : styles.drawer}>
      <button onClick={() => toggleDrawer()}>PRESS ME</button>
      <p>width = {w} height = {h}</p>
    </div>
  )
}

export default Search