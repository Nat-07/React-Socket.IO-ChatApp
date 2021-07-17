import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ChatMain from "./components/chat/chat";
import Login from "./components/login/login";
import AboutInfo from "./components/about/about";
import Error from "./components/errorPage/errorPage";

export default function App() {
    const [isBase, setIsBase] = useState(true);

    return (
        <BrowserRouter>
            <div className="dark:bg-darkModeMain">
                {/* Always top of page */}

                <Switch>
                    {/* main page */}
                    <Route exact path="/">
                        <Login isBase={isBase} setIsBase={setIsBase} />
                    </Route>

                    {/* chat-room */}
                    <Route path="/chat">
                        <ChatMain isBase={isBase} setIsBase={setIsBase} />
                    </Route>

                    {/* about page */}
                    <Route exact path="/about">
                        <AboutInfo isBase={isBase} setIsBase={setIsBase} />
                    </Route>

                    <Route>
                        <Error isBase={isBase} setIsBase={setIsBase} />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
