import { useState } from 'react'
import reactLogo from './assets/react.svg'
import tachyons from 'tachyons'
import Sidebar from './components/Sidebar'
import Forecast from './components/Forecast'
import Highlights from './components/Highlights'
import styles from './App.module.css'

function App() {
  const [windowSize, setWindowSize] = useState('peepeepoopoo');

  return (
    <div className={styles.App}>
      <Sidebar></Sidebar>
      <Forecast></Forecast>
      <Highlights></Highlights>
      <footer className='tc'>
        <p>created by <span>@al doub</span> - devchallenges.io</p>
      </footer>
    </div>
  )
}

export default App
