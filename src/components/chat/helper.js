// user send and receive message
function receivedMessage(newMessage, setMessages) {
    setMessages((oldMsgs) => [...oldMsgs, newMessage]);
}

// number of online users
function CurrentUsersData({ numCurrentUsers }) {
    return (
        <div className="grid col-span-1 pt-1 pl-2 justify-self-center h-min">
            <div className="inline-flex">
                <p className="font-sans subpixel-antialiased">Online:&nbsp; </p>
                <p className="font-mono subpixel-antialiased">
                    {numCurrentUsers}
                </p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="ml-2 animate-customOnlinePing"
                    height="10px"
                    width="10px"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>
    );
}

// Get time
function currentTime() {
    var now = new Date();
    const time = now.getHours() + ":" + now.getMinutes();
    return time;
}

export { CurrentUsersData, receivedMessage, currentTime };
