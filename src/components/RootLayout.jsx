import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Container from './Container'
import Navbar from './ui/Navbar'
import Background from './ui/Background'
import SplashScreen from '../pages/SplashScreen'

function RootLayout() {
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
        <>
          <Navbar />
          <Container>
            <Outlet />
          </Container>
        </>
      )}
    </Background>
  )
}

export default RootLayout
