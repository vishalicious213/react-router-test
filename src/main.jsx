import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import AboutUs from './AboutUs.jsx'
import App from './App.jsx'
import Contact from './Contact.jsx'
import Faq from './Faq.jsx'
import Home from './Home.jsx'
import Layout from './Layout.jsx'

const isLoggedIn = false

const HomeToRender = () => {
  return isLoggedIn ? <App /> : <Home />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about-us" element={<AboutUs />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
