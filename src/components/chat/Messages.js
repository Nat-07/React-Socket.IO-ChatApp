export default function Messages({ messagesOBJ }) {
    return (
        <div className="mb-10 ">
            {messagesOBJ.map((singleMessage, index) => {
                // deconstruct single message in whole OBJ
                const { name, messageText, currentTime, joined, left, isSelf } =
                    singleMessage;
                // new user join
                if (joined) {
                    return (
                        <div
                            key={index}
                            className="flex break-words mx-3 justify-center px-2 py-1 my-0.5 text-sm text-white bg-green-400 opacity-90 rounded-lg shadow-sm"
                        >
                            <p className="font-bold">{name}</p>
                            <p className="font-sans subpixel-antialiased font-normal">
                                &nbsp;has joined
                            </p>
                        </div>
                    );
                    // user left
                } else if (left) {
                    return (
                        <div
                            key={index}
                            className="flex break-words mx-3  justify-center py-1 my-0.5 text-sm font-bold text-white bg-red-500 opacity-80 rounded-lg shadow-sm"
                        >
                            <p className="font-bold">{name}</p>
                            <p className="font-sans subpixel-antialiased font-normal">
                                &nbsp;has disconnected
                            </p>
                        </div>
                    );
                } else {
                    // If self or other user message
                    return isSelf ? (
                        <div className="flex justify-end" key={index}>
                            <div>
                                <p className="px-2 break-words font-sans subpixel-antialiased ml-32 py-1.5 p-2 my-1 text-sm bg-blue-300 rounded-lg shadow-md dark:bg-blue-400">
                                    {messageText}
                                </p>

                                <p className="flex justify-end -mt-5 subpixel-antialiased font-bold text-blue-300 dark:text-blue-400">
                                    &lt;
                                </p>
                            </div>
                        </div>
                    ) : (
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
        </div>
    );
}
