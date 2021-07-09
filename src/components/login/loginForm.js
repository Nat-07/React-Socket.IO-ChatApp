import { Link } from "react-router-dom";

export default function LoginForm({ name, setName }) {
    return (
        <form className="flex justify-center px-10 pt-3 ">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Username"
                className="px-2 py-1 mx-4 rounded-lg shadow-lg s ring-2 ring-gray-100"
            ></input>

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
                    type="submit"
                    className="px-2 py-1 text-gray-100 bg-green-500 rounded-md ring-offset-green-200 dark:ring-offset-green-900 ring-offset-1 animate-pulse dark:bg-green-700 dark:ring-green-500 ring-2 ring-opacity-40 ring-green-400"
                >
                    Join
                </button>
            </Link>
        </form>
    );
}
