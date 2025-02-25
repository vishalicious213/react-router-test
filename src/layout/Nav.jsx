import React from 'react'
import { Link } from "react-router"
import Login from './Login'

const Nav = ({showApp}) => {
    return (
        <>
            <nav>
                <section>
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="/about-us">About Us</Link>
                    <Link className='nav-link' to="/faq">FAQ</Link>
                    <Link className='nav-link' to="/contact">Contact</Link>
                </section>
                <Login showApp={showApp} />
            </nav>
        </>
    )
}

export default Nav