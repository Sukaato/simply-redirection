let sysLang = navigator.language;
let redirect = redirection();
redirect.setDefaultLanguage("fr-FR");
redirect.setSupportedLanguages(["fr-FR", "en-US"]);
redirect.setRedirection(sysLang)