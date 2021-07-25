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
        <div className={"z-0 mb-10 mt-12"}>
            {messagesOBJ.map((singleMessage, index) => {
                // deconstruct single message in whole OBJ
                const { name, messageText, currentTime, joined, left, isSelf } =
                    singleMessage;
                // new user join

                if (joined) {
                    return (
                        <div
                            key={index}
                            className="flex break-words mx-3 justify-center px-2 py-1 my-0.5 text-sm text-white bg-green-400 rounded-lg shadow-sm"
                        >
                            {name === myName ? (
                                <p className="font-bold">Successfully joined</p>
                            ) : (
                                <p className="font-bold">
                                    {name}{" "}
                                    <span className="font-sans subpixel-antialiased font-normal">
                                        has joined
                                    </span>
                                </p>
                            )}
                        </div>
                    );
                    // user left
                } else if (left) {
                    return (
                        <div
                            key={index}
                            className="flex break-words mx-3  justify-center py-1 my-0.5 text-sm font-bold text-white bg-red-500  rounded-lg shadow-sm"
                        >
                            <p className="font-bold">{name}</p>
                            <p className="font-sans subpixel-antialiased font-normal">
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
                                <div className="flex justify-end">
                                    <div>
                                        <p className="px-2 break-words font-sans subpixel-antialiased ml-32 py-1.5 p-2 my-1 text-sm bg-blue-300 rounded-lg shadow-md dark:bg-blue-400">
                                            {messageText}
                                        </p>

                                        <p className="flex justify-end -mt-5 subpixel-antialiased font-bold text-blue-300 dark:text-blue-400">
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
                    } else {
                        return (
                            <div key={index}>
                                <div className="flex justify-end">
                                    <div>
                                        <p className="px-2 break-words font-sans subpixel-antialiased ml-32 py-1.5 p-2 my-1 text-sm bg-blue-300 rounded-lg shadow-md dark:bg-blue-400">
                                            {messageText}
                                        </p>

                                        <p className="flex justify-end -mt-5 subpixel-antialiased font-bold text-blue-300 dark:text-blue-400">
                                            &lt;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                } else {
                    return (
                        <div className="flex justify-start" key={index}>
                            <div>
                                <p className="p-2 my-1 mr-32 font-sans text-sm subpixel-antialiased break-words bg-gray-200 rounded-lg shadow-sm dark:shadow-lg dark:bg-gray-300 ">{`${currentTime}: ${name}: ${messageText}`}</p>
                                <p className="flex justify-start -mt-5 subpixel-antialiased font-bold text-gray-200 dark:text-gray-300">
                                    &gt;
                                </p>
                            </div>
                        </div>
                    );
                }
            })}
            {/* Dummy div to scroll to */}
            <div ref={newMessages}></div>
        </div>
    );
}
