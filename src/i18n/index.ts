import english from "./en.json";
import spanish from "./es.json";
import UsFlag from "./../flags/us.astro";
import SpainFlag from "./../flags/spain.astro"


export enum LANGUAGES {
    ENGLISH = "en",
    SPANISH = "es"
}

export const LOCALE: Record<
	string,
	{ code: string; name: string; flag: typeof SpainFlag }
> = {
	en: {
		code: 'en',
		name: 'English',
		flag: UsFlag,
	},
	es: {
		code: 'es',
		name: 'Español',
		flag: SpainFlag,
	},
};

export const getI18N = ({currentLocale = LANGUAGES.ENGLISH} : 
    { currentLocale : string | undefined } ) => {
    if(currentLocale === LANGUAGES.ENGLISH) return english;
    if(currentLocale === LANGUAGES.SPANISH) return spanish;
    return english;
}

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split('/');
	if (lang === LANGUAGES.SPANISH) return LANGUAGES.SPANISH;
	return LANGUAGES.ENGLISH;
}
