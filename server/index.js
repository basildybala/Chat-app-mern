const express=require('express');

const httpServer=require("http").createServer(express)
const io=require('socket.io')(httpServer,{
    cors:{
        origin:"*",
        methods:["GET","POST"],
    },
})
const PORT =3001
const cors=require('cors')



io.on("connection",(socket)=>{
    console.log("Connected Socket "+socket.id)
    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`);
      });
    socket.on("send_message", (data) => {
        
        console.log(data);
      });
    socket.on("disconnect",()=>{
        console.log(`${socket.id} Disconnected`)
    })
})


httpServer.listen(PORT,()=>{
    console.log(`Server Running Port ${PORT}`);
})