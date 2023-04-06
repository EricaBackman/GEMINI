import Home from './Home'
import Navbar from './Navbar'

// createBrowserRouter
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom'

function Router() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: '/' }
      ],
      element: <Navbar />
    }
  ])

  return <RouterProvider router={router} />
}

export default Router
