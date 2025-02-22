import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import AboutUs from './AboutUs.jsx'
import Contact from './Contact.jsx'
import Faq from './Faq.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="app" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
