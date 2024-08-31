import { useEffect, useState } from 'react'
import SplashScreen from './pages/SplashScreen'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false)
    }, 3000)
  })

  return <>{showSplash ? <SplashScreen /> : <div>App</div>}</>
}

export default App
