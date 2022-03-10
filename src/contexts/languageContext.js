import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

function LanguageProvider({ children }) {
    const currentLanguage = localStorage.getItem("language");
    const [language, setLanguage] = useState(
        currentLanguage ? currentLanguage : "en"
    );
    const value = { language, setLanguage };
    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

function useLanguage() {
    const context = useContext(LanguageContext);
    return context;
}

export { LanguageProvider, useLanguage };
