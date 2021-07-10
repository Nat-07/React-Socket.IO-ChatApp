import { Link } from "react-router-dom";
import { ErrorSVG, ArrowSVG } from "./svg";

export default function Error() {
    return (
        <div>
            <div className="min-h-screen dark:bg-darkModeMain">
                <div className="h-32 px-2 py-3 mx-4 space-y-3 rounded-lg shadow-lg bg-gray-50 dark:bg-darkModeHeadFoot">
                    <div className="flex justify-center py-4 subpixel-antialiased dark:text-gray-200">
                        <ErrorSVG />
                        <p>
                            <span className="ml-1 text-xl font-bold text-red-500 dark:text-red-600">
                                ERROR:
                            </span>{" "}
                            <span className="dark:text-white">
                                This page does not exist!
                            </span>
                        </p>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <div className="animate-bounce"></div>
                        <ArrowSVG />
                        {/* Link to login */}
                        <Link
                            to={"/"}
                            className="font-medium text-blue-700 underline dark:text-blue-400"
                        >
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
