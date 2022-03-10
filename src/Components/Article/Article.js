import "./Article.css";
import translator from "../../utils/translator";
import { useLanguage } from "../../contexts/languageContext";

function Article({ article }) {
    const image = article.images.find(image => image.top_image === true);
    const { language } = useLanguage();
    const title =
        language === "mar" ? translator(article.title) : article.title;
    const body = language === "mar" ? translator(article.body) : article.body;

    return (
        <div className="article-view">
            <h2 className="article-title">{title}</h2>
            <img className="article-image" src={image.url}></img>
            <pre className="article-body-text">{body}</pre>
        </div>
    );
}

export default Article;
