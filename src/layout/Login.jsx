import React, { useState } from 'react'

const Login = ({showApp}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    function handleLogin() {
        setIsLoggedIn(prevState => !prevState)
        showApp()
    }

    function handleSignup() {
        console.log("Sign Up clicked")
    }

    return (
        <section>
            {isLoggedIn ? "" : <div className="login-btn" onClick={handleSignup}>Sign Up</div>}
            <div className="login-btn" onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</div>
        </section>
    )
}

export default Login