import React from 'react'
import "./Top2Bar.css" 
import Button from "@mui/material/Button"
import Cbutton from '../Button/Cbutton.jsx'
import { Link } from 'react-router-dom'


export default function Top2Bar() {
  return (
    <div className='Top2Bar'>
    <div className='Category1'>
    <h4 className='C1Text'>Category</h4>
    <Cbutton />
    <h4 className='C1Text'>Society</h4>
    <Cbutton />
    </div>
    <Link to="/Webpage2/entry" className='Link'>
    <Button variant="contained" sx={{height: '40px'}}>Add Item</Button>
    </Link>
    </div>
  )
}
