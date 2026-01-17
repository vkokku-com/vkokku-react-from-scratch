import React from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";

const App = () => {
    return (
        <div>
            <h1>Welcome to My React App</h1>
            <p>This is a simple react app started from scratch.</p>
        </div>
    );
};

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
