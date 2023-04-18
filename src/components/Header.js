import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className='navigation'>
        <Link to='/' >Home</Link>
        <NavLink to='/favorites' >Favorites</NavLink>
    </header>
  )
}
