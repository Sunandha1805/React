import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
import Github, { githubInfoLoader } from './components/Github.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="" element = {<Home /> } />
      <Route path="about" element = {<About /> } />
      <Route path="contact" element = {<Contact /> } />
      <Route path="user/:userid" element = {<User /> } />
      <Route loader={githubInfoLoader} path="github" element = {<Github /> } />
    </Route>
  )
)

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: []
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
