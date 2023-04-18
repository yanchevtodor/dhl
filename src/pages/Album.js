import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

export default function Album({ albums }) {

  const { id } = useParams();
  const album = albums[id - 1];

  if (!album) {
    return ;
  }

  return (
    <div className="albums page">
      {       
        album 
        ?
          <div className='images'>
              { album.photos.map((image, index) => <Card image={image} key={index}/> ) }    
          </div>
        :
          <div className='images'>Album not found</div>
      }
    </div>
  );
}