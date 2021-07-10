// user send and receive message
function receivedMessage(newMessage, setMessages) {
    setMessages((oldMsgs) => [...oldMsgs, newMessage]);
}

// number of online users
function CurrentUsersData({ numCurrentUsers }) {
    return (
        <div className="grid col-span-1 pt-1 pl-2 justify-self-center h-min">
            <div className="inline-flex">
                <p className="font-sans subpixel-antialiased">Online:&nbsp;</p>
                <p className="font-mono subpixel-antialiased">
                    {numCurrentUsers}
                </p>

                <span className="ml-2 animate-ping rounded-full h-1.5 w-1.5 bg-green-600"></span>
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
