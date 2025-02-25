import { Routes, Route, Outlet } from 'react-router'
import Dashboard from './Dashboard'
import './App.css'

function App() {
  return (
    <>
      <div>App</div>

      <Routes>
        <Route index element={<Dashboard />} />
      </Routes>

      <Outlet />
    </>
  )
}

export default App
