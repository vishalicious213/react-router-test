import { useState } from 'react'
import Sidebar from './Sidebar'
import Connections from './connections/Connections'
import CoffeeChats from './connections/CoffeeChats'
import FindAChat from './connections/FindAChat'
import FindChatMatch from './connections/FindChatMatch'
import Messages from './connections/Messages'
import Requests from './connections/Requests'
import Availability from './profile/Availability'
import PersonalDetails from './profile/PersonalDetails'
import SocialLinks from './profile/SocialLinks'
import './App.css'

function App() {
  const [toolToRender, setToolToRender] = useState('connections')

  function renderTool() {
    switch (toolToRender) {
      case 'connections': return <Connections />
      case 'coffee-chats': return <CoffeeChats />
      case 'requests': return <Requests />
      case 'find-a-chat': return <FindAChat setToolToRender={setToolToRender} />
      case 'find-chat-match': return <FindChatMatch />
      case 'messages': return <Messages />
      case 'availability': return <Availability />
      case 'personal-details': return <PersonalDetails />
      case 'social-links': return <SocialLinks />
    }
  }

  return (
    <div className='app-container'>
      <Sidebar setToolToRender={setToolToRender} />

      <main>
        {renderTool()}
      </main>
    </div>
  )
}

export default App
