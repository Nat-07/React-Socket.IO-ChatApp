import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./loginForm";

export default function Login() {
    const [name, setName] = useState("");

    return (
        // root page
        <main className="flex h-screen overflow-hidden subpixel-antialiased dark:bg-darkModeMain">
            <div className="flex justify-center m-auto ">
                <div className="py-3 mb-56 align-middle divide-y-2  w-11/12 rounded-lg shadow-lg dark:divide-divideLine dark:divide-opacity-70 ring-2 dark:ring-opacity-0 dark:bg-darkModeHeadFoot dark:shadow-2xl ring-gray-100 ≈">
                    <div className="mx-10 mb-3">
                        <h1 className="text-lg font-medium text-center text-gray-800 dark:text-white ">
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
                        About
                    </p>
                </Link>
            </footer>
        </main>
    );
}
