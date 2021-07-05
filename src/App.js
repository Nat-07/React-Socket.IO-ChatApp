import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import NewMessageForm from "./components/NewMessage";
import Messages from "./components/Messages";
import {
    CurrentUsersData,
    receivedMessage,
    currentTime,
    ThemeToggle,
} from "./components/helper";

export default function Socketwork() {
    // User info
    const [myInfo, setMyInfo] = useState({});
    // List of messages
    const [messages, setMessages] = useState([]);
    // single message
    const [message, setMessage] = useState("");
    // number of current users
    const [numCurrentUsers, setCurrentUsers] = useState([]);

    const socketRef = useRef();

    useEffect(() => {
        //create connection with server
        socketRef.current = io.connect("/");
        // Get your id from server
        socketRef.current.on("your-id", ({ id, name }) => {
            setMyInfo({
                id: id,
                name: name,
            });
        });

        // user joins message
        socketRef.current.on("alert-of-new-user", ({ id, name }) => {
            const joinUserOBJ = {
                id: id,
                name: name,
                messageText: null,
                currentTime: currentTime(),
                joined: true,
                left: false,
            };
            receivedMessage(joinUserOBJ, setMessages);
        });

        // getting accurate number of current users
        socketRef.current.on("number-users", (numberOfUsers) => {
            // console.log(numberOfUsers);
            setCurrentUsers(numberOfUsers);
        });

        // user disconnects message
        socketRef.current.on("user-disconnected", ({ id, name }) => {
            const leftUserOBJ = {
                id: id,
                name: name,
                messageText: null,
                currentTime: currentTime(),
                joined: false,
                left: true,
            };
            receivedMessage(leftUserOBJ, setMessages);
        });
        // When server sends new message
        socketRef.current.on(
            "new-message-from-server",
            ({ id, name, messageText, currentTime, joined, left }) => {
                const newMessage = {
                    id: id,
                    name: name,
                    messageText: messageText,
                    currentTime: currentTime,
                    joined: joined,
                    left: left,
                };
                receivedMessage(newMessage, setMessages);
            }
        );
    }, []);

    function sendMessage(message) {
        const messageObject = {
            id: myInfo.id,
            name: myInfo.name,
            messageText: message,
            currentTime: currentTime(),
            joined: false,
            left: false,
        };

        // send to server
        socketRef.current.emit("new-message-to-server", messageObject);
        // Show on screen
        receivedMessage(messageObject, setMessages);
        // clear state var
        setMessage("");
    }

    return (
        <main className="h-full min-h-screen overflow-x-hidden transition duration-75 bg-white h-fixed dark:bg-darkModeMain">
            <div className="fixed inset-x-0 top-0 grid grid-cols-3 py-2 bg-gray-100 dark:bg-darkModeHeadFoot dark:text-white dark:outline">
                <div className="col-span-1"></div>
                <CurrentUsersData numCurrentUsers={numCurrentUsers} />

                <ThemeToggle />
            </div>
            <div className="p-1">
                <Messages messagesOBJ={messages} clientID={myInfo.id} />
            </div>
            <div>
                <NewMessageForm
                    setMessage={setMessage}
                    message={message}
                    sendMessage={sendMessage}
                />
            </div>
        </main>
    );
}
