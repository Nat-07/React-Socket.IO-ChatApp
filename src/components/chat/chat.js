import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import NewMessageForm from "./NewMessage";
import Messages from "./Messages";
import { useLocation } from "react-router-dom";
import { CurrentUsersData, receivedMessage, currentTime } from "./helper";
import { ThemeToggle } from "../darkMode";

export default function ChatMain({ isBase, setIsBase }) {
    //  data
    const [myInfo, setMyInfo] = useState({});
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [numCurrentUsers, setCurrentUsers] = useState(0);
    const [numMyMessages, setNumMyMessages] = useState(0);

    const socketRef = useRef();

    // get name
    const name = new URLSearchParams(useLocation().search).get("name");

    useEffect(() => {
        //create connection with server
        socketRef.current = io.connect("/");

        // send name
        socketRef.current.emit("announce-name", name);

        // Get & save id
        socketRef.current.on("your-info", (id) => {
            setMyInfo({
                id: id,
                name: name,
            });
        });

        // user join message
        socketRef.current.on(
            "alert-enter-leave",
            ({ name, currentUsers, joined, left }) => {
                if (joined) {
                    const joinUserOBJ = {
                        name: name,
                        messageText: null,
                        currentTime: currentTime(),
                        joined: joined,
                        left: left,
                        isSelf: false,
                    };
                    receivedMessage(joinUserOBJ, setMessages);
                    setCurrentUsers(currentUsers);
                } else {
                    const leftUserOBJ = {
                        name: name,
                        messageText: null,
                        currentTime: null,
                        joined: joined,
                        left: left,
                        isSelf: false,
                    };
                    receivedMessage(leftUserOBJ, setMessages);
                    setCurrentUsers(currentUsers);
                }
            }
        );

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
    }, [name]);

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
        setNumMyMessages(numMyMessages + 1);

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
            <div className="fixed inset-x-0 top-0 grid grid-cols-3 py-2 bg-gray-100 z-500 dark:bg-darkModeHeadFoot dark:text-white dark:outline">
                <div className="col-span-1" />
                <div className="col-span-1 justify-self-center">
                    <CurrentUsersData numCurrentUsers={numCurrentUsers} />
                </div>

                <div className="col-span-1 mr-3 justify-self-end">
                    <ThemeToggle isBase={isBase} setIsBase={setIsBase} />
                </div>
            </div>
            {/* Middle w/ messages */}
            <div className="p-1">
                <Messages
                    messagesOBJ={messages}
                    numMyMessages={numMyMessages}
                    myName={myInfo.name}
                />
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
