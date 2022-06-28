import React from 'react'
import { io } from "socket.io-client";
const socket = io(`http://localhost:3001`);
import './app.css'
import chatlogo from "./images/chat.png";


const App = () => {
  return (
    <div className='App'>
      <header className="app-header">
        <img src={chatlogo} alt="" />
        <div className="app-name b-500 primaryColor">My Chat</div>
      </header>
    </div>
  )
}

export default App