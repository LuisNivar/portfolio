import english from "./en.json";
import spanish from "./es.json";


enum LANGUAGES {
    ENGLISH = "en",
    SPANISH = "es"
}

export const getI18N = ({currentLocale = LANGUAGES.ENGLISH} : 
    { currentLocale : string | undefined } ) => {
    if(currentLocale === LANGUAGES.ENGLISH) return english;
    if(currentLocale === LANGUAGES.SPANISH) return spanish;
    return english;
}