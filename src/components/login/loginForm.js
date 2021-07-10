import { Link } from "react-router-dom";

export default function LoginForm({ name, setName }) {
    return (
        <form className="flex justify-center px-10 pt-3 ">
            {name ? (
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Username"
                    className="px-2 py-1 mx-4 rounded-lg shadow-lg ring-2 ring-gray-100"
                ></input>
            ) : (
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Username"
                    className="px-2 py-1 mx-4 rounded-lg shadow-lg ring-2 ring-gray-300"
                ></input>
            )}

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
                {name ? (
                    <button
                        // type submit allows for enter key to work

                        type="submit"
                        className="px-2 py-1 text-gray-100 bg-green-500 rounded-md ring-offset-green-200 dark:ring-offset-green-900 ring-offset-1 animate-pulse dark:bg-green-700 dark:ring-green-500 ring-2 ring-opacity-40 ring-green-400"
                    >
                        Join
                    </button>
                ) : (
                    <button
                        // type submit allows for enter key to work
                        disabled
                        type="submit"
                        className="px-2 py-1 text-gray-100 bg-red-500 rounded-md ring-offset-red-200 dark:ring-offset-red-900 ring-offset-1 dark:bg-red-700 dark:ring-red-500 ring-2 ring-opacity-40 ring-red-400"
                    >
                        Join
                    </button>
                )}
            </Link>
        </form>
    );
}
