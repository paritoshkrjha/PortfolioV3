import { useEffect, useState } from 'react'
import SplashScreen from './pages/SplashScreen'
import Background from './components/ui/Background'
import Layout from './components/ui/Layout'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false)
    }, 2800)
  })

  return (
    <Background>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Layout>
          <p>Hello</p>
          <p>portfolio</p>
        </Layout>
      )}
    </Background>
  )
}

export default App
