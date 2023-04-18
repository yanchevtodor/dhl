import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='home page'>
      <h1>Welcome to the gallery</h1>
      <p>Explore and enjoy our photo albums.</p>
      <Link to={`/album/1`}>Get Started</Link>
      <Link to={`/favorites`}>Or go to Favorites</Link>
    </div>
  )
}
