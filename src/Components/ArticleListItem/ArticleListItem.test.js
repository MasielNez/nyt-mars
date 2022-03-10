import React from "react";
import ReactDOM from "react-dom";
import ArticleListItem from "./ArticleListItem";
import { LanguageProvider } from "../../contexts/languageContext";

it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
        <LanguageProvider>
            <ArticleListItem />
        </LanguageProvider>,
        div
    );
});
