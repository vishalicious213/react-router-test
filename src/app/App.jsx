import Sidebar from './Sidebar'
import Connections from './connections/Connections'
import CoffeeChats from './connections/CoffeeChats'
import Requests from './connections/Requests'
import './App.css'

function App() {
  return (
    <>
      <section>
        <div>App</div>
        <Sidebar />
      </section>

      <main>
          <Connections />
          <CoffeeChats />
          <Requests />
      </main>
    </>
  )
}

export default App
