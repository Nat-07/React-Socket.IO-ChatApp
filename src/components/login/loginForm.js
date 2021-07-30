import { Link } from "react-router-dom";

export default function LoginForm({ name, setName }) {
    return (
        <form className="flex justify-center px-10 pt-3 ">
            {/* svg in input field */}
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25px"
                    height="25px"
                    viewBox="0 0 20 20"
                    className="absolute ml-3 transform -translate-y-1/2 pointer-events-none dark:text-white top-1/2 left-3"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
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
                            ? "px-2 py-1 mx-4 rounded-lg shadow-lg ring-1  ring-gray-100 dark:ring-gray-800 form-input border pl-10 dark:placeholder-gray-200 text-gray-600 dark:text-gray-200  focus:outline-none dark:bg-gray-600"
                            : "px-2 py-1 mx-4 opacity-70 rounded-lg shadow-lg ring-1  ring-gray-300 dark:ring-gray-800 form-input border pl-10  dark:placeholder-gray-200 text-gray-600 dark:text-gray-200 focus:outline-none dark:bg-gray-600"
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
