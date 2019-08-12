const redirection = function() {
    let supportedLang = ["fr-FR"];
    let defaultLang = "fr-FR";

    /**
     * @description Little verification for mozilla because navigitor.language returns just "fr" and not "fr-FR", but for you it's same things.
     * * It's same if your navigator is in english but i'm a baguette developpeur.
     * @returns String
     */
    function getLanguage() {
        return navigator.languages[0].length > navigator.languages[1].length ? navigator.languages[0] : navigator.languages[1]
    }

    /**
     * @description Returns a list of available languages from your browser
     * @returns String[]
     */
    function getLanguages() {
        return navigator.languages && navigator.languages
    }

    /**
     * @param {String} param
     * @description Set the default language of your website
     */
    function setDefaultLanguage(param) {
        defaultLang = param;
    }

    /**
     * @param {String} param
     * @description Set the default language of your website
     */
    function getDefaultLanguage() {
        return defaultLang;
    }

    /**
     * @param {String[]} param
     * @description List of supported languages you want for your web site
     */
    function setSupportedLanguages(param) {
        supportedLang = param;
    }

    /**
     * @description Get your supported language list
     * @returns String[]
     */
    function getSupportedLanguages() {
        return supportedLang
    }

    /**
     * @param {String} language 
     * @returns boolean
     */
    function isSupportedLang(language) {
        const isSupported = getSupportedLanguages().find(elt => {
            if (elt === language) {
                return true
            }
        }) || false;
        return isSupported ? true : false;
    }

    /**
     * @param {String} language 
     * @description do the redirection
     */
    function setRedirection(language) {
        let isSupported = isSupportedLang(language);
        let lang = isSupported ? language : defaultLang;

        const head = document.head;
        let meta = document.createElement('meta');
        meta.httpEquiv = 'refresh';
        meta.content = `0; url=./${lang}/index.html`;
        head.prepend(meta);
    }

    return {
        getLanguage, 
        getLanguages,
        setDefaultLanguage,
        getDefaultLanguage,
        setSupportedLanguages,
        getSupportedLanguages,
        setRedirection
    }
}