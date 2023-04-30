import React from 'react'
import "./Webpage2.css"
import TopBar from './Components/TopBar/TopBar'
import Listing from './Components/Listing/Listing'
import Top2Bar from './Components/Top2Bar/Top2Bar'
// import Dform from './Components/DForm/Dform'
// import CloseIcon from '@mui/icons-material/Close'
import Navi from './Components/Navi'
import { Routes, Route } from 'react-router-dom'

export default function Webpage2() {
     
  return (
  
    <div className='Webpage2'>
      <TopBar />
      <div className='Spacebox'>
      <Top2Bar/>
      </div>
      <div className='Listing'><Listing /></div>
      <div className='Spacebox'>
        <Routes>
          <Route path='entry' element={<Navi />}></Route>
        </Routes>
      </div>
    </div>
    
  )
}


//<Navi /> line: 21
