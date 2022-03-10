import "./App.css";
import { useState } from "react";
import ArticlePage from "./pages/ArticlePage";
import Home from "./pages/Home";

function App() {
    const [selectedArticle, setSelectedArticle] = useState(null);

    if (selectedArticle) {
        return (
            <ArticlePage
                article={selectedArticle}
                goHome={() => setSelectedArticle(null)}
                translate
            />
        );
    }

    return <Home showArticle={setSelectedArticle} />;
}

export default App;
