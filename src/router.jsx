import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import HomePage from './pages/Home'
import Projects from './pages/Projects'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
    ],
  },
])

export default router
