import { useState } from 'react'
import React from 'react'

const AnimalReact = (props) => {
    const { getAnimal } = props
    const [randomAnimal, setRandomAnimal] = useState([])
    const handleClick = () => {
        const newAnimal = getAnimal()
        setRandomAnimal([...randomAnimal, newAnimal])
    }
  return (
    <div onClick={handleClick}>
        <button>Animal</button>
        <ul>
        {randomAnimal.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </div>
  )
}

export default AnimalReact