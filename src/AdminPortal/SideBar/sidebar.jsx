import React from 'react'
import "./sidebar.css"
import {AccessAlarm} from '@mui/icons-material';
import Button1 from "./Component/Button1"


export default function sidebar() {
  return (
    <div className='sidebar'>
      <div className="icon-box">
      <span className="sidebar-icon" >
          <AccessAlarm sx={{ fontSize: 60 }}/>
      </span>
      <span className="sidebar-icon" >
          <AccessAlarm sx={{ fontSize: 60 }}/>
      </span>
      <span className="sidebar-icon" >
          <AccessAlarm sx={{ fontSize: 60 }}/>
      </span>
      <span className="sidebar-icon" >
          <AccessAlarm sx={{ fontSize: 60 }}/>
      </span>
      <span className="sidebar-icon" >
          <AccessAlarm sx={{ fontSize: 60 }}/>
      </span>
      <span className="sidebar-icon" >
          <AccessAlarm sx={{ fontSize: 60 }}/>
      </span>
      </div>
      <div className="list-box">
        <Button1 name="Home"/>
        <Button1 name="orders"/>
        <Button1 name="Purchase" />
        <Button1 name="settings"/>
        
      </div>
    </div>
  )
}
