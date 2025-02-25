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
            <div onClick={() => handleClick("personaldetails")}>Personal Details</div>
            <div onClick={() => handleClick("availability")}>Availability</div>
            <div onClick={() => handleClick("sociallinks")}>Social Links</div>
        </section>
    )
}

export default Sidebar