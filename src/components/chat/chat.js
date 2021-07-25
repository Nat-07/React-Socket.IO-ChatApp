import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import NewMessageForm from "./NewMessage";
import Messages from "./Messages";
import { useLocation } from "react-router-dom";
import {
    CurrentUsersData,
    receivedMessage,
    currentTime,
    DisplayOnline,
} from "./helper";
import { ThemeToggle } from "../darkMode";
import HomeButton from "../homeButton";

export default function ChatMain({ isBase, setIsBase }) {
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
            setMyInfo({
                id: id,
                name: name,
            });
        });

        // user join/leave message
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
            "new-message-FS",
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
        <div className="h-full min-h-screen transition duration-75 bg-white h-fixed dark:bg-darkModeMain">
            {/* Header */}
            <div
                className={
                    showNames
                        ? "fixed inset-x-0 top-0 z-10 py-2 bg-gray-100 rounded-b-lg backdrop-filter dark:filter dark:opacity-100 filter opacity-100 backdrop-blur-xs dark:bg-darkModeHeadFoot dark:text-white dark:outline"
                        : "fixed inset-x-0 top-0 z-10 py-2 bg-gray-100 rounded-b-lg backdrop-filter dark:filter dark:opacity-98 filter opacity-91 backdrop-blur-xs dark:bg-darkModeHeadFoot dark:text-white dark:outline"
                }
            >
                {/* Top bar */}
                <div className="z-20 grid grid-cols-3">
                    <div className="col-span-1 ml-3 justify-self-start">
                        <HomeButton />
                    </div>
                    <div className="col-span-1 justify-self-center">
                        <CurrentUsersData
                            numCurrentUsers={numCurrentUsers}
                            whoOnline={whoOnline}
                            showNames={showNames}
                        />
                    </div>

                    <div className="col-span-1 mr-3 justify-self-end">
                        <ThemeToggle isBase={isBase} setIsBase={setIsBase} />
                    </div>
                </div>

                {/* display who online */}
                {showNames ? (
                    <DisplayOnline onlineNames={onlineNames} />
                ) : (
                    <></>
                )}
            </div>

            {/* All messages */}
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
