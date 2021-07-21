const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const socket = require("socket.io");
const path = require("path");
require("dotenv").config();

// config
const PORT = process.env.PORT || 5000;
const io = socket(server, {
    pingInterval: process.env.PING_INTERVAL,
    pingTimeout: process.env.PING_TIMEOUT,
});

// list of current users
let currentUsers = [];

// on connect
io.on("connection", (socket) => {
    // when user announce connection
    socket.on("announce-name", (name) => {
        console.clear();
        console.log("New user joined: " + name);

        var newUserOBJ = {
            name: name,
            id: socket.id,
        };

        // send client their id
        io.to(socket.id).emit("your-info", socket.id);

        // add client to current users
        currentUsers.push(newUserOBJ);
        console.log(currentUsers);

        io.emit("alert-enter-leave", {
            name: name,
            currentUsers: currentUsers.length,
            joined: true,
            left: false,
        });
    });

    // user sends message to server
    socket.on("new-message-to-server", (props) => {
        // Send to all but one who sent
        socket.broadcast.emit("new-message-from-server", props);
    });

    // user disconnects
    socket.on("disconnect", () => {
        console.clear();

        // get user's info
        var name;
        currentUsers.forEach((users) => {
            if (users.id === socket.id) {
                name = users.name;
            }
        });

        // delete user from current list
        currentUsers.splice(currentUsers.indexOf(socket.id), 1);

        // log current users
        console.log(currentUsers);

        io.emit("alert-enter-leave", {
            name: name,
            currentUsers: currentUsers.length,
            joined: false,
            left: true,
        });
    });
});

// static files and html (not used in dev)
app.use(express.static(path.join(__dirname, "/build/")));
app.get("/", function (request, response) {
    response.sendFile(__dirname + "/build/index.html");
});

server.listen(PORT, function () {
    console.log(`listening on *${PORT}:`);
});
