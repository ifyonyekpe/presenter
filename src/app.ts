import { inject } from 'aurelia-framework'
import Remarkable from 'remarkable'
import { SlideContents } from './slideContent/asyncAwait/index'
import { map, curry } from 'ramda'

@inject(Remarkable)
export class App {
  markdown: Remarkable
  slides: { text: string }[]
  currentIndex: number = 10
  constructor(markdown: Remarkable) {
    this.markdown = markdown
  }

  attached() {
    this.slides = map(c => {
      return {
        text: this.markdown.render(c.text),
      }
    }, SlideContents)

    document.addEventListener('keydown', this.keydownInput(this), false)
  }

  detached() {
    document.removeEventListener('keydown', this.keydownInput(this))
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--
    }
  }

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++
    }
  }

  keydownInput = curry((c, event) => {
    // Right
    if (event.keyCode == 39) c.next()

    // Left
    if (event.keyCode == 37) c.previous()
  })
}
