import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import { LanguageProvider } from "../../contexts/languageContext";

it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
        <LanguageProvider>
            <Home />
        </LanguageProvider>,
        div
    );
});
