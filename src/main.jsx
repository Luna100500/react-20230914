import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./pages/Main/main.component";

import "./index.css"
import { ThemeProvider } from "./contexts/Theme";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <ThemeProvider>
            <div className="root">
                <Main />
            </div>
        </ThemeProvider>
    </React.StrictMode>
);


