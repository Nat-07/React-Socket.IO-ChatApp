import { Link } from "react-router-dom";
import { ErrorSVG } from "./svg";
import { ThemeToggle } from "../darkMode";

export default function Error({ isBase, setIsBase }) {
    return (
        <div>
            <div className="flex min-h-screen dark:bg-darkModeMain">
                <div className="justify-center py-2 mt-10">
                    <div className="px-2 pt-1 mx-4 rounded-lg shadow-lg bg-gray-50 dark:bg-darkModeHeadFoot">
                        <div className="flex justify-end">
                            <ThemeToggle
                                isBase={isBase}
                                setIsBase={setIsBase}
                            />
                        </div>
                        <div className="flex justify-center subpixel-antialiased dark:text-gray-200">
                            <ErrorSVG />
                            <p className="ml-1 text-lg font-bold text-red-600 dark:text-red-500 dark:text-opacity-85">
                                Oops! <br />
                                <p className="ml-1 text-sm font-bold text-red-600 dark:text-red-500 dark:text-opacity-85">
                                    Looks like it went haywire
                                </p>
                            </p>
                        </div>
                        <div className="py-3 text-center dark:text-white">
                            <p>
                                This is generally caused by a broken or
                                non-existent url being entered. If you believe
                                it is another error please make an issue{" "}
                                <a
                                    className="text-blue-700 underline dark:text-blue-400"
                                    href="https://github.com/Nat-07/React-Socket.IO-ChatApp/issues"
                                >
                                    here
                                </a>
                                .
                            </p>
                        </div>
                        <div className="flex justify-center py-2 animate-pulse">
                            {/* Link to login */}
                            <Link
                                to={"/"}
                                className="px-2 font-medium text-white bg-blue-500 rounded-md dark:bg-blue-400 "
                            >
                                Return to safety
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
