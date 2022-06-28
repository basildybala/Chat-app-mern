import React, { useState } from 'react'

const Chat = ({socket,username,room}) => {
    const [currentMessage, setCurrentMessage] = useState("");
    const sendMessage=async ()=>{
        if(currentMessage!==""){
            const messageData={
                room:room,
                author:username,
                message:currentMessage,
                time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes(),
            };
            await socket.emit("send_message",messageData)
        }
    }
  return (
    <div>
        <div className="chatHeader">
            <p>Live Chat</p>
        </div>
        <div className="chatBody"></div>
        <div className="chatFooter">
            <input type="Type Somthing..." onChange={(event) => {
            setCurrentMessage(event.target.value);
          }} />
            <button onClick={sendMessage}>&#9658;</button>
        </div>
    </div>
  )
}

export default Chat