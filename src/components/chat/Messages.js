import { useRef, useEffect } from "react";
export default function Messages({ messagesOBJ, numMyMessages, myName }) {
    let localCount = 0;

    // https://stackoverflow.com/a/52266212
    const newMessages = useRef(null);
    const scrollToBottom = () => {
        newMessages.current?.scrollIntoView({ behavior: "smooth" });
    };

    // when messagesOBJ changes
    useEffect(() => {
        scrollToBottom();
    }, [messagesOBJ]);

    return (
        <div className={"z-0 mb-10 mt-12 subpixel-antialiased break-words"}>
            {messagesOBJ.map((singleMessage, index) => {
                // deconstruct single message in whole OBJ

                const {
                    name,
                    messageText,
                    currentTime,
                    joined,
                    left,
                    isSelf,
                    color,
                } = singleMessage;

                // new user join
                if (joined && name !== myName) {
                    return (
                        <div
                            key={index}
                            className="flex break-words justify-center py-0.5 mx-16 my-0.5 text-sm text-white dark:text-gray-300 bg-green-400  dark:bg-green-700 rounded-lg shadow-sm"
                        >
                            <p className="font-bold">
                                {name}{" "}
                                <span className="font-normal">has joined</span>
                            </p>
                        </div>
                    );
                    // user left
                } else if (left) {
                    return (
                        <div
                            key={index}
                            className="flex break-words justify-center py-0.5 mx-16 my-0.5 text-sm font-bold text-white dark:text-gray-300 bg-red-500  dark:bg-red-700  rounded-lg shadow-sm"
                        >
                            <p className="font-bold">{name}</p>
                            <p className="font-normal ">
                                &nbsp; has disconnected
                            </p>
                        </div>
                    );
                } else if (isSelf) {
                    localCount++;
                    // If self or other user message

                    if (numMyMessages === localCount) {
                        return (
                            <div key={index}>
                                <div className="flex justify-end mt-1 mb-1.5">
                                    <div className="pt-1 ml-32 bg-blue-300 rounded-lg shadow-md dark:bg-blue-500">
                                        <p className="px-2 -mb-3.5 break-words font-sans  dark:text-gray-200 text-sm">
                                            {messageText}
                                        </p>

                                        <p className="flex justify-end -mb-2 font-bold text-blue-300 rounded-xl dark:text-blue-500 opacity-90">
                                            &lt;
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-end -mt-1 text-black dark:text-white">
                                    <svg
                                        id="sent-successfully-svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        width="15px"
                                        height="15px"
                                        className="animate-customMyMessagePulse"
                                        // Allow Animation
                                        onLoad={() => {
                                            const elem =
                                                document.getElementById(
                                                    "sent-successfully-svg"
                                                ).classList;

                                            setTimeout(function () {
                                                elem.remove(
                                                    "animate-customMyMessagePulse"
                                                );
                                            }, 1500);
                                        }}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        );
                    } else if (messageText !== null) {
                        return (
                            <div className="flex justify-end my-1" key={index}>
                                <div className="pt-1 ml-32 bg-blue-300 rounded-lg shadow-md dark:text-gray-200 dark:bg-blue-500">
                                    <p className="px-2 -mb-3.5 font-sans text-sm ">
                                        {messageText}
                                    </p>

                                    <p className="flex justify-end -mb-2 font-bold text-blue-300 rounded-xl dark:text-blue-500 opacity-90">
                                        &lt;
                                    </p>
                                </div>
                            </div>
                        );
                    } else {
                        return <div key={index}></div>;
                    }
                } else if (messageText !== null) {
                    return (
                        <div className="flex justify-start my-1" key={index}>
                            <div className="pt-0.5 pl-2 pr-1.5 mr-32 font-sans bg-gray-200 rounded-lg shadow-sm dark:shadow-lg dark:bg-gray-700 opacity-90">
                                <p className={color + " text-xs font-semibold"}>
                                    {name}
                                </p>
                                <p className="-mt-0.5 text-sm leading-tight dark:text-gray-200">
                                    {messageText}
                                </p>
                                <p className="flex justify-end -mb-4 opacity-50 text-2xs dark:text-gray-400 ">
                                    {currentTime}
                                </p>

                                <p className="-mb-2 -ml-2 font-bold text-gray-200 rounded-xl dark:text-gray-700 opacity-90">
                                    &gt;
                                </p>
                            </div>
                        </div>
                    );
                } else {
                    return <div key={index}></div>;
                }
            })}
            {/* Dummy div to scroll to */}
            <div ref={newMessages}></div>
        </div>
    );
}
