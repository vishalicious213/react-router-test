import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import AboutUs from './AboutUs.jsx'
import App from './App.jsx'
import Contact from './Contact.jsx'
import Faq from './Faq.jsx'
import Home from './Home.jsx'
import Layout from './Layout.jsx'

function Main() {
  const [renderApp, setRenderApp] = useState(false)

  const HomeToRender = () => {
    return renderApp ? <App /> : <Home />
  }

  function handleClick() {
    setRenderApp(prevState => !prevState)
  }

  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout showApp={handleClick} />}>
            <Route index element={<HomeToRender />} />
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