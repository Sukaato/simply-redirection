/**
 * @name Redirection
 * @desc A Redirection object can be instanciated with an array of strings as first parameter or
 * @desc with languages as parameters (spread argument)
 * @desc First language will be selected as default language
 * @example
 * new Redirection([ 'fr-FR', 'en-US' ]).go('hello.html')
 * or
 * new Redirection('fr-FR', 'en-US').go('hello.html')
 */
class Redirection { // eslint-disable-line no-unused-vars
  /**
   * @constructor
   */
  constructor () {
    this.pages = arguments.length === 1 && Array.isArray(arguments[0]) ? arguments[0] : Array.from(arguments)
    if (!this.pages.length) {
      throw new Error('RedirectionError: There should be at least one language in the constructor call')
    }
    if (!this.pages.every(lang => /^([a-z]{2}-[A-Z]{2})$/.test(lang))) {
      throw new Error('RedirectionError: All languages should have the following format: aa-AA with aa, the language and AA, the region')
    }
    this.lang2page = {}
    this.pages.forEach(page => {
      const lang = page.split('-')[0]
      if (!this.lang2page[lang]) {
        this.lang2page[lang] = page
      }
    })
  }

  /**
   * @method go
   * @param  {String} [url] Optional sub URL - real URL will be 'folderLanguage/url'
   */
  go (url, cooldown) {
    const userlangs = window.navigator.languages || window.navigator.language || window.navigator.userLanguage
    for (const lang of Array.isArray(userlangs) ? userlangs : [ userlangs ]) {
      if (this.lang2page[lang]) return this._redirect(this.lang2page[lang], url, cooldown) // 'aa'-style language -> faster so checked first
      if (this.pages.includes(lang)) return this._redirect(lang, url, cooldown) // 'aa-AA'-style language -> slower
    }
    return this._redirect(this.pages[0], url, cooldown) // default
  }

  /**
   * @private _redirect
   * @param  {String} lang  Language folder
   * @param  {String} [url] Optional sub URL
   */
  _redirect (lang, url, cooldown) {
    setTimeout(function () {
      window.location.href = `${lang}/${url || ''}`
    }, (cooldown || 0) * 1000)
  }
}
