import React, { useState } from 'react'
import { io } from "socket.io-client";
const socket = io(`http://localhost:3001`);
import './app.css'
import Chat from './components/Chat';
// import chatlogo from "./images/chat.png";
// import CreateUser from './components/CreatUser'
// import OnlineUsers from './components/OnlineUsers'


const App = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      // setShowChat(true);
    }
  };
  return (
    <div className='App'>
        <h3>Join Chat</h3>
        <input type="text" placeholder='Jhone...' onChange={(event) => {
              setUsername(event.target.value);
            }} />
        <input type="text" placeholder='Join Room...' onChange={(event) => {
              setRoom(event.target.value);
            }} />
        <button onClick={joinRoom}>Join A Room</button>
        <Chat socket={socket} username={username} room={room} />
    </div>
  )
}

export default App