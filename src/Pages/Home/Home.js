import "./Home.css";
import { useEffect, useState } from "react";
import ArticleList from "../../components/ArticleList";
import Nav from "../../components/Nav";
import Loader from "../../components/Loader";

function Home(props) {
    const [articles, setArticles] = useState(null);
    useEffect(() => {
        fetch("https://s1.nyt.com/ios-newsreader/candidates/test/articles.json")
            .then(response => response.json())
            .then(data => setArticles(data));
    }, []);

    if (articles) {
        return (
            <div>
                <Nav />
                <ArticleList
                    articles={articles}
                    showArticle={props.showArticle}
                    translate
                />
            </div>
        );
    }

    return (
        <div>
            <Nav />
            <div className="loader-container">
                <Loader />
            </div>
        </div>
    );
}

export default Home;
