import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from './routes/Contact.jsx';
import About from './routes/About.jsx';
import Services from './routes/ServicesPage.jsx';


const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/contact', element: <Contact /> },
])
createRoot(document.getElementById('root')).render(<RouterProvider router={router} />
)
