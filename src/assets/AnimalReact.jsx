import React, { useState } from 'react';
import heart from '../svg/heart.svg';
import '../index.css';

const AnimalReact = ({ getAnimal }) => {
  const [randomAnimal, setRandomAnimal] = useState([]);
  const [scales, setScales] = useState({}); // State to manage the scale of each heart

  const handleAddAnimal = () => {
    const newAnimal = getAnimal();
    setRandomAnimal([...randomAnimal, newAnimal]);
    setScales((prevScales) => ({
      ...prevScales,
      [newAnimal]: 0 // Initialize scale for new animal
    }));
  };

  const handleScale = (animal) => {
    setScales((prevScales) => ({
      ...prevScales,
      [animal]: prevScales[animal] + 1 // Increment scale for the specific animal
    }));
  };

  return (
    <div>
      <button onClick={handleAddAnimal} className='btnAnimal'>Animal</button>
      <div className="cardContainer">
        {randomAnimal.map((animal, index) => (
          <div key={index} onClick={() => handleScale(animal)} className="cardBox">
            <img src={animal} alt="" className='w-full'/>
            <img
              className='heartLogo'
              src={heart}
              alt=""
              style={{ width: `${10 + 10 * (scales[animal] || 0)}px` }} // Scale specific to the animal
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalReact;
