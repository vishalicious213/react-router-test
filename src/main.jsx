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
import Connections from './app/connections/Connections'
import CoffeeChats from './app/connections/CoffeeChats'
import FindAChat from './app/connections/FindAChat'
import FindChatMatch from './app/connections/FindChatMatch'
import Messages from './app/connections/Messages'
import Requests from './app/connections/Requests'
import Availability from './app/profile/Availability'
import PersonalDetails from './app/profile/PersonalDetails'
import SocialLinks from './app/profile/SocialLinks'

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

            <Route path="app" element={<App />}>
                <Route index element={<Connections />} /> {/* Default route inside App */}
                <Route path="connections" element={<Connections />} />
                <Route path="coffee-chats" element={<CoffeeChats />} />
                <Route path="requests" element={<Requests />} />
                <Route path="find-a-chat" element={<FindAChat />} />
                <Route path="find-chat-match" element={<FindChatMatch />} />
                <Route path="messages" element={<Messages />} />
                <Route path="availability" element={<Availability />} />
                <Route path="personal-details" element={<PersonalDetails />} />
                <Route path="social-links" element={<SocialLinks />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<Main />)