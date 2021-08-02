import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";

import NewMessageForm from "./NewMessage";
import Messages from "./Messages";
import { receivedMessage, currentTime } from "./Helper";
import { ThemeToggle } from "../DarkMode";
import HomeButton from "../HomeButton";
import { CurrentUsersData, DisplayOnline } from "./CurrentUsers";

export default function Chat({ isBase, setIsBase }) {
    //  data
    const [myInfo, setMyInfo] = useState({});
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [numCurrentUsers, setCurrentUsers] = useState(0);
    const [numMyMessages, setNumMyMessages] = useState(0);
    const [onlineNames, setOnlineNames] = useState([]);
    const [showNames, setShowNames] = useState(false);

    const socketRef = useRef();

    // get name
    const name = new URLSearchParams(useLocation().search).get("name");

    useEffect(() => {
        //socketio connection
        socketRef.current = io.connect("/");

        // send name
        socketRef.current.emit("announce-name", name);

        // Get & save id
        socketRef.current.on("your-info", (id) => {
            // Random color pick
            const ranNum = Math.floor(Math.random() * 6 + 1);

            const colorList = [
                "text-red-500",
                "text-blue-500",
                "text-green-500",
                "text-yellow-500",
                "text-purple-500",
                "text-pink-500",
                "text-indigo-500",
            ];

            setMyInfo({
                id: id,
                name: name,
                color: colorList[ranNum],
            });
        });

        // user join/leave message
        socketRef.current.on(
            "alert-enter-leave",
            ({ name, currentUsers, joined, left, color }) => {
                if (joined) {
                    const joinUserOBJ = {
                        name: name,
                        messageText: null,
                        currentTime: currentTime(),
                        joined: joined,
                        left: left,
                        isSelf: false,
                        color: null,
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
                        color: null,
                    };
                    receivedMessage(leftUserOBJ, setMessages);
                    setCurrentUsers(currentUsers);
                }
            }
        );

        // receive new message
        socketRef.current.on(
            "new-message-FS",
            ({ name, messageText, currentTime, joined, left, color }) => {
                const newMessage = {
                    name: name,
                    messageText: messageText,
                    currentTime: currentTime,
                    joined: joined,
                    left: left,
                    isSelf: false,
                    color: color,
                };
                receivedMessage(newMessage, setMessages);
            }
        );

        socketRef.current.on("who-online-res", (props) => {
            setOnlineNames(props);
            setShowNames(true);
        });
    }, [name]);

    // send message
    function sendMessage(message) {
        const messageObject = {
            id: myInfo.id,
            name: myInfo.name,
            messageText: message,
            currentTime: currentTime(),
            joined: false,
            left: false,
            isSelf: true,
            color: myInfo.color,
        };

        setNumMyMessages(numMyMessages + 1);

        // send server
        socketRef.current.emit("new-message-TS", messageObject);

        receivedMessage(messageObject, setMessages);
        setMessage("");
    }

    function whoOnline() {
        if (showNames) {
            setShowNames(!showNames);
        } else {
            socketRef.current.emit("req-who-online");
        }
    }

    return (
        // main chat screen
        <div className="h-full min-h-screen transition duration-75 bg-white h-fixed dark:bg-black">
            {/* Header */}
            <div className="fixed inset-x-0 top-0 z-10 py-2 bg-gray-200 rounded-b-lg backdrop-filter backdrop-blur-md ring-gray-300 dark:bg-opacity-20 bg-opacity-20 ring-1 dark:bg-gray-800 dark:text-white ">
                {/* Top bar */}
                <div className="grid grid-cols-3">
                    <div className="col-span-1 ml-3 justify-self-start">
                        {/* disconnect user */}
                        <button onClick={() => socketRef.current.disconnect()}>
                            <HomeButton />
                        </button>
                    </div>
                    <div className="col-span-1 justify-self-center">
                        <CurrentUsersData
                            numCurrentUsers={numCurrentUsers}
                            whoOnline={whoOnline}
                            showNames={showNames}
                        />
                    </div>

                    {/* dark/light toggle */}
                    <div className="col-span-1 mr-3 justify-self-end">
                        <ThemeToggle isBase={isBase} setIsBase={setIsBase} />
                    </div>
                </div>

                {/* show who online */}
                {showNames ? (
                    <DisplayOnline onlineNames={onlineNames} />
                ) : (
                    <></>
                )}
            </div>

            {/* All messages */}
            <Messages
                messagesOBJ={messages}
                numMyMessages={numMyMessages}
                myName={myInfo.name}
            />

            {/* Footer */}
            <NewMessageForm
                setMessage={setMessage}
                message={message}
                sendMessage={sendMessage}
            />
        </div>
    );
}
