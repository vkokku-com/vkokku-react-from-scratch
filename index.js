import React from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App message="This is a simple react app started from scratch." />
    </React.StrictMode>
);
