import "./Nav.css";
import Logo from "../../assets/logo.svg";
import UFO from "../../assets/ufo.png";
import { useLanguage } from "../../contexts/languageContext";

function Nav(props) {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = event => {
        if (event.target.checked) {
            localStorage.setItem("language", "mar");
            setLanguage("mar");
        } else {
            localStorage.setItem("language", "en");
            setLanguage("en");
        }
    };

    return (
        <div className="nav">
            <div className="nav-title-container" onClick={props.goHome}>
                <img className="nav-logo" src={Logo}></img>
                <h1 className="nav-title">NYT Mars</h1>
            </div>
            <div className="nav-translate">
                <label className="switch">
                    <input
                        type="checkbox"
                        onChange={toggleLanguage}
                        checked={language === "mar"}
                    />
                    <span className="slider round"></span>
                </label>
                <img className="nav-translate-icon" src={UFO} />
            </div>
        </div>
    );
}

export default Nav;
