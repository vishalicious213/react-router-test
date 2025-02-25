import { useState } from 'react'
import Sidebar from './Sidebar'
import Connections from './connections/Connections'
import CoffeeChats from './connections/CoffeeChats'
import Requests from './connections/Requests'
import './App.css'

function App() {
  const [toolToRender, setToolToRender] = useState('connections')

  function renderTool() {
    switch (toolToRender) {
      case 'connections': return <Connections />
      case 'coffeechats': return <CoffeeChats />
      case 'requests': return <Requests />
    }
  }

  return (
    <div className='app-container'>
      <section>
        <div>App</div>
        <Sidebar setToolToRender={setToolToRender} />
      </section>

      <main>
        {renderTool()}
      </main>
    </div>
  )
}

export default App
