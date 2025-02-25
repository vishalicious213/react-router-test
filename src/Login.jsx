import React, { useState } from 'react'

const Login = ({showApp}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    function handleClick() {
        setIsLoggedIn(prevState => !prevState)
        showApp()
    }

    return (
        <section>
            <div className="login-btn" onClick={handleClick}>{isLoggedIn ? "Logout" : "Login"}</div>
        </section>
    )
}

export default Login