import "./ArticleList.css";
import ArticleListItem from "../ArticleListItem";

function ArticleList(props) {
    return (
        <div className="article-list">
            {props.articles.map(article => {
                const image = article.images.find(
                    image => image.top_image === true
                );

                return (
                    <ArticleListItem
                        key={article.title}
                        title={article.title}
                        imgUrl={image ? image.url : null}
                        onClick={() => props.showArticle(article)}
                    />
                );
            })}
        </div>
    );
}

export default ArticleList;
