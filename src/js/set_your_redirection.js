(document.onloadend = () => {
    let redirect = new redirection();
    redirect.setDefaultLanguage("fr-FR");
    redirect.setSupportedLanguages(["fr-FR", "en-US"]);
    redirect.setRedirection(redirect.getLanguage())
})()