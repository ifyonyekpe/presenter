import Remarkable from 'remarkable'
const hljs = require('highlight.js')

const configure = aurelia => {
  let md = new Remarkable('full', settings)

  aurelia.container.registerInstance(Remarkable, md)
}

const settings = {
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (err) {}
    }

    console.log(hljs.highlightAuto(str).value)
    try {
      return hljs.highlightAuto(str).value
    } catch (err) {}

    return '' // use external default escaping
  },
}

const Markdown = { configure }

export { Markdown }
