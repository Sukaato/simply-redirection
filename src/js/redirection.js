/**
 * @class @name Redirection
 * @desc A Redirection object can be instanciated with an array of strings as first parameter or
 * with languages as parameters (spread argument)
 * First language will be selected as default language
 * @author https://github.com/Sukaato
 */
class Redirection {
  /**
   * @constructor
   * @desc For examples, follow this link: https: //github.com/Sukaato/auto-redirection and look at the README file
   */
  constructor() {
    try {
      const LangFormat = /^([a-z]{2}-[A-Z]{2})$/
      this.userlangs = [navigator.language] || navigator.languages
      this.availableLangs = arguments.length === 1 && Array.isArray(arguments[0]) ? arguments[0] : Array.from(arguments)

      if (!this.availableLangs.every(lang => LangFormat.test(lang))) {
        throw new Error('All languages should have the following format: aa-AA with aa for the language and AA for the region')
      }

      if (this.availableLangs.length) {
        this.langsList = {}
        this.availableLangs.forEach(lang => {
          const language = lang.split('-')[0]
          this.langsList[language] ? this.langsList[language].push(lang) : this.langsList[language] = [lang]
        })
      }
    } catch (error) {
      console.error(`%c[Redirection] ${error}`, "font-size: 1.7em");
    }
  }

  /**
   * @private @method __redirect
   * @param {[String, String, Number]} json contains the folder language, URL and cooldown (in seconds)
   */
  __redirect(json) {
    setTimeout(() => {
      json.lang ? location.href += `${json.lang}/${json.url}` : location.replace(json.url)
    }, (json.cooldown || 0) * 1000);
  }

  /**
   * @public @method redirect
   * @param {String} url        URL where you want to be redirected
   * @param {Number} [cooldown] Optional timer cooldown before redirection (in seconds)
   * @desc For examples, follow this link: https: //github.com/Sukaato/auto-redirection and look at the README file
   */
  redirect(url, cooldown) {
    if (url) {
      const UrlProtocol = /^http[s]?:\/\//
      if (UrlProtocol.test(url)) return this.__redirect({lang: null, url, cooldown})

      for (const lang of this.userlangs) {
        const language = lang.split('-')[0]
        const list = this.langsList[language]
        if (language === lang && list) return this.__redirect({lang: list[0], url, cooldown}) // 'aa'-style language -> faster
        if (list && list.includes(lang)) return this.__redirect({lang:list[list.indexOf(lang)], url, cooldown}) // 'aa-AA'-style language -> slower
      }
      if (this.availableLangs.length) return this.__redirect({lang: this.availableLangs[0], url, cooldown}) // Default
      console.error(`%c[Redirection] Error: You must define one or more available languages`, "font-size: 1.7em");
    } else {
      console.error(`%c[Redirection] Error: You must define a URL`, "font-size: 1.7em");
    }
  }
}