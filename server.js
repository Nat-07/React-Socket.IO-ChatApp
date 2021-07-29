const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const socket = require("socket.io");
const path = require("path");
require("dotenv").config();

// config
const PORT = process.env.PORT_SERVER || 5000;
const io = socket(server, {
    pingInterval: process.env.PING_INTERVAL || 1000,
    pingTimeout: process.env.PING_TIMEOUT || 1000,
});

// list of current users
let currentUsers = [];

// on connect
io.on("connection", (socket) => {
    socket.on("announce-name", (name) => {
        console.clear();
        console.log("New user joined: " + name);

        var newUserOBJ = {
            name: name,
            id: socket.id,
        };

        // send client id
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

    socket.on("new-message-TS", (props) => {
        // Send to all minus sender
        socket.broadcast.emit("new-message-FS", props);
    });

    // respond with users online
    socket.on("req-who-online", () => {
        const currentNames = [];
        currentUsers.forEach((singleUser) => {
            currentNames.push(singleUser.name);
        });

        io.to(socket.id).emit("who-online-res", currentNames);
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

// html & static (used in prod)
app.use(express.static(path.join(__dirname, "/build/")));

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/build/index.html");
});

server.listen(PORT, function () {
    console.log(`listening on *${PORT}:`);
});
