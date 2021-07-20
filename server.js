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

// list of current users
let listSocketID = [];

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
        listSocketID.push(newUserOBJ);
        console.log(listSocketID);

        // notify of new user
        io.emit("number-users", listSocketID.length);
        socket.broadcast.emit("alert-of-new-user", name);
    });

    // user sends message to server
    socket.on("new-message-to-server", (props) => {
        // Send to all but one who sent
        socket.broadcast.emit("new-message-from-server", props);
    });

    socket.on("received", () => {
        io.to(socket.id).emit("server-received");
        console.log("server got info");
    });

    socket.on("time-out", ({ year, month, day, hours, min, sec, millisec }) => {
        const datePassed = new Date(
            year,
            month,
            day,
            hours,
            min,
            sec,
            millisec
        );
    });

    // user disconnects
    socket.on("disconnect", () => {
        console.clear();

        // get user's info
        var name;
        listSocketID.forEach((users) => {
            if (users.id === socket.id) {
                name = users.name;
            }
        });

        // Emit to all users
        io.emit("user-disconnected", name);

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
