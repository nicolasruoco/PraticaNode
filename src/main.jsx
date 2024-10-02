import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Section from './Components/Section/Section'
import dogfood from './assets/DogFood.png'
import biscrok from './assets/Biscrok.png'

const products = [
  {
    "title": "Drools | 3KG",
    "description": "Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food",
    "image": dogfood
  },
  {
    "title": "Drools | 3KG",
    "description": "Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food",
    "image": dogfood
  },
  {
    "title": "Drools | 3KG",
    "description": "Adult chicken and egg Egg, Chicken 3 kg Dry Adult Dog Food",
    "image": dogfood
  }
]

const products2 = [
  {
    "title": "Biscork Biscuits",
    "description": "Adult chicken and egg Egg, Chicken  Dry Adult Dog Food",
    "image": biscrok
  },
  {
    "title": "Biscork Biscuits",
    "description": "Adult chicken and egg Egg, Chicken  Dry Adult Dog Food",
    "image": biscrok
  },
  {
    "title": "Biscork Biscuits",
    "description": "Adult chicken and egg Egg, Chicken  Dry Adult Dog Food",
    "image": biscrok
  }
]

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Section title="Dog Food" products={products} color='#DA323D'/>
    <Section title="Nutrients" products={products2} color='#FDB215'/>

  </StrictMode>,
)
