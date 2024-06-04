import ImageShow from './ImageShow'
import React from 'react'
import '../index.css'

const ApiPic = (props) => {
  const { images } = props
  const renderingImages = images.map((image) => {
    return <ImageShow image={image} key={image.id}/>
  })
  return (
    <div className='grid grid-cols-5 gap-4 w-[900px]'>
      {renderingImages}
    </div>
  )
}

export default ApiPic