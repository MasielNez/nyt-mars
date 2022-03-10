import React from "react";
import ReactDOM from "react-dom";
import Loader from "./Loader";
import { LanguageProvider } from "../../contexts/languageContext";

it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
        <LanguageProvider>
            <Loader />
        </LanguageProvider>,
        div
    );
});
