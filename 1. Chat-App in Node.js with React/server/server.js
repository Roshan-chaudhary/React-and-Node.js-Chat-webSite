const express = require('express');
const app = express();
const Roshan = require('./config/db');
const cors = require("cors");
const http = require("http"); // Import the http module
const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST","DELETE","UPDATE"]
    }
});


console.log("User is Connected")

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);


socket.on("send-message",(message)=>{
    console.log(message);
//Broad cast message
io.emit("received-message",message)
});


 socket.on("disconnect", () =>
        console.log("User Disconnect")
    );
});





server.listen(5000, () => {
    console.log('Server is running on port 5000');
})
