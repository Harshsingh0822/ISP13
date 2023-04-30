import React from 'react'
import Dform from "./DForm/Dform"
import CloseIcon from '@mui/icons-material/Close'
import { Link } from 'react-router-dom';




export default function navi() {
   return (<div className='FormOL'>
                <Dform />
              <Link to="/webpage2"> <CloseIcon className='Cross' /></Link> 
           </div>);
   }
           

