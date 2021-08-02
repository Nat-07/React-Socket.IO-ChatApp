import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import { ThemeToggle } from "../DarkMode";

export default function Login({ isBase, setIsBase }) {
    const [name, setName] = useState("");

    return (
        // root page
        <div className="overflow-hidden subpixel-antialiased dark:bg-black">
            <div className="flex justify-end pt-3 mr-4">
                <ThemeToggle isBase={isBase} setIsBase={setIsBase} />
            </div>

            <div className="flex min-h-screen ">
                <div className="relative w-11/12 m-auto text-center ">
                    <div className="py-3 mb-56 align-middle divide-y-2 rounded-lg shadow-lg dark:divide-gray-600 dark:divide-opacity-70 ring-2 dark:ring-opacity-0 dark:bg-gray-800 dark:shadow-2xl ring-gray-100">
                        <div className="mx-10 mb-3">
                            <h1 className="text-lg font-medium text-center text-gray-800 dark:text-gray-300">
                                The Chat-App
                            </h1>
                        </div>

                        <LoginForm name={name} setName={setName} />
                    </div>
                </div>

                {/* to about page */}
                <footer className="absolute inset-x-0 bottom-2 ">
                    <Link to={"/about"}>
                        <p className="font-light text-center text-blue-700 underline dark:text-gray-300">
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
                                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            About
                        </p>
                    </Link>
                </footer>
            </div>
        </div>
    );
}
