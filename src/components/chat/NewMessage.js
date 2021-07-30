export default function NewMessageForm({ message, setMessage, sendMessage }) {
    return (
        // form send message
        <form
            className={
                message
                    ? "fixed inset-x-0 mx-10 bg-white bottom-2 dark:bg-black"
                    : "fixed inset-x-0 mx-20 bg-white bottom-2 dark:bg-black"
            }
            onSubmit={(e) => {
                e.preventDefault();
                // No blank messages
                if (message.trim().length) {
                    sendMessage(message);
                }
            }}
        >
            <div
                className={
                    message
                        ? "grid grid-cols-12 pl-3 pr-1 rounded-full ring-1 ring-opacity-70 ring-gray-400 dark:ring-gray-600"
                        : "grid grid-cols-8 pl-3 pr-1 rounded-full ring-1 ring-opacity-70 ring-gray-400 dark:ring-gray-600"
                }
            >
                <input
                    className={
                        message
                            ? "col-span-11 placeholder-gray-400 bg-transparent focus:outline-none dark:placeholder-gray-600 dark:text-gray-300"
                            : "col-span-7 placeholder-gray-400 bg-transparent focus:outline-none dark:placeholder-gray-600 dark:text-gray-300"
                    }
                    type="text"
                    placeholder="message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                ></input>

                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25px"
                        height="25px"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={
                            message
                                ? "text-blue-500 col-span-1 justify-self-center inline-block fill-current animate-pulse"
                                : "text-blue-500 filter grayscale col-span-1 justify-self-center inline-block "
                        }
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </form>
    );
}
