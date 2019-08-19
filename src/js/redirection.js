/* global location */
/**
 * @name Redirection
 * @class
 * @desc A Redirection object can be instanciated with an array of strings as first parameter or
 * with languages as parameters (spread argument)
 * First language will be selected as default language
 */
class Redirection { // eslint-disable-line no-unused-vars
  /**
   * @constructor
   * @example
   * new Redirection([ 'fr-FR', 'en-US' ])
   * or
   * new Redirection('fr-FR', 'en-US')
   */
  constructor() {
    try {
      const regex = /^([a-z]{2}-[A-Z]{2})$/;
      this.availableLangs = arguments.length === 1 && Array.isArray(arguments[0]) ? arguments[0] : Array.from(arguments)
      if (!this.availableLangs.length) {
        throw new Error('RedirectionError: There should be at least one language in the constructor call')
      }

      if (!this.availableLangs.every(lang => regex.test(lang))) {
        throw new Error('RedirectionError: All languages should have the following format: aa-AA with aa, the language and AA, the region')
      }

      this.langsList = {}
      this.availableLangs.forEach(page => {
        const lang = page.split('-')[0]
        if (!this.langsList[lang]) {
          this.langsList[lang] = page
        }
      })
    } catch(err) {
      console.error(err);
    }
  }

  /**
   * @method go
   * @param {String} [url]      Optional URL - if the URL starts with 'http' or 'https' you will be redirected to that URL, 
   *                            otherwise you will be redirected to 'folderLanguage/url'
   * @param {Number} [cooldown] Optional timer cooldown before redirection (in seconds)
   * @example
   * redirection.go('index.html') // Redirecting to /lang/index.html
   * or
   * redirection.go('index.html', 2) // Redirecting to /lang/index.html after 2 seconds
   * or
   * redirection.go('https://github.com/Sukaato') // Redirecting to https://github/Sukaato
   * or
   * redirection.go('https://github.com/Sukaato' 2) // Redirecting to https://github/Sukaato after 2 seconds
   */
  go(url, cooldown) {
    if (url.startsWith('http')) {
      return this._redirect("", url, cooldown)
    }
    const userlangs = navigator.languages || navigator.language
    for (const lang of Array.isArray(userlangs) ? userlangs : [userlangs]) {
      if (this.langsList[lang]) return this._redirect(this.langsList[lang], url, cooldown) // 'aa'-style language -> faster so checked first
      if (this.availableLangs.includes(lang)) return this._redirect(lang, url, cooldown) // 'aa-AA'-style language -> slower
    }
    return this._redirect(this.availableLangs[0], url, cooldown) // default
  }

  /**
   * @private @method _redirect
   * @param {String} lang       Language folder
   * @param {String} [url]      Optional sub URL
   * @param {Number} [cooldown] Optional timer cooldown before redirection (in seconds)
   */
  _redirect(lang, url, cooldown) {
    setTimeout(() => {
      let redirect = lang ? lang.length !== 0 && `${location.href}/${lang}/${url || 'index.html'}` : url;
      location.replace(redirect)
    }, (cooldown || 0) * 1000)
  }
}