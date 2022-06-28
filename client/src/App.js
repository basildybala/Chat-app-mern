import React from 'react'
import { io } from "socket.io-client";
const socket = io(`http://localhost:3001`);

const App = () => {
  return (
    <div>Chat App</div>
  )
}

export default App