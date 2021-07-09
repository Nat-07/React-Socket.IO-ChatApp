export default function NewMessageForm({ message, setMessage, sendMessage }) {
    return (
        // form send message
        <form
            className="fixed inset-x-0 bottom-0 flex justify-center h-10 py-2 bg-gray-200 dark:bg-darkModeHeadFoot"
            onSubmit={(e) => {
                e.preventDefault();
                // No blank messages
                if (message.trim().length) {
                    sendMessage(message);
                }
            }}
        >
            <input
                className="w-2/3 px-2 placeholder-gray-700 rounded-lg shadow-lg placeholder-opacity-70 "
                type="text"
                placeholder="New Message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
            ></input>
            <button
                type="submit"
                className="w-2/12 px-2 ml-2 bg-blue-300 rounded-lg shadow-lg dark:text-white dark:bg-blue-400"
            >
                Send
            </button>
        </form>
    );
}
