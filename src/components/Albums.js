import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Albums({albums}) {


  return (
    <aside>
       { albums && albums.map((album) => <NavLink to={`/album/${album.id}`} key={album.id}>Album {album.id}</NavLink> )}
    </aside>
  )
}
