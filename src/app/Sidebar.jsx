import { useNavigate } from 'react-router'

const Sidebar = () => {
    const navigate = useNavigate()

    function handleClick(tool) {
        navigate(`/app/${tool}`)
    }

    return (
        <section className="sidebar">
            <h2>My Dashboard</h2>
            <div className="sidebar-item" onClick={() => handleClick("connections")}>Connections</div>
            <div className="sidebar-item" onClick={() => handleClick("coffee-chats")}>Coffee Chats</div>
            <div className="sidebar-item" onClick={() => handleClick("requests")}>Requests</div>
            <div className="sidebar-item" onClick={() => handleClick("find-a-chat")}>Find a Chat</div>
            <div className="sidebar-item" onClick={() => handleClick("messages")}>Messages</div>

            <h2 className="sidebar-section">My Profile</h2>
            <div className="sidebar-item" onClick={() => handleClick("personal-details")}>Personal Details</div>
            <div className="sidebar-item" onClick={() => handleClick("availability")}>Availability</div>
            <div className="sidebar-item" onClick={() => handleClick("social-links")}>Social Links</div>
        </section>
    )
}

export default Sidebar