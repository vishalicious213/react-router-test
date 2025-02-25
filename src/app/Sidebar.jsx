import React from 'react'

const Sidebar = ({ setToolToRender }) => {
    function handleClick(tool) {
        setToolToRender(tool)
    }

    return (
        <section className="sidebar">
            <div onClick={() => handleClick("connections")}>Connections</div>
            <div onClick={() => handleClick("coffeechats")}>Coffee Chats</div>
            <div onClick={() => handleClick("requests")}>Requests</div>
        </section>
    )
}

export default Sidebar