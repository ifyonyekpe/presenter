import Remarkable from 'remarkable'
var hljs = require('highlight.js')

const configure = aurelia => {
  let md = new Remarkable('full', settings)

  aurelia.container.registerInstance(Remarkable, md)
}

const settings = {
  html: true,
  xhtmlOut: false,
  breaks: false,
  langPrefix: 'hljs language-',
  linkify: true,
  linkTarget: '',
  typographer: false,
  breaks: true,
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (__) {}

    return ''; 
  }
}

const Markdown = { configure }

export { Markdown }
