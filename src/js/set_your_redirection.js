(document.onloadend = () => {
    let redirect = redirection();
    redirect.setDefaultLanguage("fr-CA");
    redirect.setSupportedLanguages(["fr-FR", "en-US"]);
    redirect.setRedirection(redirect.getLanguage())
})()