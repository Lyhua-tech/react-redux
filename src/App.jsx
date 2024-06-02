import React from 'react'
import AnimalReact from './assets/AnimalReact'
import './index.css';


function getRandomAnimal () {
  const animalArr = ['cow', 'bird', 'horse', 'cat', 'giraffe'];
  return animalArr[Math.floor(Math.random() * animalArr.length)]
}
const App = () => {
  
  return (
    <div>
      <AnimalReact getAnimal={getRandomAnimal}/>
    </div>
  )
}

export default App