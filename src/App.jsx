import React from 'react'
import AnimalReact from './assets/AnimalReact'
import './index.css';


function getRandomAnimal () {
  const animalArr = ['cow', 'bird', 'horse', 'cat', 'gator', 'dog'];
  const animalImg = []
  let path = 'src/svg/'
  for (let animal of animalArr) {
    animal = animal.concat('.svg')
    animalImg.push(path.concat(animal));
  }
  return animalImg[Math.floor(Math.random() * animalImg.length)]
}
const App = () => {
  return (
    <div>
      <AnimalReact getAnimal={getRandomAnimal}/>
    </div>
  )
}

export default App