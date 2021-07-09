import { BrowserRouter, Route } from "react-router-dom";
import ChatMain from "./components/chat/chat";
import Login from "./components/login/login";
import { ThemeToggle } from "./components/darkMode";
import AboutInfo from "./components/about/about";

export default function App() {
    return (
        <BrowserRouter>
            <div className="flex justify-end py-3 dark: dark:bg-darkModeMain">
                <ThemeToggle />
            </div>
            {/* main page */}
            <Route exact path="/" component={Login} />
            {/* redirect to chat-room form main*/}
            <Route path="/chat" component={ChatMain} />
            {/* redirect to about page from main */}
            <Route path="/about" component={AboutInfo} />
        </BrowserRouter>
    );
}
