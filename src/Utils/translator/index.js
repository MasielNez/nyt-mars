function translateToMartian(text) {
    // This regular expression captures words following the translation rules in the README.md file
    const translationRegex = /[a-zA-Z]+'[a-zA-Z]+|(?:\\n)+(?:[A-Za-zÀ-ȕ]{1,3})\s|(?:\\n)*([A-Za-zÀ-ȕ-]{4,})|[a-zA-Z]*[\d][a-zA-Z]+|[a-zA-Z]+[\d][a-zA-Z]*/gm;
    const newText = text.replaceAll(translationRegex, translateWordToMartian);
    return newText;
}

function translateWordToMartian(word) {
    if (isAllUpper(word)) {
        return "BOINGA";
    }

    if (isUpperCase(word)) {
        return "Boinga";
    }

    return "boinga";
}

function isAllUpper(str) {
    return str === str.toUpperCase();
}

function isUpperCase(str) {
    return str[0] === str[0].toUpperCase();
}

export default translateToMartian;
