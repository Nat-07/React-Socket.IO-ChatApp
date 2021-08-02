// user send and receive message
function receivedMessage(newMessage, setMessages) {
    setMessages((oldMsgs) => [...oldMsgs, newMessage]);
}

// Get time
function currentTime() {
    var now = new Date();
    const time = now.getHours() + ":" + now.getMinutes();
    return time;
}

export { receivedMessage, currentTime };
