import { Link } from "react-router-dom";

export default function LoginForm({ name, setName }) {
    return (
        <form className="flex justify-center px-10 pt-3 ">
            {/* svg in input field */}
            <div className="relative text-gray-400">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // name or no name entered
                    width={name ? "24px" : "25px"}
                    height={name ? "24px" : "25px"}
                    viewBox="0 0 20 20"
                    className="absolute ml-3 text-gray-600 transform -translate-y-1/2 pointer-events-none top-1/2 left-3"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Username"
                    className={
                        name
                            ? "px-2 py-1 mx-4 rounded-lg shadow-lg ring-2 ring-gray-100 form-input border pl-10  focus:outline-none "
                            : "px-2 py-1 mx-4 rounded-lg shadow-lg ring-2 ring-gray-300 form-input border pl-10 focus:outline-none"
                    }
                ></input>
            </div>

            <Link
                // check name is empty
                onClick={(e) => {
                    if (!name) {
                        e.preventDefault();
                    }
                }}
                // link to chat room with name
                to={`/chat?name=${name}`}
            >
                <button
                    // type submit allows for enter key to work
                    disabled={!name}
                    type="submit"
                    className="px-2 py-1 text-gray-100 bg-green-500 rounded-md shadow-sm dark:disabled:bg-red-400 disabled:bg-red-400 disabled:ring-offset-0 ring-offset-green-200 dark:ring-offset-green-900 ring-offset-1 disabled:animate-none animate-pulse dark:bg-green-700 dark:ring-green-500 ring-2 ring-opacity-40 disabled:ring-0 ring-green-400"
                >
                    Join
                </button>
            </Link>
        </form>
    );
}
