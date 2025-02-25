import React from 'react'
import Sidebar from './Sidebar'
import Connections from './connections/Connections'
import CoffeeChats from './connections/CoffeeChats'
import Requests from './connections/Requests'

const Dashboard = () => {
    return (
        <main>
            <Sidebar />
            <Connections />
            <CoffeeChats />
            <Requests />
        </main>
    )
}

export default Dashboard