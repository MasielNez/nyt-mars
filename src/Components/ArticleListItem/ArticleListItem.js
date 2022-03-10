import "./ArticleListItem.css";
import translator from "../../utils/translator";
import { useLanguage } from "../../contexts/languageContext";

function ArticleListItem(props) {
    const { language } = useLanguage();
    const title = language === "mar" ? translator(props.title) : props.title;

    return (
        <div className="article-list-item" onClick={props.onClick}>
            <div className="article-list-item-image-container">
                <img
                    className="article-list-item-image"
                    src={props.imgUrl}
                ></img>
            </div>
            <h3 className="article-list-item-title">{title}</h3>
        </div>
    );
}

export default ArticleListItem;
