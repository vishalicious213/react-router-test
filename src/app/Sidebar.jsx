import React from 'react'

const Sidebar = ({ setToolToRender }) => {
    function handleClick(tool) {
        setToolToRender(tool)
    }

    return (
        <section className="sidebar">
            <h2>My Dashboard</h2>
            <div onClick={() => handleClick("connections")}>Connections</div>
            <div onClick={() => handleClick("coffeechats")}>Coffee Chats</div>
            <div onClick={() => handleClick("requests")}>Requests</div>

            <h2>My Profile</h2>
            <div>Personal Details</div>
            <div>Availability</div>
            <div>Social Links</div>
        </section>
    )
}

export default Sidebar