import React from 'react'
import { Link } from "react-router"

const Nav = () => {
    return (
        <>
            <nav>
                <Link className='nav-link' to="/">Home</Link>
                <Link className='nav-link' to="app">App</Link>
            </nav>
        </>
    )
}

export default Nav