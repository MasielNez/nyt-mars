import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LanguageProvider } from "./contexts/languageContext";

it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
        <LanguageProvider>
            <App />
        </LanguageProvider>,
        div
    );
});
