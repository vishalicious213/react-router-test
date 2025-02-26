import { useNavigate } from 'react-router'

const FindAChat = ({ setToolToRender }) => {
    const navigate = useNavigate()

    function handleClick(tool) {
        navigate(`/app/${tool}`)
    }

    return (
        <>
        <div>Find a Chat</div>

        <div className="btn" onClick={() => handleClick("find-chat-match")}>Find Chat</div>
        </>
    )
}

export default FindAChat