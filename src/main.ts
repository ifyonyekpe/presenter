import { Aurelia, PLATFORM } from 'aurelia-framework'
import { Markdown } from './configuration/index'

export function configure(aurelia: Aurelia) {
  aurelia.use.standardConfiguration().developmentLogging()

  aurelia.start().then(a => {
    aurelia.setRoot(PLATFORM.moduleName('app'))
    Markdown.configure(a)
  })
}
