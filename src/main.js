import './style.css'
import { createNav } from './components/nav.js'
import { createHero } from './sections/hero.js'
import { createBenefits } from './sections/benefits.js'
import { createWhy } from './sections/why.js'
import { createFounder } from './sections/founder.js'
import { createFaq, initFaq } from './sections/faq.js'
import { createCta } from './sections/cta.js'

document.querySelector('#app').innerHTML = `
  ${createNav()}
  ${createHero()}
  ${createBenefits()}
  ${createWhy()}
  ${createFounder()}
  ${createFaq()}
  ${createCta()}
`

initFaq()
