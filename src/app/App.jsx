import { Outlet } from 'react-router'
import Sidebar from './Sidebar'
import './App.css'

function App() {
    return (
        <div className="app-container">
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default App