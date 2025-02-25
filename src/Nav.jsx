import React from 'react'
import { Link } from "react-router"

const Nav = () => {
    return (
        <>
            <nav>
                <Link className='nav-link' to="/">Home</Link>
                <Link className='nav-link' to="/about-us">About Us</Link>
                <Link className='nav-link' to="/faq">FAQ</Link>
                <Link className='nav-link' to="/contact">Contact</Link>
                {/* <Link className='nav-link' to="/app">App</Link> */}
            </nav>
        </>
    )
}

export default Nav