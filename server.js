const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const socket = require("socket.io");
const path = require("path");

// config
const PORT = process.env.PORT || 8000;
const io = socket(server, {
    pingInterval: 1000,
    pingTimeout: 1000,
});

// Current users
let listSocketID = [];

// method of assigning names without signing in
let userNum = 1;

// on connect
io.on("connection", (socket) => {
    console.clear();
    console.log("New user joined");

    // add new user to list
    const newUserOBJ = {
        id: socket.id,
        name: "User" + userNum,
    };

    userNum++;

    listSocketID.push(newUserOBJ);

    // log current users
    console.log(listSocketID);

    // Send id to new user, tell everyone number of users, and alert users
    socket.emit("your-id", newUserOBJ);
    io.emit("number-users", listSocketID.length);
    socket.broadcast.emit("alert-of-new-user", newUserOBJ);

    // user sends message to server
    socket.on("new-message-to-server", (props) => {
        // Send to all but one who sent
        socket.broadcast.emit("new-message-from-server", props);
    });

    // user disconnects
    socket.on("disconnect", () => {
        console.clear();

        const oldUserOBJ = {
            id: socket.id,
            name: socket.id,
        };

        // Emit to all users
        io.emit("user-disconnected", oldUserOBJ);

        // delete user id from list
        listSocketID.splice(listSocketID.indexOf(socket.id), 1);

        // log current users
        console.log(listSocketID);

        io.emit("number-users", listSocketID.length);
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
