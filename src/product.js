import './style.css'
import { createNav } from './components/nav.js'
import { createProductHero, initProduct } from './sections/product-hero.js'

document.querySelector('#product-app').innerHTML = `
  ${createNav()}
  ${createProductHero()}
`

initProduct()
