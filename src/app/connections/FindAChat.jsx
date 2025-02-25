import React from 'react'

const FindAChat = ({ setToolToRender }) => {
    function handleClick(tool) {
        setToolToRender(tool)
    }

    return (
        <>
        <div>Find a Chat</div>

        <div className="btn" onClick={() => handleClick("find-chat-match")}>Find Chat</div>
        </>
    )
}

export default FindAChat