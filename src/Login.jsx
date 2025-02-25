import React, { useState } from 'react'

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    function handleClick() {
        setIsLoggedIn(prevState => !prevState)
    }

    return (
        <section>
            <div onClick={handleClick}>{isLoggedIn ? "Logout" : "Login"}</div>
        </section>
    )
}

export default Login