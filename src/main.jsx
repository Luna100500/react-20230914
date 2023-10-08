import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./pages/Main/main.component";

import "./index.css"

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <div className="root">
        <Main />
    </div>
);


