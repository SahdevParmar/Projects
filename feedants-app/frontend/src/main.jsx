import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Competition from './pages/Competition.jsx'

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import PageNotFound from './pages/PageNotFound.jsx'
import CompetitionById from './pages/CompetitionById.jsx'

const router=createBrowserRouter([
  {path:'/',element:<App/>},
  {path:'*',element:<PageNotFound/>},
  {path:'/:id',element:<CompetitionById/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
