import React, { useState } from 'react'
import { io } from "socket.io-client";
const socket = io(`http://localhost:3001`);
import './app.css'
import Chat from './components/Chat';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,

} from "react-router-dom";
import UserHome from './components/UserHome';
// import chatlogo from "./images/chat.png";
// import CreateUser from './components/CreatUser'
// import OnlineUsers from './components/OnlineUsers'


const App = () => {
  
  return (
   <Router>
    <Switch>
    <Route exact path='/'>
      <UserHome />
    </Route>
    <Route  path='/admin'>
      <UserHome />
    </Route>
    
    </Switch>
   </Router>
  )
}

export default App