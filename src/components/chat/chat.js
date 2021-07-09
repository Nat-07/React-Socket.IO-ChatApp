import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import NewMessageForm from "./NewMessage";
import Messages from "./Messages";
import queryString from "query-string";
import { ThemeToggle } from "../darkMode";
import { CurrentUsersData, receivedMessage, currentTime } from "./helper";

export default function ChatMain({ location }) {
    // saved data
    const [myInfo, setMyInfo] = useState({});
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [numCurrentUsers, setCurrentUsers] = useState([]);

    const socketRef = useRef();

    useEffect(() => {
        //create connection with server
        socketRef.current = io.connect("/");

        // get name and send
        const { name } = queryString.parse(location.search);
        socketRef.current.emit("announce-name", name);

        // Get & save id
        socketRef.current.on("your-info", (id) => {
            setMyInfo({
                id: id,
                name: name,
            });
        });

        // user join message
        socketRef.current.on("alert-of-new-user", (name) => {
            const joinUserOBJ = {
                name: name,
                messageText: null,
                currentTime: currentTime(),
                joined: true,
                left: false,
                isSelf: false,
            };
            receivedMessage(joinUserOBJ, setMessages);
        });

        // receive num users
        socketRef.current.on("number-users", (numberOfUsers) => {
            setCurrentUsers(numberOfUsers);
        });

        // receive user disconnects
        socketRef.current.on("user-disconnected", (name) => {
            const leftUserOBJ = {
                name: name,
                messageText: null,
                currentTime: null,
                joined: false,
                left: true,
                isSelf: false,
            };
            receivedMessage(leftUserOBJ, setMessages);
        });

        // receive new message
        socketRef.current.on(
            "new-message-from-server",
            ({ name, messageText, currentTime, joined, left }) => {
                const newMessage = {
                    name: name,
                    messageText: messageText,
                    currentTime: currentTime,
                    joined: joined,
                    left: left,
                    isSelf: false,
                };
                receivedMessage(newMessage, setMessages);
            }
        );
    }, []);

    // self-user send message
    function sendMessage(message) {
        const messageObject = {
            id: myInfo.id,
            name: myInfo.name,
            messageText: message,
            currentTime: currentTime(),
            joined: false,
            left: false,
            isSelf: true,
        };

        // send to server
        socketRef.current.emit("new-message-to-server", messageObject);
        // Show on screen
        receivedMessage(messageObject, setMessages);
        // clear state var
        setMessage("");
    }

    return (
        // main chat screen
        <div className="h-full min-h-screen overflow-x-hidden transition duration-75 bg-white h-fixed dark:bg-darkModeMain">
            {/* Header */}
            <div className="fixed inset-x-0 top-0 grid grid-cols-3 py-2 bg-gray-100 z-9999 dark:bg-darkModeHeadFoot dark:text-white dark:outline">
                <div className="col-span-1"></div>
                <CurrentUsersData numCurrentUsers={numCurrentUsers} />

                <ThemeToggle />
            </div>
            {/* Middle w/ messages */}
            <div className="p-1">
                <Messages messagesOBJ={messages} clientID={myInfo.id} />
            </div>
            {/* Footer */}
            <div>
                <NewMessageForm
                    setMessage={setMessage}
                    message={message}
                    sendMessage={sendMessage}
                />
            </div>
        </div>
    );
}
