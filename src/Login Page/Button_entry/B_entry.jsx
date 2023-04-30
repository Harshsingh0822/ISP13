import React from 'react'
import './B_entry.css'
import { Link } from 'react-router-dom'

export default function B_entry(props) {
  return (
    <div className='Bentry'>
      <Link to={props.Link} className='Link'>{props.Name}</Link>
    </div>
  )
}
