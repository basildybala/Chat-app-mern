const app=require('express');
const httpServer=require("http").createServer(app)
const io=require('socket.io')(httpServer)
const PORT =3001


httpServer.listen(PORT,()=>{
    console.log(`Server Running Port ${PORT}`);
})