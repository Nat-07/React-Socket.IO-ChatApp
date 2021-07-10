import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ChatMain from "./components/chat/chat";
import Login from "./components/login/login";
import AboutInfo from "./components/about/about";
import Error from "./components/errorPage/errorPage";
import { ThemeToggle } from "./components/darkMode";

export default function App() {
    const [isBase, setIsBase] = useState(true);
    return (
        <BrowserRouter>
            {/* Always top of page */}
            <div className="flex justify-end py-2 pr-3 dark: dark:bg-darkModeMain">
                <ThemeToggle isBase={isBase} setIsBase={setIsBase} />
            </div>
            <Switch>
                {/* main page */}
                <Route exact path="/" component={Login} />
                {/* chat-room */}
                <Route path="/chat" component={ChatMain} />
                {/* about page */}
                <Route path="/about" component={AboutInfo} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    );
}
