import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";

const App = () => {
    return (
        <div>
            <h1>Welcome to My Web Page</h1>
            <p>This is a brief introduction about myself.</p>
        </div>
    );
};

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
