import React from 'react'
import { Outlet } from 'react-router'
import Nav from './Nav'

const Layout = ({showApp}) => {
    return (
        <>
            <Nav showApp={showApp} />

            <Outlet />
        </>
    )
}

export default Layout