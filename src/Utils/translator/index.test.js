import translator from "./index";

test("only words bigger than 3 chars are translated", () => {
    const text =
        "Today I ate pizza and have some Coca-Cola for dinner in a HVC";
    const translatedText =
        "Boinga I ate boinga and boinga boinga Boinga for boinga in a HVC";
    expect(translator(text)).toEqual(translatedText);
});

test("numbers are ignored if not within a word", () => {
    const text =
        "I got $15,000 d0llars selling gam3s in 1000 days. That means I made 15 dollars per day.";
    const translatedText =
        "I got $15,000 boinga boinga boinga in 1000 boinga. Boinga boinga I boinga 15 boinga per day.";
    expect(translator(text)).toEqual(translatedText);
});

test("is case sensitive", () => {
    const text = "lowercase and UpperCase and ALL CASE";
    const translatedText = "boinga and Boinga and ALL BOINGA";
    expect(translator(text)).toEqual(translatedText);
});

test("is puntuation within words being ignored", () => {
    const text = `We'll enjoy going to Funko's new "theme" park, right?\n\nDon't you dare to say no! 'Cause it ain't ma problem bro'`;
    const translatedText = `Boinga boinga boinga to Boinga new "boinga" boinga, boinga?\n\nBoinga you boinga to say no! 'Boinga it boinga ma boinga bro'`;
    expect(translator(text)).toEqual(translatedText);
});
