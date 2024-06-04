import { useState } from 'react'
import React from 'react'
import '../index.css'

const SearchBar = ({ onSubmit }) => {
  const [term , setTerm] = useState('')
  const handleClick = (event) => {
    event.preventDefault()  //prevent the form behavior from restart when press enter 
    onSubmit(term);
  }
  const handleChange = (event) => {
    setTerm(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleClick} className='searchbox'>
        <input type="text" onChange={handleChange} value={term} className='text-4xl leading-none rounded-lg px-3'/>
      </form>
    </div>
  )
}

export default SearchBar

