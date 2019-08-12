const redirection = function() {
    let supportedLang = ["fr-FR"];
    let defaultLang = "fr-FR";

    /**
     * @description Small check for mozilla because navigitor.language returns just "fr" and not "fr-FR", but it doesn't change anything for you.
     * * It's the same if your navigator is in english but I'm a baguette developper.
     * @returns String
     */
    function getLanguage() {
        return navigator.languages[0].length > navigator.languages[1].length ? navigator.languages[0] : navigator.languages[1];
    }

    /**
     * @description Returns the list of the available languages of your browser.
     * @returns String[]
     */
    function getLanguages() {
        return navigator.languages && navigator.languages;
    }

    /**
     * @param {String} param
     * @description Set the default language of your website.
     */
    function setDefaultLanguage(param) {
        defaultLang = param;
    }

    /**
     * @param {String} param
     * @description Get the default language of your website.
     */
    function getDefaultLanguage() {
        return defaultLang;
    }

    /**
     * @param {String[]} param
     * @description List of supported languages you want for your web site.
     */
    function setSupportedLanguages(param) {
        supportedLang = param;
    }

    /**
     * @description Get the list of supported languages.
     * @returns String[]
     */
    function getSupportedLanguages() {
        return supportedLang;
    }

    /**
     * @param {String} language
     * @returns Boolean.
     */
    function isSupportedLang(language) {
        const isSupported =
            getSupportedLanguages().find(elt => {
                if (elt === language) {
                    return true;
                }
            }) || false;
        return isSupported ? true : false;
    }

    /**
     * @param {String} language
     * @description Do the redirection.
     */
    function setRedirection(language) {
        let isSupported = isSupportedLang(language);
        let lang = isSupported ? language : defaultLang;

        const head = document.head;
        let meta = document.createElement("meta");
        meta.httpEquiv = "refresh";
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
    };
};
