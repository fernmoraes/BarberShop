import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error/Error.jsx'
import Home from './routes/Home/Home.jsx'

const router = createBrowserRouter([{
  //Elemento Pai
  path:'/', element:<App/>,
  errorElement:<Error/>,

  //Elementos Filho
  children:[
    {path:'/',element:<Home/>}
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
