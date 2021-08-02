import { ThemeToggle } from "../DarkMode";
import HomeButton from "../HomeButton";

export default function AboutInfo({ isBase, setIsBase }) {
    return (
        <div className="min-h-screen pt-4 pb-5 subpixel-antialiased dark:bg-black">
            <div className="px-2 pb-1 mx-4 space-y-3 divide-y rounded-lg shadow-lg dark:text-gray-200 bg-gray-50 dark:bg-gray-800 ">
                <div className="grid grid-cols-3">
                    <div className="col-span-1 pt-2 pl-3 mb-2 justify-self-start">
                        <HomeButton />
                    </div>

                    <p className="col-span-1 py-2 font-sans text-2xl font-medium justify-self-center dark:text-white">
                        About
                    </p>
                    <div className="col-span-1 pt-2 pr-3 mb-2 justify-self-end">
                        <ThemeToggle isBase={isBase} setIsBase={setIsBase} />
                    </div>
                </div>
                <div>
                    <div className="flex justify-center pt-1">
                        <p className=" dark:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="18px"
                                width="18px"
                                viewBox="0 0 20 20"
                                className="inline-block stroke-2"
                                fill="currentColor"
                            >
                                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                            </svg>{" "}
                            <span className="font-medium">
                                What about my data?
                            </span>
                        </p>
                    </div>
                    <p>
                        The Chat-App purposely stores no data about you after
                        you leave the site.{" "}
                        <span className="font-medium">Only</span> while you are
                        on the site do we identfy you with a unique socket
                        identification value to allow us to keep track of who is
                        online.
                    </p>
                </div>

                <div>
                    <div className="flex justify-center pt-1 ">
                        <p className=" dark:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="18px"
                                width="18px"
                                viewBox="0 0 20 20"
                                className="inline-block stroke-2"
                                fill="currentColor"
                            >
                                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                            </svg>{" "}
                            <span className="font-medium">
                                How does it work?
                            </span>
                        </p>
                    </div>
                    <p>
                        This web application works by transferring small web
                        packets between you and the server. Whenever you send a
                        message, join a chat room, leave a chat room, packets of
                        data are sent to the server to then be distributed to
                        everyone online. In addition, there are periodic pings
                        being sent to test if you are indeed connected.
                    </p>
                </div>

                <div>
                    <div className="flex justify-center pt-1">
                        <p className="dark:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="18px"
                                width="18px"
                                viewBox="0 0 20 20"
                                className="inline-block stroke-2"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                    clipRule="evenodd"
                                />
                            </svg>{" "}
                            <span className="font-medium">
                                How was it built?
                            </span>
                        </p>
                    </div>
                    <p>
                        The Chat-App{" "}
                        <span className="underline">front-end</span> was built
                        off of ReactJS, maintained by facebook, socket.io which
                        handles your continuous connection to the server, and
                        tailwindcss which allows for css directly inside the
                        html file. The{" "}
                        <span className="underline">back-end</span> runs
                        expressjs and socket.io.
                    </p>
                </div>
                <div>
                    <div className="flex justify-center pt-1">
                        <p className=" dark:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="18px"
                                width="18px"
                                viewBox="0 0 20 20"
                                className="inline-block stroke-2"
                                fill="currentColor"
                            >
                                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                            </svg>{" "}
                            <span className="font-medium">
                                Where is this hosted?
                            </span>
                        </p>
                    </div>
                    <p>
                        This instance of The Chat-App is hosted on Heroku where
                        the Nodejs server sends all clients a full html file of
                        all pages on this site.
                    </p>
                </div>
                <div>
                    <div className="flex justify-center pt-1 ">
                        <p className="font-semibold dark:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="18px"
                                width="18px"
                                viewBox="0 0 20 20"
                                className="inline-block stroke-2"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                    clipRule="evenodd"
                                />
                            </svg>{" "}
                            <span className="font-medium">
                                How do I run this?
                            </span>
                        </p>
                    </div>
                    <p>
                        The source code as well as instructions to, setup &amp;
                        run, build, and deploy can be found here,{" "}
                        <span className="animate-pulse">
                            <a
                                className="text-blue-700 underline dark:text-blue-400"
                                href="https://github.com/Nat-07/React-Socket.IO-ChatApp"
                            >
                                Source Code
                            </a>
                        </span>
                        .
                    </p>
                </div>
                <div>
                    <div className="flex justify-center pt-1">
                        <p className=" dark:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="18px"
                                width="18px"
                                viewBox="0 0 20 20"
                                className="inline-block"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z"
                                    clipRule="evenodd"
                                />
                            </svg>{" "}
                            <span className="font-medium"> Info</span>
                        </p>
                    </div>
                    <div className="flex justify-between ml-10 mr-14">
                        <p>Version: 1.1.0</p>
                        <p>
                            Author:{" "}
                            <a
                                className="text-blue-700 underline dark:text-blue-400"
                                href="https://github.com/Nat-07"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="18px"
                                    width="18px"
                                    viewBox="0 0 20 20"
                                    className="inline-block"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Nat
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
