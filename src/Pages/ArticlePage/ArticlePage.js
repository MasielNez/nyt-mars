import "./ArticlePage.css";
import Nav from "../../components/Nav";
import Article from "../../components/Article";

function ArticlePage({ article, goHome }) {
    return (
        <>
            <Nav goHome={goHome} />
            <Article article={article} />
        </>
    );
}

export default ArticlePage;
