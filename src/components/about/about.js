import { ThemeToggle } from "../darkMode";

export default function AboutInfo({ isBase, setIsBase }) {
    return (
        <div className="min-h-screen pt-4 pb-5 subpixel-antialiased dark:bg-darkModeMain">
            <div className="px-2 pb-1 mx-4 space-y-3 divide-y rounded-lg shadow-lg dark:text-gray-200 bg-gray-50 dark:bg-darkModeHeadFoot ">
                <div className="grid grid-cols-3">
                    <div className="col-span-1 "></div>
                    <p className="col-span-1 py-2 font-sans text-2xl font-medium justify-self-center dark:text-white">
                        About
                    </p>
                    <div className="col-span-1 pt-2 pr-3 mb-2 justify-self-end">
                        <ThemeToggle isBase={isBase} setIsBase={setIsBase} />
                    </div>
                </div>
                <div>
                    <div className="flex justify-center pt-1">
                        <p className="font-semibold dark:text-white">
                            What about my data?&nbsp;
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
                        <p className="font-semibold dark:text-white">
                            How does it work?
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
                        <p className="font-semibold dark:text-white">
                            How was it built?
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
                        <p className="font-semibold dark:text-white">
                            Where is this hosted?
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
                            What if I want to recreate this?
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
                        <p className="font-medium dark:text-white">Info</p>
                    </div>
                    <div className="flex justify-between ml-10 mr-14">
                        <p>Version: 1.0.0</p>
                        <p>
                            Author:{" "}
                            <a
                                className="text-blue-700 underline dark:text-blue-400"
                                href="https://github.com/Nat-07"
                            >
                                Nat
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
