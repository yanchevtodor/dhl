import React from 'react'
import Favorite from './Favorite'


export default function Card({image}) {

  return (
    image && 
        <div className='card' key={image.id}>
          <div className='card-inner'>
            <Favorite id={image.id}/>
            <div className="image">
                <img src={image.thumbnailUrl} />
            </div>
            <div className='image-title' >
            <h4>{image.id} - {image.title}</h4>
            </div>
          </div>
        </div>
  )
}
