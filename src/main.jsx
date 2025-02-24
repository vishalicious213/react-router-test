import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import AboutUs from './pages/AboutUs.jsx'
import App from './app/App.jsx'
import Contact from './pages/Contact.jsx'
import Faq from './pages/Faq.jsx'
import Home from './pages/Home.jsx'
import Layout from './layout/Layout.jsx'

function Main() {
  const [renderApp, setRenderApp] = useState(false)

  function handleClick() {
    setRenderApp(prevState => !prevState)
  }

  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout showApp={handleClick} />}>
            <Route index element={renderApp ? <App /> : <Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="faq" element={<Faq />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<Main />)