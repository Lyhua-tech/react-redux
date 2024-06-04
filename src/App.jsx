import { useState } from 'react';
import React from 'react'
import ApiPic from './assets/ApiPic';
import ImageShow from './assets/ImageShow';
import SearchBar from './assets/SearchBar';
import searchImages from './api';
import './index.css';



const App = () => {
  const [images, setImages] = useState([])
  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  }
  return (
    <div className='background'>
      {/* <AnimalReact getAnimal={getRandomAnimal}/> */}
      <SearchBar onSubmit={handleSubmit} />
      <ApiPic images={images}/>
    </div>
  )
}

export default App