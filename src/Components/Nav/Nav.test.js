import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import { LanguageProvider } from "../../contexts/languageContext";

it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
        <LanguageProvider>
            <Nav />
        </LanguageProvider>,
        div
    );
});
