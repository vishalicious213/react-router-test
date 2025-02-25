import React from 'react'

const Sidebar = ({ setToolToRender }) => {
    function handleClick(tool) {
        setToolToRender(tool)
    }

    return (
        <section className="sidebar">
            <h2>My Dashboard</h2>
            <div onClick={() => handleClick("connections")}>Connections</div>
            <div onClick={() => handleClick("coffee-chats")}>Coffee Chats</div>
            <div onClick={() => handleClick("requests")}>Requests</div>
            <div onClick={() => handleClick("find-a-chat")}>Find a Chat</div>
            <div onClick={() => handleClick("messages")}>Messages</div>

            <h2>My Profile</h2>
            <div onClick={() => handleClick("personal-details")}>Personal Details</div>
            <div onClick={() => handleClick("availability")}>Availability</div>
            <div onClick={() => handleClick("social-links")}>Social Links</div>
        </section>
    )
}

export default Sidebar