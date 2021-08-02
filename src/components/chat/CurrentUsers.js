// number of online users
function CurrentUsersData({ numCurrentUsers, whoOnline, showNames }) {
    return (
        <div className="grid col-span-1 pt-1 pl-2 justify-self-center h-min ">
            <button className="focus:outline-none" onClick={() => whoOnline()}>
                <div className="inline-flex">
                    {/* user or collapse svg */}
                    {showNames ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 animate-bounce"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                    )}
                    {showNames ? (
                        <></>
                    ) : (
                        <p className="font-mono subpixel-antialiased">
                            :{numCurrentUsers}
                        </p>
                    )}
                </div>
            </button>
        </div>
    );
}

// visual list of online people
function DisplayOnline({ onlineNames }) {
    return (
        <div className="w-full">
            <div
                id="temp"
                className="pt-1 mx-5 my-2 rounded-md ring-2 ring-gray-300 filter animate-fade-in-down"
            >
                <div className="flex justify-start overflow-x-auto">
                    {onlineNames.map((name, index) => {
                        return (
                            <div key={index} className="px-2 mx-2 mt-1">
                                <div className="flex justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>

                                <p
                                    className="text-sm text-center"
                                    htmlFor="icon"
                                >
                                    {/* Truncate name if long */}
                                    {name.length > 10
                                        ? name.substring(0, 10) + "..."
                                        : name}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export { CurrentUsersData, DisplayOnline };
