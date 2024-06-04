import React from 'react'
import '../index.css'

const ImageShow = (props) => {
  const { image } = props
  return (
    <div className='w-full '>
      <img src={image.urls.small} alt={image.alt_description} className='rounded-lg shadow-xl'/>
    </div>
  )
}

export default ImageShow